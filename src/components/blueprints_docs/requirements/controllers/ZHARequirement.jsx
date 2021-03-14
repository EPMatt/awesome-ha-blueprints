import React from 'react'
import CustomRequirement from '../CustomRequirement'

function ZHARequirement(props) {
  return (
    <CustomRequirement name='ZHA Integration' required={props.required}>
      <p>
        If you plan to integrate the {props.refers} with ZHA, you must have this
        integration set up. The ZHA integration can be configured from the Home
        Assistant UI. Check the documentation for full details on the required
        hardware and how to set up ZHA on your system.
      </p>
      <p>{props.children}</p>
      <a href='https://www.home-assistant.io/integrations/zha/'>
        ZHA Integration Docs
      </a>
    </CustomRequirement>
  )
}

export default ZHARequirement
