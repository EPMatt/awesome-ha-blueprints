---
name: IKEA E1524/E1810 5-Button Remote
description: Controller automation for executing any kind of action triggered by an IKEA E1524/E1810 5-Button remote remote controller. Allows to optionally loop an action on a button long press. Supports Zigbee2MQTT, deCONZ, ZHA.
---

# IKEA E1524/E1810 5-Button Remote

## Description

This blueprint provides universal support for running any custom action when a button is pressed on the provided IKEA E1524/E1810 remote controller. Supports remotes integrated with either Zigbee2MQTT, deCONZ or ZHA. Just specify the integration used to connect the remote to Home Assistant when setting up the automation, and the blueprint will take care of all the rest.

In addition of being able to provide custom actions for every kind of button press supported by the remote, the blueprint allows to loop the long press actions while the corresponding button is being held. Once released, the loop stops. This is useful when holding down a button should result in a continuous action (such as lowering the volume of a media player, or controlling a light brightness).
The blueprint also adds support for virtual double button press events, which are not exposed by the controller itself.

Moreover, automations created with this blueprint can be connected with one or more [Hooks](https://epmatt.github.io/awesome-ha-blueprints/blueprints/hooks) supported by this controller.
Hooks allow to easily create controller-based automations for interacting with media players, lights, covers and more. See the list of [Hooks available for this controller](#available-hooks) for additional details.

## Requirements

### (Optional) Zigbee2MQTT

If you plan to integrate the 5-button remote with Zigbee2MQTT, you must have this integration set up. Installation methods differ between different installation types. Check out the documentation for full details on the required hardware and how to set up Zigbee2MQTT on your system.

[Zigbee2MQTT Docs](https://www.zigbee2mqtt.io/)

### (Optional) ZHA Integration

If you plan to integrate the 5-button remote with ZHA, you must have this integration set up. The ZHA integration can be configured from the Home Assistant UI. Check the documentation for full details on the required hardware and how to set up ZHA on your system.

[ZHA Integration Docs](https://www.home-assistant.io/integrations/zha/)

### (Optional) deCONZ Integration

If you plan to integrate the 5-button remote with deCONZ, you must have this integration set up. The deCONZ integration can be configured from the Home Assistant UI and requires an additional container to run deCONZ on. Head over to the documentation for full details on the required hardware and how to set up deCONZ on your system.

[deCONZ Integration Docs](https://www.home-assistant.io/integrations/deconz/)

### (Optional) Input Text Integration

This integration provides the entity to store the last button event, which is needed when using ZHA to integrate the remote and determining which button has been released. This should be activated by default so unless you tweaked the default configuration you're good to go.

[Input Text Integration Docs](https://www.home-assistant.io/integrations/input_text/)

## Inputs

<Input
 name='Integration'
 description='Integration used for connecting the remote with Home Assistant. Type "Zigbee2MQTT", "deCONZ" or "ZHA".'
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
 name='Left button - short press'
 description='Action to run on short left button press.'
 selector='action'
 />
<Input
 name='Left button - double press'
 description='Action to run on double left button press.'
 selector='action'
 />
<Input
 name='Left button - short press'
 description='Action to run on short left button press.'
 selector='action'
 />
<Input
 name='Left button - long press'
 description='Action to run on long left button press.'
 selector='action'
 />
<Input
 name='Left button - release after long press'
 description='Action to run on left button release after a long press.'
 selector='action'
 />
<Input
 name='Right button - short press'
 description='Action to run on short right button press.'
 selector='action'
 />
<Input
 name='Right button - double press'
 description='Action to run on double right button press.'
 selector='action'
 />
<Input
 name='Right button - long press'
 description='Action to run on long right button press.'
 selector='action'
 />
<Input
 name='Right button - release after long press'
 description='Action to run on right button release after a long press.'
 selector='action'
 />
<Input
 name='Up button - short press'
 description='Action to run on short up button press.'
 selector='action'
 />
<Input
 name='Up button - double press'
 description='Action to run on double up button press.'
 selector='action'
 />
<Input
 name='Up button - long press'
 description='Action to run on long up button press.'
 selector='action'
 />
<Input
 name='Up button - release after long press'
 description='Action to run on up button release after a long press.'
 selector='action'
 />
<Input
 name='Down button - short press'
 description='Action to run on short down button press.'
 selector='action'
 />
<Input
 name='Down button - double press'
 description='Action to run on double down button press.'
 selector='action'
 />
<Input
 name='Down button - long press'
 description='Action to run on long down button press.'
 selector='action'
 />
<Input
 name='Down button - release after long press'
 description='Action to run on down button release after a long press.'
 selector='action'
 />
<Input
 name='Center button - short press'
 description='Action to run on short center button press.'
 selector='action'
 />
<Input
 name='Center button - double press'
 description='Action to run on double center button press.'
 selector='action'
 />
<Input
 name='Center button - long press'
 description='Action to run on long center button press.'
 selector='action'
 />
<Input
 name='Long left button press - loop until release'
 description='Boolean to indicate whether to loop the action until the button is released.'
 selector='boolean'
 />
<Input
 name='Long right button press - loop until release'
 description='Boolean to indicate whether to loop the action until the button is released.'
 selector='boolean'
 />
<Input
 name='Long up button press - loop until release'
 description='Boolean to indicate whether to loop the action until the button is released.'
 selector='boolean'
 />
<Input
 name='Long down button press - loop until release'
 description='Boolean to indicate whether to loop the action until the button is released.'
 selector='boolean'
 />
<Input
 name='Expose left button double press event'
 description='Choose whether or not to expose the virtual double press event.'
 selector='boolean'
 />
<Input
 name='Expose right button double press event'
 description='Choose whether or not to expose the virtual double press event.'
 selector='boolean'
 />
<Input
 name='Expose up button double press event'
 description='Choose whether or not to expose the virtual double press event.'
 selector='boolean'
 />
<Input
 name='Expose down button double press event'
 description='Choose whether or not to expose the virtual double press event.'
 selector='boolean'
 />
<Input
 name='Expose center button double press event'
 description='Choose whether or not to expose the virtual double press event.'
 selector='boolean'
 />
<Input
 name='Helper - Last Press Event'
 description='Input Text used to store the last press event. See docs for more. Provide an entity only if the remote is integrated with ZHA or if you are using a double press action.'
 selector='entity'
 required='ZHA, double press action'
 />
<Input
 name='Helper - Double Press delay'
 description='Max delay between the first and the second button press for the double press event. Provide a value only if you are using a double press action. Increase this value if you notice that the double press action is not triggered properly.'
 selector='number'
 />

## Available Hooks

### Light

- Up button short press -> Brightness up
- Up button long press & hold -> Brightness up (continuous, until release)
- Down button short press -> Brightness down
- Down button long pres & hold -> Brightness down (continuous, until release)
- Left button short press -> Color down
- Left button long press & hold -> Color down (continuous, until release)
- Right button short press -> Color up
- Right button long press & hold -> Color up (continuous, until release)
- Center button short press -> Toggle

[Light Hook docs](../hooks/light)

### Media Player

- Up button short press -> Volume up
- Up button long press & hold -> Volume up (continuous, until release)
- Down button short press -> Volume down
- Down button long pres & hold -> Volume down (continuous, until release)
- Left button short press -> Previous Track
- Right button short press -> Next Track
- Center button short press -> Play/Pause
- Center button hold -> Stop

[Media Player Hook docs](../hooks/media_player)

## Additional Notes

The reason why a text input is required to store the last long press event when using a remote with ZHA is because of the actions mapping for the controller in ZHA. Natively, the controller doesn't allow to distinguish between different button release events, so the blueprint must store the previous clicked button, using the text input. Make sure the input text is not altered by any other agents, since this could break the automation.

It's also important to notice that the controller doesn't natively support double press events. This blueprint provides virtual double press events by relying on the text input, used to store the last short press event, and a delay, which represents the maximum time gap between the first and second short press required to trigger the virtual double press.

When double press events are enabled for a specific button, clicking the button results in the automation first waiting for the second button press, then, if none is received within the provided delay, executing the short press action.

If double press events are disabled for a specific button, the corresponding single press action will be executed immediately when the button is pressed.
