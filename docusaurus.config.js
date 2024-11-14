import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Documentação Virtual',
  tagline: 'HAPPDINE',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://documento-virtual.vercel.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'biatorrecilas', // Usually your GitHub org/user name.
  projectName: 'documento_virtual', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          customCss: [
            './src/css/custom.css', 
          ],
        },
      }),
    ],
  ],

  themeConfig:
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'Project Logo',
          src: '/img/HAPPDINE2.svg',
          srcDark: '/img/HAPPDINE_dark.svg',
          style: { 
            width: '150px',
            height: 'auto',
            paddingTop: '5px', 
            marginLeft: '30px',
          },
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'right',
            label: 'Documentação',
          },
          {
            to: 'https://happ-dine.vercel.app/',
            label: 'Site ',
            position: 'right',
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
            title: 'Time',
            items: [
              {
                label: 'Sobre Nós',
                to: '/#sobre-nos',
              },
            ],
          },
          {
            title: 'Acessar',
            items: [
              {
                label: 'HAPPDINE Site',
                to: 'https://happ-dine.vercel.app/',
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
