import React from 'react'
import Input from './Input'

interface InputSectionProps {
  name: string
  icon?: string
  collapsed?: boolean
  input: Record<string, any>
}

const InputSection: React.FC<InputSectionProps> = ({
  name,
  icon,
  collapsed,
  input,
}) => {
  return (
    <div className='blueprint-input-section'>
      <div className='section-header'>
        {icon && <i className={icon}></i>}
        <h4>{name}</h4>
      </div>
      <div className={`section-content ${collapsed ? 'collapsed' : ''}`}>
        {Object.entries(input).map(([key, inputData]) => {
          const requiredMatch = inputData.name.match(/\(([^)]*\s+)?Required\)/)

          const props = {
            name: inputData.name
              .replace('(Optional) ', '')
              .replace('(Required) ', '')
              .replace('(Deprecated) ', '')
              .replace('(Virtual) ', '')
              .replace(requiredMatch?.[0] || '', '')
              .trim(),
            description: inputData.description,
            selector: Object.keys(inputData.selector || {})[0] || 'none',
            required: requiredMatch ? (requiredMatch[1] ?? ' ') : undefined,
            deprecated: inputData.name.includes('(Deprecated)'),
            virtual: inputData.name.includes('(Virtual)'),
          }

          return <Input key={key} {...props} />
        })}
      </div>
    </div>
  )
}

export default InputSection
