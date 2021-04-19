import React from 'react'
import Zigbee2MQTTRequirement from './requirements/controllers/Zigbee2MQTTRequirement'
import ZHARequirement from './requirements/controllers/ZHARequirement'
import DeCONZRequirement from './requirements/controllers/DeCONZRequirement'
import CustomRequirement from './requirements/CustomRequirement'
import ControllerRequirement from './requirements/hooks/ControllerRequirement'

const requirements = {
  zigbee2mqtt: Zigbee2MQTTRequirement,
  zha: ZHARequirement,
  deconz: DeCONZRequirement,
  controller: ControllerRequirement,
}

function Requirement({ id, required, name, refers, children }) {
  const Component = id ? requirements[id] : CustomRequirement
  return (
    <Component name={name} required={required} refers={refers}>
      {children}
    </Component>
  )
}

export default Requirement
