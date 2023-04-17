// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'WorqHat API Documentation',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://api.worqhat.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'WorqHat', // Usually your GitHub org/user name.
  projectName: 'api-documentation', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/worqhat/api-documentation/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/worqhat/api-documentation/edit/main/',
        },
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
        title: 'My Site',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'WorqHat',
            items: [
              {
                label: 'Playground',
                to: 'https://playground.worqhat.app/worqbot',
              },
              {
                label: 'No-Code Builder',
                to: 'https://www.worqhat.com/#no-code-builder',
              },
              {
                label: 'WorqDocs',
                to: 'https://www.worqhat.com/#worqdocs',
              },
              {
                label: 'AI Workflows',
                to: 'https://www.worqhat.com/#workflows',
              },
              {
                label: 'Databases',
                to: 'https://www.worqhat.com/#databases',
              },
              {
                label: 'Integrations',
                href: 'https://playground.worqhat.app/coming-soon',
              },
            ],
          },
          {
            title: 'Company',
            items: [
              {
                label: 'Careers',
                href: 'https://careers.worqhat.com/',
              },
              {
                label: 'Changelog',
                href: 'https://updates.worqhat.com/',
              },
              {
                label: 'Security',
                href: 'https://worqhat.com/security',
              },
              {
                label: 'Status',
                href: 'https://worqhat-status.statuspage.io/',
              },
              {
                label: 'Terms of Service',
                href: 'https://worqhat.com/terms-of-service',
              },
              {
                label: 'Privacy Policy',
                href: 'https://worqhat.com/privacy-policy',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Support',
                to: 'https://docs.worqhat.com/',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/worqhat/api-documentation',
              },
            ],
          },
          {
            title: 'Follow Us',
            items: [
                {
                    label: 'Twitter',
                    href: 'https://twitter.com/worqhat',
                },
                {
                    label: 'LinkedIn',
                    href: 'https://www.linkedin.com/company/worqhat',
                },
                {
                    label: 'Facebook',
                    href: 'https://www.facebook.com/worqhat',
                },
                {
                    label: 'Instagram',
                    href: 'https://www.instagram.com/worqhat',
                },
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Winlysis Private Limited - All Rights Reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
