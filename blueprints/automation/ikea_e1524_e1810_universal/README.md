---
name: IKEA E1524/E1810 5-button Remote - Universal Support
description: An universal automation for executing any kind of action triggered by an IKEA E1524/E1810 remote controller. Allows to optionally loop an action on a button long press. Supports Zigbee2MQTT, deCONZ, ZHA.
---

# IKEA E1524/E1810 5-button Remote - Universal Support

## Description

This blueprint provides universal support for running any custom action when a button is pressed on the provided IKEA E1524/E1810 remote controller. Supports remotes integrated with either Zigbee2MQTT, deCONZ or ZHA. Just specify the integration used to connect the remote to Home Assistant when setting up the automation, and the blueprint will take care of all the rest.

In addition of being able to provide custom actions for every kind of button press supported by the remote, the blueprint allows to loop the long press actions while the corresponding button is being held. Once released, the loop stops. This is useful when holding down a button should result in a continuous action (such as lowering the volume of a media player, or controlling a light brightness).

## Examples

### Light control with brightness and color temperature control

The following example allows to toggle on or off, control brightness and set color temperature on a generic light with variable white spectrum.

```yaml
alias: IKEA E1524/E1810 5-button Remote - Light Control
description: Control a Light with an IKEA E1524/E1810 remote
use_blueprint:
  path: EPMatt/ikea_e1524_e1810_universal.yaml
  input:
    integration: deCONZ
    remote: <your_remote_device_id>
    action_left_short:
      - service: light.turn_on
        data:
          color_temp: '{{ [state_attr("light.your_light","color_temp")|int - 50, 1]|max }}'
          transition: 0.25
        entity_id: light.your_light
    action_left_long:
      - service: light.turn_on
        data:
          color_temp: '{{ [state_attr("light.your_light","color_temp")|int - 50, 1]|max }}'
          transition: 0.25
        entity_id: light.your_light
      - delay:
          milliseconds: 250
    action_right_short:
      - service: light.turn_on
        data:
          color_temp: '{{ state_attr("light.your_light","color_temp")|int + 50 }}'
          transition: 0.25
        entity_id: light.your_light
    action_right_long:
      - service: light.turn_on
        data:
          color_temp: '{{ state_attr("light.your_light","color_temp")|int + 50 }}'
          transition: 0.25
        entity_id: light.your_light
      - delay:
          milliseconds: 250
    action_up_short:
      - service: light.turn_on
        data:
          brightness_step_pct: 10
          transition: 0.25
        entity_id: light.your_light
    action_up_long:
      - service: light.turn_on
        data:
          brightness_step_pct: 10
          transition: 0.25
        entity_id: light.your_light
      - delay:
          milliseconds: 250
    action_down_short:
      - service: light.turn_on
        data:
          brightness_step_pct: -10
          transition: 0.25
        entity_id: light.your_light
    action_down_long:
      - service: light.turn_on
        data:
          brightness_step_pct: -10
          transition: 0.25
        entity_id: light.your_light
      - delay:
          milliseconds: 250
    action_center_short:
      - type: toggle
        device_id: <your_light_device_id>
        entity_id: light.your_light
        domain: light
    button_left_long_loop: true
    button_right_long_loop: true
    button_up_long_loop: true
    button_down_long_loop: true
```

### RGB Light control with brightness and color setting

The following example allows to toggle on or off, control brightness and set color on a generic RGB light. Clicking or holding down the left or right arrow allows to cycle through 24 different colors.

```yaml
alias: IKEA E1524/E1810 5-button Remote - RGB Light Control
description: Control a RGB Light with an IKEA E1524/E1810 remote
use_blueprint:
  path: EPMatt/ikea_e1524_e1810_universal.yaml
  input:
    integration: deCONZ
    remote: <your_remote_device_id>
    action_left_short:
      - service: light.turn_on
        data:
          hs_color:
            - >-
              {{ (
              ((state_attr('light.your_light',
              'hs_color')[0] or 0) - 15)) % 360 }}
            - 100
          transition: 0.25
        entity_id: light.your_light
    action_left_long:
      - service: light.turn_on
        data:
          hs_color:
            - >-
              {{ (
              ((state_attr('light.your_light',
              'hs_color')[0] or 0) - 15)) % 360 }}
            - 100
          transition: 0.25
        entity_id: light.your_light
      - delay:
          milliseconds: 250
    action_right_short:
      - service: light.turn_on
        data:
          hs_color:
            - >-
              {{ (
              ((state_attr('light.your_light',
              'hs_color')[0] or 0) + 15)) % 360 }}
            - 100
          transition: 0.25
        entity_id: light.your_light
    action_right_long:
      - service: light.turn_on
        data:
          hs_color:
            - >-
              {{ (
              ((state_attr('light.your_light',
              'hs_color')[0] or 0) + 15)) % 360 }}
            - 100
          transition: 0.25
        entity_id: light.your_light
      - delay:
          milliseconds: 250
    action_up_short:
      - service: light.turn_on
        data:
          brightness_step_pct: 10
          transition: 0.25
        entity_id: light.your_light
    action_up_long:
      - service: light.turn_on
        data:
          brightness_step_pct: 10
          transition: 0.25
        entity_id: light.your_light
      - delay:
          milliseconds: 250
    action_down_short:
      - service: light.turn_on
        data:
          brightness_step_pct: -10
          transition: 0.25
        entity_id: light.your_light
    action_down_long:
      - service: light.turn_on
        data:
          brightness_step_pct: -10
          transition: 0.25
        entity_id: light.your_light
      - delay:
          milliseconds: 250
    action_center_short:
      - type: toggle
        device_id: <your_light_device_id>
        entity_id: light.your_light
        domain: light
    button_left_long_loop: true
    button_right_long_loop: true
    button_up_long_loop: true
    button_down_long_loop: true
```

