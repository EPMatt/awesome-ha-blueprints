import React, { useEffect, useState } from 'react'
import { blueprintsContext } from '../../utils'
import yaml from 'yaml'
import Input, { BlueprintInput } from './Input'
import InputSection from './InputSection'

interface InputsProps {
  category: string
  id: string
}

interface InputSection {
  name: string
  description?: string
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
              description={input.description}
              collapsed={input.collapsed}
              input={input.input}
            />
          )
        }

        // Handle regular input
        return <Input key={key} inputData={input} />
      })}
    </div>
  )
}

export default Inputs
