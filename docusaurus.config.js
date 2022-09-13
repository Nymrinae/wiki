const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Olympus Wiki',
  tagline: 'Olympus Wiki',
  url: 'https://wiki.olympusgg.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'OlympusGG', // Usually your GitHub org/user name.
  trailingSlash: false,
  projectName: 'wiki', // Usually your repo name.
  themeConfig:
    ({
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        }
      },
      navbar: {
        title: 'Olympus',
        logo: {
          alt: 'Olympus Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: 'rules',
            label: 'Wiki 🔱',
            position: 'left'
          },
          {
            to: 'changelogs',
            label: 'Changelogs 🔁',
            position: 'left'
          },
          {
            to: 'shop',
            label: 'Shop rotations 🔀',
            position: 'left'
          },
          {
            label: "Community 👨‍👨‍👧‍👦",
            position: "left",
            items: [
              {
                label: "Website",
                href: 'https://dashboard.olympusgg.com',
              },
              {
                label: "Discord",
                href: 'https://discord.gg/olympusgg',
              },
              {
                label: "Support",
                href: 'https://discord.gg/U3pMwCg59Q',
              },
              {
                label: "ElitePvPers",
                href: 'https://www.elitepvpers.com/forum/nostale-pserver-advertising/4966630-international-olympus-ascend-opening-20-11-2021-a.html',
              }
            ],
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [],
        logo: {
          alt: 'Olympus Logo',
          src: 'img/logo.svg',
          width: 17,
          height: 17,
        },
        copyright: `Copyright © ${new Date().getFullYear()} Olympus.`,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: 'Z1PIPBOW0R',
        apiKey: 'f032471bf98ab55cc7b99257ca3545a4',
        indexName: 'prod_DOC',
        contextualSearch: false,
        searchParameters: {}
      },
    }),
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/OlympusGG/wiki/blob/master',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'changelogs',
        routeBasePath: 'changelogs',
        path: './changelogs',
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'shop',
        routeBasePath: 'shop',
        path: './shop',
      },
    ]
  ],
});
