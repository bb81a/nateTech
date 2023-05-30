// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const remarkOembed = require('remark-oembed');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'NateTech Stack',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.webp',

  // Set the production url of your site here
  url: 'https://docs.wangbaoqi.tech',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          rehypePlugins: [],
          remarkPlugins: [
            [require('remark-oembed'), { syncWidget: true }]
          ],
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Wangbaoqi/nateTech/blob/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Wangbaoqi/nateTech/blob/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      }),
    ],
  ],
  plugins: [
    'docusaurus-plugin-sass'
  ],
  themes: ['@docusaurus/theme-live-codeblock'],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/logo.png',
      navbar: {
        title: 'NateTech',
        style: 'dark',
        logo: {
          alt: 'nate Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'computerSidebar',
            position: 'left',
            label: '计算机基础',
          },
          {
            type: 'docSidebar',
            sidebarId: 'frondEndSidebar',
            position: 'left',
            label: '前端开发',
          },
          {
            type: 'docSidebar',
            sidebarId: 'frondEndFrameSidebar',
            position: 'left',
            label: '前端框架',
          },
          {
            type: 'docSidebar',
            sidebarId: 'engineeringSidebar',
            position: 'left',
            label: '工程化',
          },
         
          { to: 'https://wangbaoqi.tech', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/wangbaoqi/nateTech',
            'aria-label': 'GitHub repository',
            className: 'navbar-github-link',
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
                label: '计算机基础',
                to: '/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://wangbaoqi.tech',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/wangbaoqi',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} NateTech, Inc. Built with Docusaurus.`,
      },
      prism: {
        // theme: lightCodeTheme,
        // darkTheme: darkCodeTheme,
        theme: require('./core/PrismTheme')
      },
    }),
};

module.exports = config;