## Requirements

### (Optional) Zigbee2MQTT

If you plan to integrate the 5-button remote with Zigbee2MQTT, you must have this integration set up. Installation methods differ between different installation types. Check the documentation for this integration for full details on the required hardware and how to set up Zigbee2MQTT on your system.

[Zigbee2MQTT Docs](https://www.zigbee2mqtt.io/)

### (Optional) ZHA Integration

If you plan to integrate the 5-button remote with ZHA, you must have this integration set up. The integration can be setup from the Home Assistant UI. Check the documentation for this integration for full details on the required hardware.

[ZHA Integration Docs](https://www.home-assistant.io/integrations/zha/)

### (Optional) deCONZ Integration

If you plan to integrate the 5-button remote with deCONZ, you must have this integration set up. The integration can be setup from the Home Assistant UI and requires an additional container to run deCONZ on. Head over to the documentation for this integration for full details on the required hardware and how to set up deCONZ on your system.

[deCONZ Integration Docs](https://www.home-assistant.io/integrations/deconz/)

### (Optional) Input Text Integration

This integration provides the entity to store the last button event, which is needed when using ZHA to integrate the remote and determining which button has been released. This should be activated by default so unless you tweaked the default configuration you're good to go.

[Input Text Integration Docs](https://www.home-assistant.io/integrations/input_text/)

## Inputs

### Integration

Integration used for connecting the remote with Home Assistant. Type "Zigbee2MQTT", "deCONZ" or "ZHA".

### (ZHA, deCONZ) Remote

The IKEA remote to use for the automation. Choose a value only if the remote is integrated with deCONZ or ZHA.

### (Zigbee2MQTT) Remote Action Sensor

The action sensor of the IKEA remote to use for the automation. Choose a value only if the remote is integrated with Zigbee2MQTT.

### (Optional) Left button - short press

Action to run on short left button press.

### (Optional) Left button - long press

Action to run on long left button press.

### (Optional) Left button - release after long press

Action to run on left button release after a long press.

### (Optional) Right button - short press

Action to run on short right button press.

### (Optional) Right button - long press

Action to run on long right button press.

### (Optional) Right button - release after long press

Action to run on right button release after a long press.

### (Optional) Up button - short press

Action to run on short up button press.

### (Optional) Up button - long press

Action to run on long up button press.

### (Optional) Up button - release after long press

Action to run on up button release after a long press.

### (Optional) Down button - short press

Action to run on short down button press.

### (Optional) Down button - long press

Action to run on long down button press.

### (Optional) Down button - release after long press

Action to run on down button release after a long press.

### (Optional) Center button - short press

Action to run on short center button press.

### (Optional) Center button - long press

Action to run on long center button press.

### Long left button press - loop until release

Boolean to indicate whether to loop the action until the button is released.

### Long right button press - loop until release

Boolean to indicate whether to loop the action until the button is released.

### Long up button press - loop until release

Boolean to indicate whether to loop the action until the button is released.

### Long down button press - loop until release

Boolean to indicate whether to loop the action until the button is released.

### (ZHA) Helper - Last Long Press Event

Input Text used to store the last long press event. Provide an entity only if the remote is integrated with ZHA.

## Additional Notes

The reason why a text input is required to store the last long press event when using a remote with ZHA is because of the actions mapping for the controller in ZHA. Natively, the controller doesn't allow to distinguish between different button release events, so the blueprint must store the previous clicked button, using the text input. Make sure the input text is not altered by any other agents, since this could break the automation.
