import { Config } from '@docusaurus/types';

const config: Config = {
  title: 'HEARTH Docs',
  url: 'https://letswastetimee.github.io',
  baseUrl: '/HEARTH-docs/', // Must match repo name
  projectName: 'HEARTH-docs',
  organizationName: 'letswastetimee',
  trailingSlash: false,
  deploymentBranch: 'gh-pages',
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'),
          editUrl: 'https://github.com/letswastetimee/HEARTH-docs/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

export default config;
