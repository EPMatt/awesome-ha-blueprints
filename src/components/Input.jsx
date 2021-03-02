import React from 'react'
import { Badge } from 'react-bootstrap'

const selectors = {
  action: {
    type: 'Action',
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

function Input(props) {
  const selector = props.selector ? selectors[props.selector] : selectors.none
  return (
    <div>
      <span style={styles.inputName}>
        {props.name} <Badge variant='primary'>{selector.type}</Badge>{' '}
        {props.required ? (
          <Badge variant='warning'>{props.required} Required</Badge>
        ) : (
          <Badge variant='info'>Optional</Badge>
        )}
      </span>
      <br />
      <p style={styles.inputDescription} className='mt-1'>
        {props.description}
      </p>
      <hr />
    </div>
  )
}

export default Input
