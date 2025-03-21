import CustomRequirement from '../CustomRequirement'
import React from 'react'

interface DeCONZRequirementProps {
  required: boolean
  refers: string
  children: React.ReactNode
}

const DeCONZRequirement: React.FC<DeCONZRequirementProps> = ({
  required,
  refers,
  children,
}) => {
  return (
    <CustomRequirement name='deCONZ Integration' required={required}>
      <p>
        If you plan to integrate the {refers} with deCONZ, you must have this
        integration set up. The deCONZ integration can be configured from the
        Home Assistant UI and requires an additional container to run deCONZ on.
        Head over to the documentation for full details on the required hardware
        and how to set up deCONZ on your system.
      </p>
      <p>{children}</p>
      <a href='https://www.home-assistant.io/integrations/deconz/'>
        deCONZ Integration Docs
      </a>
    </CustomRequirement>
  )
}

export default DeCONZRequirement
