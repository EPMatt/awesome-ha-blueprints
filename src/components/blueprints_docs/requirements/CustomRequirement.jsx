import React from 'react'
import { Badge } from 'react-bootstrap'

function Requirement(props) {
  return (
    <div className='mb-3'>
      <h3>
        {props.name}{' '}
        {props.required ? (
          <Badge variant='warning'>{props.required} Required</Badge>
        ) : (
          <Badge variant='info'>Optional</Badge>
        )}
      </h3>
      {props.children}
    </div>
  )
}

export default Requirement
