import React from 'react'
import CustomRequirement from '../CustomRequirement'

function Zigbee2MQTTRequirement(props) {
  return (
    <CustomRequirement name='Zigbee2MQTT Integration' required={props.required}>
      <p>
        If you plan to integrate the {props.refers} with Zigbee2MQTT, you must
        have this integration set up. Installation methods differ between
        different installation types. Check out the documentation for full
        details on the required hardware and how to set up Zigbee2MQTT on your
        system.
      </p>
      <p>{props.children}</p>
      <a href='https://www.zigbee2mqtt.io/'>Zigbee2MQTT Docs</a>
    </CustomRequirement>
  )
}

export default Zigbee2MQTTRequirement
