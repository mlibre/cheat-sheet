// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Mlibre ',
  tagline: 'Cheat Sheets',
  favicon: 'img/gt.png',

  url: 'https://mlibre.github.io/',
  baseUrl: '/Tutorials/',

  organizationName: 'mlibre',
  projectName: 'Tutorials',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/', // Serve the docs at the site's root
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Home',
        logo: {
          alt: 'My Site Logo',
          src: 'img/gt.png',
        },
        items: [
          {
            href: 'https://github.com/mlibre/Tutorials/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/mlibreT',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/mlibre/Tutorials',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Mlibre Cheat Sheet`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        "additionalLanguages": [
          "rust", "python", "ruby", "go", "toml"
        ]
      },
    }),
};

module.exports = config;
