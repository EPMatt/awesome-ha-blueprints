import React from 'react'
import Badge from '../../Badge'

const styles = {
  requirementNameContainer: {
    paddingBottom: '0.8rem',
  },
  requirementName: {
    display: 'inline',
  },
}

function Requirement(props) {
  return (
    <div className='margin-bottom--lg'>
      <div style={styles.requirementNameContainer}>
        <h3 style={styles.requirementName}>{props.name} </h3>
        {props.required ? (
          <Badge variant='warning'>{props.required} Required</Badge>
        ) : (
          <Badge variant='info'>Optional</Badge>
        )}
      </div>
      {props.children}
    </div>
  )
}

export default Requirement
