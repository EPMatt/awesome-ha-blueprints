---
name: IKEA E1743 2-Button Remote - Universal Support
description: An universal automation for executing any kind of action triggered by an IKEA E1743 remote controller. Allows to optionally loop an action on a button long press. Supports Zigbee2MQTT, deCONZ, ZHA.
---

# IKEA E1743 2-button Remote - Universal Support

## Description

This blueprint provides universal support for running any custom action when a button is pressed on the provided IKEA E1743 remote controller. Supports remotes integrated with either Zigbee2MQTT, deCONZ or ZHA. Just specify the integration used to connect the remote to Home Assistant when setting up the automation, and the blueprint will take care of all the rest.

In addition of being able to provide custom actions for every kind of button press supported by the remote, the blueprint allows to loop the long press actions while the corresponding button is being held. Once released, the loop stops. This is useful when holding down a button should result in a continuous action (such as lowering the volume of a media player, or controlling a light brightness).

## Examples

### Light control with brightness setting

```yaml
alias: IKEA E1743 2-button Remote - Light Control
description: Control a Light with an IKEA E1743 remote
use_blueprint:
  path: EPMatt/ikea_e1743_universal.yaml
  input:
    integration: deCONZ
    remote: <your_remote_device_id>
    action_up_short:
      - type: turn_on
        device_id: <your_light_device_id>
        entity_id: light.your_light
        domain: light
    action_up_long:
      - service: light.turn_on
        data:
          brightness_step_pct: 10
          transition: 0.25
        entity_id: light.your_light
      - delay:
          milliseconds: 250
    action_down_short:
      - type: turn_off
        device_id: <your_light_device_id>
        entity_id: light.your_light
        domain: light
    action_down_long:
      - service: light.turn_on
        data:
          brightness_step_pct: -10
          transition: 0.25
        entity_id: light.your_light
      - delay:
          milliseconds: 250
    button_up_long_loop: true
    button_down_long_loop: true
```

## Requirements

### (Optional) Zigbee2MQTT

If you plan to integrate the E1743 2-button remote with Zigbee2MQTT, you must have this integration set up. Installation methods differ between different installation types. Check the documentation for this integration for full details on the required hardware and how to set up Zigbee2MQTT on your system.

[Zigbee2MQTT Docs](https://www.zigbee2mqtt.io/)

### (Optional) ZHA Integration

If you plan to integrate the E1743 2-button remote with ZHA, you must have this integration set up. The integration can be setup from the Home Assistant UI. Check the documentation for this integration for full details on the required hardware.

[ZHA Integration Docs](https://www.home-assistant.io/integrations/zha/)

### (Optional) deCONZ Integration

If you plan to integrate the E1743 2-button remote with deCONZ, you must have this integration set up. The integration can be setup from the Home Assistant UI and requires an additional container to run deCONZ on. Head over to the documentation for this integration for full details on the required hardware and how to set up deCONZ on your system.

[deCONZ Integration Docs](https://www.home-assistant.io/integrations/deconz/)

### (Optional) Input Text Integration

This integration provides the entity to store the last button event, which is needed when using ZHA or Zigbee2MQTT to integrate the remote and determining which button has been released. This should be activated by default so unless you tweaked the default configuration you're good to go.

[Input Text Integration Docs](https://www.home-assistant.io/integrations/input_text/)

## Inputs

### Integration

Integration used for connecting the remote with Home Assistant. Type "Zigbee2MQTT", "deCONZ" or "ZHA".

### (ZHA, deCONZ) Remote

The IKEA remote to use for the automation. Choose a value only if the remote is integrated with deCONZ or ZHA.

### (Zigbee2MQTT) Remote Action Sensor

The action sensor of the IKEA remote to use for the automation. Choose a value only if the remote is integrated with Zigbee2MQTT.

### (Optional) Up button - short press

Action to run on short up button press.

### (Optional) Up button - double press

Action to run on double up button press.

### (Optional) Up button - long press

Action to run on long up button press.

### (Optional) Up button - release after long press

Action to run on up button release after a long press.

### (Optional) Down button - short press

Action to run on short down button press.

### (Optional) Down button - double press

Action to run on double down button press.

### (Optional) Down button - long press

Action to run on long down button press.

### (Optional) Down button - release after long press

Action to run on down button release after a long press.

### Long up button press - loop until release

Boolean to indicate whether to loop the action until the button is released.

### Long down button press - loop until release

Boolean to indicate whether to loop the action until the button is released.

### (ZHA, Zigbee2MQTT Required, Optional) Helper - Last Press Event

Input Text used to store the last press event. See docs for more. Provide an entity only if the remote is integrated with ZHA, Zigbee2MQTT or if you're using a double press action.

### (Optional) Helper - Double Press delay

Max delay between the first and the second button press for the double press event. Provide a value only if you're using a double press action. Increase this value if you notice that the double press action is not triggered properly.

## Additional Notes

The reason why a text input is required to store the last long press event when using a remote with ZHA or Zigbee2MQTT is because of the actions mapping for the controller with these integrations. Natively, the controller doesn't allow to distinguish between different button release events, so the blueprint must store the previous clicked button, using the text input. Make sure the input text is not altered by any other agents, since this could break the automation.

It's also important to notice that the controller doesn't natively support double press events. This blueprint provides virtual double press events by relying on the text input, used to store the last short press event, and a delay, which represents the maximum time gap between the first and second short press required to trigger the virtual double press.

When a double press action is defined for a specific button, clicking the button results in the automation first waiting for the second button press, then, if none is received within the provided delay, executing the short press action.

If a double press action is not set for a specific button, the corresponding single press action will be executed immediately when the button is pressed.
