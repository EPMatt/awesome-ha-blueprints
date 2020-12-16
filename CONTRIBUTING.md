# Contributing

The goal of this project is to keep a curated collection of blueprints for Home Assistant entirely maintained by the community. Therefore, any contribution to this project is highly appreciated and welcomed! :rocket:

Please consider that this project is released under the [GPL-3.0 License](LICENSE), and any discussion or interaction must adhere with the [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md). Please make sure to read and agree with those terms before submitting your contribution.

## How to

### 1. I have an issue with a blueprint

Please open an issue in the [Issues tab](https://github.com/EPMatt/awesome-ha-blueprints/discussions) using the **Blueprint Issue** template and fill all the requested fields in the template before submitting the issue.

### 2. I want to add a blueprint to the project

Amazing! The following steps will guide you through the process of adding your contribution to this project:

* Fork this repo on your private GitHub account;
* Clone the forked repository on your computer;
* Create a new branch **named as your new blueprint**. This operation will ease the operations required for merging your changes into this repository:  ```git branch my-new-blueprint ``` (change `my-new-blueprint` with your blueprint's name);
* Checkout the new branch: ```git checkout my-new-blueprint ``` (change `my-new-blueprint` with your blueprint's name);

* Copy the example blueprint folder `blueprints/automation/_example` into `blueprints/automation`, renaming the folder with your blueprint name. This will be the folder when all files for your blueprint will reside;
* Inside your blueprint's folder:
  * rename the `_example.yaml` file with the name of your blueprint;
  * Add the code for your blueprint in the `.yaml` file you've just renamed. Please make sure to follow the [Blueprint Guidelines](CONTRIBUTING.md#Blueprint-Guidelines);
  * Add a description for your blueprint in the `README.md`;
* After you've reviewed your work commit;
* Push your changes to your fork: ```git push origin my-new-blueprint ``` (change `my-new-blueprint` with your blueprint's name);
* Navigate to the webpage for your repo on GitHub, go to the Pull Requests tab and open a new Pull Request. Make sure to select as base branch `ha-blueprints/main`.
* You're all set! Your PR will be reviewed and eventually your contribution will be merged in this repository. Thank you very much for having spent your time and energy to help the Home Assistant community! :fire:

### 3. I want to improve an existing blueprint

### 4. I've a question regarding a blueprint / this project

Please open a discussion in the [Discussions tab](https://github.com/EPMatt/awesome-ha-blueprints/discussions). Add your discussion in the **Q/A** category. The community will be glad to help you!

### 5. I've an idea for a new blueprint but I need help to develop it

Please open an issue in the [Issues tab](https://github.com/EPMatt/awesome-ha-blueprints/discussions) using the **New Blueprint** template and fill all the requested fields in the template before submitting the issue.

## Blueprint Guidelines

