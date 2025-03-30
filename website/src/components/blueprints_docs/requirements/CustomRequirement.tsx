import Badge from '../../Badge'
import React from 'react'

const styles = {
  requirementNameContainer: {
    paddingBottom: '0.8rem',
  },
  requirementName: {
    display: 'inline',
  },
}

interface CustomRequirementProps {
  name: string
  required: boolean
  children: React.ReactNode
}

const CustomRequirement: React.FC<CustomRequirementProps> = ({
  name,
  required,
  children,
}) => {
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

export default CustomRequirement
