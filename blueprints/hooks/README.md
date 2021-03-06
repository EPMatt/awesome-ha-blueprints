---
name: Hooks
description: Provide common functionality to any of the supported controllers. Build controller-based automations for media players, lights and much more in just a few clicks.
color: '#c9f3ff'
---

# Hooks

**Hooks** are blueprints which seamlessly integrate with [Controllers](controllers) to enable control of lights, media players and much more, without you ever writing a single line of code.

While Controllers are responsible for integrating the hardware and exposing an abstract interface to the user, Hooks can, as the name suggests, link to this interface and listen for events fired by a controller. Hooks take care of providing the actual control functionality for common use cases.

If you want to build a controller-based automation with Hooks, first create an automation with a [Controller blueprint](controllers). You can then create an automation with the desired Hook blueprint, **making sure that you provide the same controller device or entity used in the corresponding Controller blueprint**. This key step will link the two automations and ensure the Hook will respond to events fired by the Controller.

For more flexibility, you can link multiple Hooks to the same Controller: just create a Controller automation, then build as many Hook automations as needed. Moreover, if you need to customize certain actions or extend a Hook functionality, you can provide custom actions to the Controller blueprint, which will be run when a certain event is raised.

Please note that not all controllers might be used with each of the available Hooks. Check out the Hook documentation for the list of supported controllers for that specific Hook.  
You can also check the mapping between controller buttons and actions for supported Hooks in the Controller docs.
