---
name: Light
description: Hook automation which allows to control a light. Supports brightness and color control both for white temperature and rgb lights.
---

# Light

## Description

This Hook blueprint allow to build a controller-based automation to control a light. Supports brightness and color control both for white temperature and rgb lights.

An automation created with this blueprint must be linked to a [Controller](https://epmatt.github.io/awesome-ha-blueprints/blueprints/controllers) automation. Controllers are blueprints which allow to easily integrate a wide range of controllers and use them to run a set of actions when interacting with them. They expose an abstract interface used by Hooks to create controller-based automations.

See the list of [Controllers supported by this Hook](#supported-controllers) for additional details.

## Requirements

### Controller Automation

To use this blueprint you need to first create an automation with a Controller blueprint. You can then create an automation with this Hook, **making sure that you provide the same controller device or entity used in the corresponding Controller blueprint**. This key step will link the two automations and ensure the Hook will respond to events fired by the Controller.

[List of Supported Controllers](#supported-controllers)
[Controllers Docs](https://epmatt.github.io/awesome-ha-blueprints/blueprints/controllers)

### Light Integration

This integration provides the entity which represents a light in Home Assistant. It should be activated by default so unless you tweaked the default configuration you're good to go.

[Light Integration Docs](https://www.home-assistant.io/integrations/light/)

## Inputs

<Input
 name='Controller device'
 description='The controller device which will control the light. Choose a value only if the integration used to connect the controller to Home Assistant exposes it as a Device. This value should match the one specified in the corresponding Controller automation.'
 selector='device'
 />
<Input
 name='Controller entity'
 description='The controller entity which will control the light. Choose a value only if the integration used to connect the controller to Home Assistant exposes it as an Entity. This value should match the one specified in the corresponding Controller automation.'
 selector='entity'
 />
<Input
 name='Controller model'
 description='The model for the controller used in this automation. Choose a value from the list of supported controllers.'
 selector='select'
 required
 />
<Input
 name='Light'
 description='Light which will be controlled with this automation.'
 selector='entity'
 required
 />
<Input
 name='Light Color Mode'
 description='Specify how the controller will set the light color. Choose "Color Temperature" and "Hue - Saturation" depending on the features supported by your light. If you are not sure you can select "Auto"'
 selector='select'
 />
<Input
 name='Light Transition'
 description='Number that represents the time (in milliseconds) the light should take turn on or off, if the light supports it.'
 selector='number'
 />

## Supported Controllers

- [IKEA E1524/E1810 5-Button remote](https://epmatt.github.io/awesome-ha-blueprints/blueprints/controllers/ikea_e1524_e1810)
- [IKEA E1743 On/Off Switch & Dimmer](https://epmatt.github.io/awesome-ha-blueprints/blueprints/controllers/ikea_e1743)
- [IKEA E1744 SYMFONISK rotary remote](https://epmatt.github.io/awesome-ha-blueprints/blueprints/controllers/ikea_e1744)

## Additional Notes

If you want to link multiple lights to the same controller you can either use [Light Groups](https://www.home-assistant.io/integrations/light.group/) or build multiple Hooks linked to the same Controller.
