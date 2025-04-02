# Contributing

The goal of this project is to keep a curated collection of blueprints for Home Assistant entirely maintained by the community. Therefore, any contribution to this project is highly appreciated and welcomed! :rocket:

Please consider that this project is released under the [GPL-3.0 License](https://github.com/EPMatt/awesome-ha-blueprints/blob/main/LICENSE), and any discussion or interaction must adhere with the [Contributor Covenant Code of Conduct](https://github.com/EPMatt/awesome-ha-blueprints/blob/main/CODE_OF_CONDUCT.md). Make sure to read and agree with those terms before submitting your contribution.

Also, keep in mind that any of the following operations require that you've succesfully created a [GitHub](https://github.com/) account. If you have any troubles working with GitHub please consider taking a look at the [Official GitHub Docs](https://docs.github.com/).

## How to Contribute

### 1. I have an issue with a blueprint

Please open an issue in the [Issues tab](https://github.com/EPMatt/awesome-ha-blueprints/issues) using the **Blueprint Bug Report** template and fill in all the requested fields in the template before submitting the issue.

### 2. I Want to Add a Blueprint to the Project

Awesome! Follow these steps to contribute your new blueprint to this project:

1. **Fork** this repository to your GitHub account.
2. **Clone** the forked repository to your local machine:

   ```sh
   git clone https://github.com/your-username/awesome-ha-blueprints.git
   cd awesome-ha-blueprints
   ```

3. **Set up your development environment** following the [Development Setup](#development-setup) section.
4. **Create a new branch** named after your blueprint:

   ```sh
   git checkout -b my-new-blueprint
   ```

5. **Copy the example blueprint folder**:

   ```sh
   cp -r blueprints/automation/example blueprints/automation/my-new-blueprint
   ```

6. **Inside your blueprint folder** (blueprints/automation/my-new-blueprint):

   - **Rename** \example.yaml to match your blueprint name.
   - **Write your blueprint code** inside the renamed .yaml file. Ensure you follow the [Blueprint Guidelines](#blueprint-guidelines).

7. **Update the blueprint docs** in the website/docs/blueprints section:

   - Copy the example documentation file in a new folder for the blueprint:
     ```sh
     cp website/docs/blueprints/automation/example.mdx website/docs/blueprints/automation/my-new-blueprint.mdx
     ```
   - Add relevant documentation for your blueprint.
   - Make sure to add an entry to the **Changelog** at the bottom of the page.

8. **Commit your changes** with a clear message:

   ```sh
   git add .
   git commit -m "Add new blueprint: [blueprint name]"
   ```

9. **Push your branch** to your forked repository:

   ```sh
   git push origin my-new-blueprint
   ```

10. **Open a Pull Request (PR)**:

    - Go to your fork on GitHub, navigate to the **Pull Requests** tab, and click **New Pull Request**.
    - Select awesome-ha-blueprints/main as the base branch.
    - Provide a clear description of your blueprint.
    - Click **Open Pull Request**.

11. **🎉 You're all set!** A maintainer will review your PR, provide feedback if needed, and merge it once approved.
12. Once merged, you can **safely delete your fork** if you no longer need it.

Thank you for contributing to the Home Assistant community! 🚀🔥

### 3. I Want to Improve an Existing Blueprint

Awesome! Follow these steps to contribute your improvements to this project:

1. **Fork** this repository to your GitHub account.
2. **Clone** the forked repository to your local machine:
   ```sh
   git clone https://github.com/your-username/awesome-ha-blueprints.git
   cd awesome-ha-blueprints
   ```
3. **Set up your development environment** following the [Development Setup](#development-setup) section.
4. **Create a new branch** named after the blueprint you're editing:
   ```sh
   git checkout -b my-blueprint-update
   ```
5. **Make your changes to the blueprint**, ensuring you follow the [Blueprint Guidelines](#blueprint-guidelines).
6. **Update the blueprint docs**, in the `website/docs/blueprints` section, according to your changes. Make sure to add an entry to the **Changelog** at the bottom of the page.
7. **Commit your changes** with a clear message:
   ```sh
   git add .
   git commit -m "Improve blueprint: [blueprint name]"
   ```
8. **Push your branch** to your forked repository:
   ```
   git push origin my-blueprint-update
   ```
9. **Open a Pull Request** (PR):
   - Go to your fork on GitHub, navigate to the Pull Requests tab, and click New Pull Request.
   - Select `awesome-ha-blueprints/main` as the base branch.
   - Provide a clear description of your changes.
   - Click Open Pull Request.
10. **🎉 You're all set!** A maintainer will review your PR, provide feedback if needed, and merge it once approved.
11. Once merged, you can **safely delete your fork** if you no longer need it.

### 4. I've a question regarding a blueprint / this project

Please open a discussion in the [Discussions tab](https://github.com/EPMatt/awesome-ha-blueprints/discussions). Add your question in the **Q/A** category. The community will be glad to help you!

### 5. I've an idea for a new blueprint but I need help to develop it

Please open an issue in the [Issues tab](https://github.com/EPMatt/awesome-ha-blueprints/discussions) using the **New Blueprint Suggestion** template and fill in all the requested fields in the template before submitting the issue.

## Blueprint Guidelines

To ensure the delivery of good quality, highly reusable blueprints which can be widely adopted across the community, blueprints must adhere to the following guidelines:

- **Clarity and Descriptiveness**: don't use ambiguous names and identifiers. Include clear descriptions for both the blueprint and its inputs.
- **Flexibility**: your blueprint must be as general as possible, and should adapt to different use-cases. Consider different conditions and effectively handle corner cases.
- **Effective Testing**: make sure to conduct proper testing before submitting your contribution.
- **Input Restriction**: use selectors to restrict what users can provide as input to the blueprint.
- **Code Documentation**: if the blueprint contains a complicated piece of code, consider adding some YAML comments to better explain what the section is trying to achieve.
- **Consistency**: be consistent within your blueprint, for what regards naming and patterns you use to accomplish certain tasks. Also, adhere to the format of the provided templates.

## Development Setup

This repository uses **DevContainers** to provide a fully automated development environment. When you open the project in a supported environment (such as VS Code with the Dev Containers extension or GitHub Codespaces), the container automatically installs all dependencies and configures the development tools.

### Requirements for DevContainers

To use DevContainers, ensure you have the following installed:

- [Docker](https://www.docker.com/)
- [VS Code](https://code.visualstudio.com/) with the **Dev Containers** extension  
  _(Alternatively, you can use GitHub Codespaces, which supports DevContainers natively.)_

### Automated Code Formatting

- **Husky** and **Lint-Staged** ensure code is formatted correctly before each commit.
- Any staged files are automatically linted and formatted, preventing inconsistent styles from being committed.

To start developing, simply open the repository in a compatible DevContainer environment, and everything will be set up automatically! 🚀
