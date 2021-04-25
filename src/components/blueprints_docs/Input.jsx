import React from 'react'
import Badge from '../Badge'

const selectors = {
  action: {
    type: 'Action',
  },
  addon: {
    type: 'Add-on',
  },
  area: {
    type: 'Area',
  },
  boolean: {
    type: 'Boolean',
  },
  device: {
    type: 'Device',
  },
  entity: {
    type: 'Entity',
  },
  number: {
    type: 'Number',
  },
  object: {
    type: 'Object',
  },
  select: {
    type: 'Select',
  },
  target: {
    type: 'Target',
  },
  text: {
    type: 'Text',
  },
  time: {
    type: 'Time',
  },
  none: {
    type: 'Text',
  },
}

const styles = {
  inputName: {
    fontWeight: 600,
  },
  inputDescription: {
    fontSize: '0.9rem',
  },
}

function Input({ selector, required, name, description }) {
  const selectorVal = selector ? selectors[selector] : selectors.none
  return (
    <div>
      <span style={styles.inputName}>
        {name} <Badge variant='primary'>{selectorVal.type}</Badge>{' '}
        {required ? (
          <Badge variant='warning'>{required} Required</Badge>
        ) : (
          <Badge variant='info'>Optional</Badge>
        )}
      </span>
      <br />
      <p style={styles.inputDescription} className='margin-top--sm'>
        {description}
      </p>
      <hr />
    </div>
  )
}

export default Input
