---
name: IKEA E1812 Shortcut button
description: Controller automation for executing any kind of action triggered by an IKEA E1812 remote controller. Allows to optionally loop an action on a button long press. Supports Zigbee2MQTT, deCONZ, ZHA.
---

# IKEA E1812 Shortcut button

## Description

This blueprint provides universal support for running any custom action when the button is pressed on the provided IKEA E1812 remote controller. Supports remotes integrated with either Zigbee2MQTT, deCONZ or ZHA. Just specify the integration used to connect the remote to Home Assistant when setting up the automation, and the blueprint will take care of all the rest.

In addition of being able to provide custom actions for every kind of button press supported by the remote, the blueprint allows to loop the long press actions while the corresponding button is being held. Once released, the loop stops. This is useful when holding down a button should result in a continuous action (such as lowering the volume of a media player, or controlling a light brightness).
The blueprint also adds support for virtual double button press events, which are not exposed by the controller itself.

Moreover, automations created with this blueprint can be connected with one or more [Hooks](https://epmatt.github.io/awesome-ha-blueprints/blueprints/hooks) supported by this controller.
Hooks allow to easily create controller-based automations for interacting with media players, lights, covers and more. See the list of [Hooks available for this controller](https://epmatt.github.io/awesome-ha-blueprints/blueprints/controllers/ikea_e1812#available-hooks) for additional details.

## Requirements

### (Optional) Zigbee2MQTT

If you plan to integrate the E1812 Shortcut button with Zigbee2MQTT, you must have this integration set up. Installation methods differ between different installation types. Check the documentation for this integration for full details on the required hardware and how to set up Zigbee2MQTT on your system.

[Zigbee2MQTT Docs](https://www.zigbee2mqtt.io/)

### (Optional) ZHA Integration

If you plan to integrate the E1812 Shortcut button with ZHA, you must have this integration set up. The integration can be setup from the Home Assistant UI. Check the documentation for this integration for full details on the required hardware.

[ZHA Integration Docs](https://www.home-assistant.io/integrations/zha/)

### (Optional) deCONZ Integration

If you plan to integrate the E1812 Shortcut button with deCONZ, you must have this integration set up. The integration can be setup from the Home Assistant UI and requires an additional container to run deCONZ on. Head over to the documentation for this integration for full details on the required hardware and how to set up deCONZ on your system.

[deCONZ Integration Docs](https://www.home-assistant.io/integrations/deconz/)

### (Optional) Input Text Integration

This integration provides the entity to store the last button event, which is needed when using virtual double press events. This should be activated by default so unless you tweaked the default configuration you're good to go.

[Input Text Integration Docs](https://www.home-assistant.io/integrations/input_text/)

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
name='Button short press'
description='Action to run on short button press.'
selector='action'
/>
<Input
 name='Button double press'
 description='Action to run on double button press.'
 selector='action'
 />
<Input
 name='Button long press'
 description='Action to run on long button press.'
 selector='action'
 />
<Input
 name='Button release after long press'
 description='Action to run on button release after a long press.'
 selector='action'
 />
<Input
 name='Long button press - loop until release'
 description='Loop the action until the button is released.'
 selector='boolean'
 />
<Input
 name='Expose button double press event'
 description='Choose whether or not to expose the virtual double press event. Turn this on if you are providing an action for the button double press event.'
 selector='boolean'
 />
<Input
 name='Helper - Last Press Event'
 description='Input Text used to store the last press event. Provide an entity only if you are using a double press action.'
 required='Double press action'
 selector='entity'
 />
<Input
 name='Helper - Double Press delay'
 description='Max delay between the first and the second button press for the double press event. Provide a value only if you are using a double press action. Increase this value if you notice that the double press action is not triggered properly.'
 selector='number'
 />

## Available Hooks


## Additional Notes

It's also important to notice that the controller doesn't natively support double press events. This blueprint provides virtual double press events by relying on the provided text input, used to store the last short press event, and a delay, which represents the maximum time gap between the first and second short press required to trigger the virtual double press. Make sure the input text is not altered by any other agents, since this could break the automation.

When double press events are enabled, clicking the button results in the automation first waiting for the second button press, then, if none is received within the provided delay, executing the short press action.

If double press events are disabled, the corresponding single press action will be executed immediately when the button is pressed.
