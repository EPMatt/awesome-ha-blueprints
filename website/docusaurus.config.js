/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Awesome HA Blueprints',
  tagline: 'A curated list of automation blueprints for Home Assistant.',
  url: 'https://epmatt.github.io',
  baseUrl: '/awesome-ha-blueprints/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'EPMatt',
  projectName: 'awesome-ha-blueprints',
  themeConfig: {
    announcementBar: {
      id: 'support_us',
      content:
        '🚀 <b>Love this project?</b> <a target="_blank" href="https://github.com/EPMatt/awesome-ha-blueprints">Drop a star on GitHub</a>🌟 or <a target="_blank" href="https://www.buymeacoffee.com/epmatt">make a small donation</a>☕ to show your support!',
      backgroundColor: '#fffbd4',
      textColor: '#091E42',
    },
    navbar: {
      style: 'primary',
      title: 'Awesome HA Blueprints',
      logo: {
        alt: 'Awesome HA Blueprints Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/introduction/',
          activeBasePath: 'docs/introduction',
          label: 'Getting Started',
          position: 'left',
        },
        {
          to: 'docs/blueprints/',
          activeBasePath: 'docs/blueprints',
          label: 'Blueprints',
          position: 'left',
        },
        {
          href: '/help',
          label: 'Help',
          position: 'right',
        },
        {
          href: 'https://www.buymeacoffee.com/epmatt',
          label: 'Donate',
          position: 'right',
        },
        {
          href: 'https://github.com/EPMatt/awesome-ha-blueprints',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      links: [],
      copyright: `Awesome HA Blueprints is maintained by <a href='https://github.com/EPMatt'>Matteo Agnoletto</a>.<br/>Licensed under the <a href='https://github.com/EPMatt/awesome-ha-blueprints/blob/main/LICENSE'>GPL-3.0 License</a>`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/EPMatt/awesome-ha-blueprints/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
}
