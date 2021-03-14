---
name: IKEA E1744 SYMFONISK Rotary Remote
description: Controller automation for executing any kind of action triggered by an IKEA E1744 remote controller. Supports Zigbee2MQTT, deCONZ, ZHA.
---

# IKEA E1744 SYMFONISK Rotary Remote

## Description

This blueprint provides universal support for running any custom action when a button is pressed on the provided IKEA E1744 remote controller. Supports remotes integrated with either Zigbee2MQTT, deCONZ or ZHA. Just specify the integration used to connect the remote to Home Assistant when setting up the automation, and the blueprint will take care of all the rest.

In addition of being able to provide custom actions for every kind of button press supported by the remote, the blueprint allows to optionally loop the rotate actions while the remote is rotating either left or right. Once the remote stops rotating, the loop stops as well. This is useful when rotating the controller should result in a continuous action (such as lowering the volume of a media player, or controlling a light brightness).

Moreover, automations created with this blueprint can be connected with one or more [Hooks](https://epmatt.github.io/awesome-ha-blueprints/blueprints/hooks) supported by this controller.
Hooks allow to easily create controller-based automations for interacting with media players, lights, covers and more. See the list of [Hooks available for this controller](https://epmatt.github.io/awesome-ha-blueprints/blueprints/controllers/ikea_e1744#available-hooks) for additional details.

## Requirements

<Requirement
 id='zigbee2mqtt'>
When configuring the remote with Zigbee2MQTT make sure to disable the legacy integration for it, as reported [here](https://www.zigbee2mqtt.io/devices/E1744.html#legacy-integration). This blueprint won't work with controllers with a legacy integration due to their instability and fundamental problems.
</Requirement>
<Requirement
 id='zha'
 />
<Requirement
 id='deconz'
 />
<Requirement
 name='Input Text Integration'
 required='ZHA, Zigbee2MQTT, double press action'>
This integration provides the entity which will be used to store the last button event. It's required when using ZHA or Zigbee2MQTT to integrate the remote, as well as when using double press events. This should be activated by default so unless you tweaked the default configuration you're good to go.

[Input Text Integration Docs](https://www.home-assistant.io/integrations/input_text/)
</Requirement>

## Inputs

<Input
 name='Integration'
 description='Integration used for connecting the remote with Home Assistant. Select "Zigbee2MQTT", "deCONZ" or "ZHA".'
 selector='select'
 required
 />
<Input
 name='Remote'
 description='The IKEA remote to use for the automation. Choose a value only if the remote is integrated with deCONZ or ZHA.'
 selector='device'
 required='ZHA, deCONZ'
 />
<Input
 name='Remote Action Sensor'
 description='The action sensor of the IKEA remote to use for the automation. Choose a value only if the remote is integrated with Zigbee2MQTT.'
 selector='entity'
 required='Zigbee2MQTT'
 />
<Input
name='Rotate left'
description='Action to run on rotate left.'
selector='action'
/>
<Input
 name='Rotate left stop'
 description='Action to run when stopping to rotate left the remote.'
 selector='action'
 />
<Input
 name='Rotate right'
 description='Action to run on rotate right.'
 selector='action'
 />
<Input
 name='Rotate right stop'
 description='Action to run when stopping to rotate right the remote.'
 selector='action'
 />
<Input
 name='Click'
 description='Click'
 selector='action'
 />
<Input
 name='Double click'
 description='Action to run on remote double click.'
 selector='action'
 />
<Input
 name='Triple click'
 description='Action to run on remote triple click.'
 selector='action'
 />
<Input
 name='Rotate Left - loop until stop'
 description='Loop the rotate left action until the remote stops rotating left.'
 selector='boolean'
 />
<Input
 name='Rotate Right - loop until stop'
 description='Loop the rotate right action until the remote stops rotating right.'
 selector='boolean'
 />
<Input
 name='Helper - Last Controller Event'
 description='Input Text used to store the last event fired by the controller. Provide an entity only if the remote is integrated with ZHA or Zigbee2MQTT.'
 required='ZHA, Zigbee2MQTT'
 selector='entity'
 />

## Available Hooks

### Light

- Rotate left -> Brightness down (continuous, until stop)
- Rotate right -> Brightness up (continuous, until stop)
- Click -> Toggle
- Double click -> Color up
- Triple click -> Color down

[Light Hook docs](https://epmatt.github.io/awesome-ha-blueprints/blueprints/hooks/light)

### Media Player

- Rotate left -> Volume down (continuous, until stop)
- Rotate right -> Volume up (continuous, until stop)
- Click -> Play/Pause
- Double click -> Next track
- Triple click -> Previous track

[Media Player Hook docs](https://epmatt.github.io/awesome-ha-blueprints/blueprints/hooks/media_player)

## Additional Notes

The reason why a text input is required to store the last rotation event when using a remote with ZHA or Zigbee2MQTT is because of the actions mapping for the controller with these integrations. Natively, the controller doesn't allow to distinguish between different rotation events, so the blueprint must store the previous rotation, using the text input. Make sure the input text is not altered by any other agents, since this could break the automation.
