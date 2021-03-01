# Awesome HA Blueprints

![Maintained](https://img.shields.io/badge/maintained-yes-brightgreen) ![GPL-3.0 License](https://img.shields.io/github/license/EPMatt/awesome-ha-blueprints)

With the recent **Home Assistant 2020.12 Release**, a new exciting feature was introduced: _Blueprints_.

Blueprints, which currently are available only for the `automation` domain, are highly reusable configurations for the home automation hub.

For automations, an interesting use-case is described in the [Official Blueprint Documentation](https://www.home-assistant.io/docs/blueprint/):

> Imagine a blueprint that controls a light based on motion, that allows you to configure the motion sensor to trigger on, and the light to control.
>
> It is now possible to create two automations that each have their own configuration for this blueprint and that act completely independent, yet are based on the same automation configuration.

One of the major advantages of Blueprints is their ability to be customized by any user, adapting to their needs, **directly from the UI, without ever writing a single YAML line**.

This project aims to build a curated list of automation blueprints for Home Assistant, which can then be easily imported and updated in any Home Assistant instance. Each blueprint included in the collection will be:

- **Highly customizable** and **flexible** to user needs, but still hiding the complexity of their internal working to the user;
- **Reliable** on most situations and corner cases;
- **Fully maintained**, collaboratively **developed** and **tested by the community**.

One of the main focuses of the project is on **Reliability**. With more and more people looking into home automation every day, it's important that our smart homes run on reliable software. This includes not only server OSs, home automation hubs, and general services, but also the automations we use throughout the day.

The **ultimate goal** of Awesome HA Blueprints is to **develop an highly valuable resource** for Home Assistant newcomers who would like to include **complex automations** in their home automation setups **with just a few clicks**, without even touching a single line of code.

## Importing a blueprint

You can import blueprints directly from the Home Assistant UI.

1. Look for the blueprint you'd like to import [here](https://epmatt.github.io/awesome-ha-blueprints/blueprints);
2. In the page of the blueprint you'd like to import, click on the **Copy Link** button on the top of the page. The URL for the blueprint is now in your clipboard;
3. On your Home Assistant instance go to **Configuration** and then **Blueprints**
4. Click on the **Import Blueprint** button in the bottom right corner. A new dialog will pop-up;
5. Paste the URL for the blueprint and click on **Preview Blueprint**;
6. If desided change the name of the blueprint and finish the import;
7. You're good to go! Now your blueprint can be used for generating automations.

Check out the [Official documentation on Using Automation Blueprints](https://www.home-assistant.io/docs/automation/using_blueprints/) for the detailed process of importing blueprints into Home Assistant and using them for automations.

## Contributing to the project

Please check our [Contribution Guidelines](https://github.com/EPMatt/awesome-ha-blueprints/blob/main/CONTRIBUTING.md) for additional information on how to contribute. From issues to new blueprints submissions, everything is described in detail to make sure the community can benefit the most from your contribution.

## Further Developments

The Awesome HA Blueprints Project is just at its starting point, so many things could change in the upcoming weeks and months. This could include:

- changes to the template blueprint and documentation file;
- improvements to project documentation;
- implementation of a folder structure to better organize blueprints by category.

Awesome HA Blueprints is based on a strong contribution from the whole community. With an expected large interaction volume this project will require a lot of effort to be maintained. Therefore any suggestion on organization, guidelines, or anything that can improve the interaction with Awesome HA Blueprints would be amazing and highly appreciated!

## Additional Resources

- [Home Assistant official documentation on Blueprints](https://www.home-assistant.io/docs/blueprint/) if you want to learn more about blueprints, how to create and use them in your Home Assistant installation;
- [Home Assistant Blueprint Exchange forum](https://community.home-assistant.io/c/blueprints-exchange) the official resource for sharing blueprints within the community, which is currently seeing an intense activity from the community;
- [Beginner's Guide to Blueprints](https://youtu.be/oFcRe91LH1E) a YouTube video by Zack Barett which describes how to import, use and create blueprints.
