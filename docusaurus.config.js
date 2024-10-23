// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Documentação Virtual',
  tagline: 'HAPPDINE',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-test-site.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'meu-usuario', // Usually your GitHub org/user name.
  projectName: 'nome-do-repositorio', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR', 'en'],
  },

  presets: [
    [
      'classic',
      
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '',
        logo: {
          alt: 'Project Logo',
          src: 'img/HAPPDINE.svg',
          style: { 
            width: '150px', /* Defina o tamanho desejado */
            height: 'auto',
            paddingTop: '5px'   /* Manter a proporção da altura */
          },
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentação',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://happ-dine.vercel.app/',
            label: 'HAPPDINE Site',
            position: 'left',
          },
          {
            type: 'localeDropdown',
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
                label: 'Documentação',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Sobre Nós',
                href: 'https://happ-dine.vercel.app/about_us.html',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'HAPPDINE Site',
                href: 'https://happ-dine.vercel.app/',
              },
            ],
          },
        ],
        copyright: `© Robert Bosch GmbH ${new Date().getFullYear()} Cap/ETS TCC Project, all rights reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
