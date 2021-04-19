import React from 'react'
import CustomRequirement from '../CustomRequirement'

function Zigbee2MQTTRequirement({ required, refers, children }) {
  return (
    <CustomRequirement name='Zigbee2MQTT Integration' required={required}>
      <p>
        If you plan to integrate the {refers} with Zigbee2MQTT, you must have
        this integration set up. Installation methods differ between different
        installation types. Check out the documentation for full details on the
        required hardware and how to set up Zigbee2MQTT on your system.
      </p>
      <p>{children}</p>
      <a href='https://www.zigbee2mqtt.io/'>Zigbee2MQTT Docs</a>
    </CustomRequirement>
  )
}

export default Zigbee2MQTTRequirement
