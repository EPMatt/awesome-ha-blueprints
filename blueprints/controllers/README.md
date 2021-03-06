---
name: 'Controllers'
description: Integrate a wide set of controllers in Home Assistant and provide an easy to use interface to run custom actions on a controller event.
color: '#b5ffba'
---

# Controllers

**Controllers** are blueprints which allow to easily integrate a wide range of controllers (wall switches, remotes, dimmers, etc.) and use them to run a set of actions when interacting with them. They consist of a practical abstraction layer for easily building controlled-based automations without worrying about the handling of raw controller events, and the integration used to connect controllers to Home Assistant (Zigbee2MQTT, ZHA, deCONZ, ZWave, proprietary hubs, etc.).

When setting up a blueprint for one of the controllers, you'll be asked to select the integration used to connect the device to Home Assistant. You can then specify a sequence of actions for each of the events the controller exposes.

The type of exposed events depends on the controller model. Some controllers can also expose virtual events (ie. controller events not implemented by the manufacturer, such as button double clicks, etc.) which can be enabled if needed.

Most importantly, beside providing action sequences to Controller blueprints to build a custom controller-based automation, you can connect Controllers with [Hooks](hooks).
**Hooks** are blueprints which seamlessly integrate with Controllers to enable control of lights, media players and much more, without you ever writing a single line of code.

You can also both specify custom actions and connect a hook with the Controller, as well as use multiple hooks with a single Controller. For further details on this topic, please check out the [Hooks documentation](hooks).
