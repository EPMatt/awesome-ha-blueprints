---
name: Example Automation Blueprint
description: A description for the blueprint
---
# Example Automation Blueprint

## Description

_Describe here which goals your blueprint is trying to achieve. Provide also a brief description of how it works internally._

This example automation blueprint creates a persistent notification whenever the provided input boolean goes on.

## Requirements

_List here integrations, platforms, addons or any additional service which is strictly required to run this integration. Provide links for documentation about the requirement._

### Persistent Notification Integration

_Add here what this requirement is used for within the blueprint, as well as reference on how it should be configured to correctly integrate with the blueprint. It's advised to link to official documentation for the requirement here._

You must have this integration enabled on your system to run the automation. This should be activated by default so unless you tweaked the default configuration you're good to go.

[Persistent Notification Integration Docs](https://www.home-assistant.io/integrations/persistent_notification/)

## Inputs

_List here and describe the inputs used by the blueprint._

### Example Input Boolean

_Add here the description for what the input is used for and its type/constraints._

The boolean input which will activate the automation.

### Example Text

_Add here the description for what the input is used for and its type/constraints._

The text which will be displayed as message in the persistent notification.

## Additional Notes

_Add here additional information about the blueprint (screenshots, tests, known limitations or issues)._

This blueprint describes a task which, as tested on my system, should execute quickly. If for some reason the automation is quite slow and it gets triggered another time, it just gets restarted.
