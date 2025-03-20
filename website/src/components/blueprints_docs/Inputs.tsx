import React, { useEffect, useState } from 'react'
import { blueprintsContext } from '../../utils'
import yaml from 'yaml'
import Input from './Input'
import InputSection from './InputSection'

interface InputsProps {
  category: string
  id: string
}

interface BlueprintInput {
  name: string
  description: string
  default?: any
  selector?: any
}

interface InputSection {
  name: string
  icon?: string
  collapsed?: boolean
  input: Record<string, BlueprintInput>
}

interface BlueprintMetadata {
  blueprint: {
    input?: Record<string, BlueprintInput | InputSection>
  }
}

const Inputs: React.FC<InputsProps> = ({ category, id }) => {
  const [inputs, setInputs] = useState<
    Record<string, BlueprintInput | InputSection>
  >({})

  useEffect(() => {
    try {
      const path = `./${category}/${id}/${id}.yaml`
      const content = blueprintsContext(path)
      const parsed = yaml.parse(content) as BlueprintMetadata
      setInputs(parsed.blueprint.input || {})
    } catch (error) {
      console.error('Error fetching blueprint:', error)
      setInputs({})
    }
  }, [category, id])

  return (
    <div className='blueprint-inputs'>
      {Object.entries(inputs).map(([key, input]) => {
        // Check if this is a section
        if ('input' in input) {
          return (
            <InputSection
              key={key}
              name={input.name}
              icon={input.icon}
              collapsed={input.collapsed}
              input={input.input}
            />
          )
        }

        // Handle regular input
        const requiredMatch = input.name.match(/\(([^)]*\s+)?Required\)/)

        const props = {
          name: input.name
            .replace('(Optional) ', '')
            .replace('(Required) ', '')
            .replace('(Deprecated) ', '')
            .replace('(Virtual) ', '')
            .replace(requiredMatch?.[0] || '', '')
            .trim(),
          description: input.description,
          selector: Object.keys(input.selector || {})[0] || 'none',
          required: requiredMatch ? (requiredMatch[1] ?? ' ') : undefined,
          deprecated: input.name.includes('(Deprecated)'),
          virtual: input.name.includes('(Virtual)'),
        }

        return <Input key={key} {...props} />
      })}
    </div>
  )
}

export default Inputs
