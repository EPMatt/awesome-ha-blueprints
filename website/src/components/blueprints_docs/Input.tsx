import React from 'react'
import Badge from '../Badge'

const selectors = {
  action: { type: 'Action' },
  addon: { type: 'Add-on' },
  area: { type: 'Area' },
  boolean: { type: 'Boolean' },
  device: { type: 'Device' },
  entity: { type: 'Entity' },
  virtual: { type: 'Virtual' },
  number: { type: 'Number' },
  object: { type: 'Object' },
  select: { type: 'Select' },
  target: { type: 'Target' },
  input_text: { type: 'Text' },
  text: { type: 'Text' }, // @deprecated
  time: { type: 'Time' },
  none: { type: 'Text' },
}

const styles = {
  input: {
    marginBottom: '1.25rem',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '0.5rem',
  },
  nameContainer: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: '0.5rem',
    alignItems: 'center',
  },
  name: {
    fontWeight: 600,
    color: 'var(--ifm-color-emphasis-900)',
  },
  badges: {
    display: 'flex',
    fontSize: '0.975rem',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    gap: '0.375rem',
    flexWrap: 'wrap' as const,
  },
  description: {
    margin: 0,
    color: 'var(--ifm-color-emphasis-700)',
    fontSize: '0.9375rem',
    lineHeight: 1.5,
  },
}

// Raw input data from the blueprint
export interface BlueprintInput {
  name: string
  description: string
  default?: any
  selector?: any
}

// Props for the Input component
interface InputProps {
  inputData: BlueprintInput
}

const Input: React.FC<InputProps> = ({ inputData }) => {
  // Parse the input data
  const requiredMatch = inputData.name.match(/\(([^)]*\s+)?Required\)/)

  const name = inputData.name
    .replace('(Optional) ', '')
    .replace('(Required) ', '')
    .replace('(Deprecated) ', '')
    .replace('(Virtual) ', '')
    .replace(requiredMatch?.[0] || '', '')
    .trim()

  const description = inputData.description
  const selector = Object.keys(inputData.selector || {})[0] || 'none'
  const required = requiredMatch ? (requiredMatch[1] ?? ' ') : undefined
  const deprecated = inputData.name.includes('(Deprecated)')
  const virtual = inputData.name.includes('(Virtual)')

  const selectorVal = selector ? selectors[selector] : selectors.none

  return (
    <div style={styles.input}>
      <div style={styles.header}>
        <div style={styles.nameContainer}>
          <span style={styles.name}>{name}</span>
        </div>
        <span style={styles.badges}>
          <Badge variant='primary'>{selectorVal.type}</Badge>
          {required ? (
            <Badge variant='warning'>{required} Required</Badge>
          ) : (
            <Badge variant='info'>Optional</Badge>
          )}
          {deprecated && <Badge variant='danger'>Deprecated</Badge>}
          {virtual && <Badge variant='secondary'>Virtual</Badge>}
        </span>
      </div>
      <p style={styles.description}>{description}</p>
    </div>
  )
}

export default Input
