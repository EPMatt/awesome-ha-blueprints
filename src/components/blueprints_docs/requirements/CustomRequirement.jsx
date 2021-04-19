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

function Requirement({ name, required, children }) {
  return (
    <div className='margin-bottom--lg'>
      <div style={styles.requirementNameContainer}>
        <h3 style={styles.requirementName}>{name} </h3>
        {required ? (
          <Badge variant='warning'>{required} Required</Badge>
        ) : (
          <Badge variant='info'>Optional</Badge>
        )}
      </div>
      {children}
    </div>
  )
}

export default Requirement
