import fs from 'fs';
import path from 'path';

function generateSidebarItems(directory: string, basePath = '') {
  return fs
    .readdirSync(directory)
    .filter(file => file.endsWith('.md') || file.endsWith('.mdx'))
    .map(file => ({
      type: 'doc',
      id: path.join(basePath, file.replace(/\.mdx?$/, '')),
      label: file.replace(/\.mdx?$/, ''),
    }));
}

export default {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'HEARTH Docs',
      items: generateSidebarItems(path.resolve(__dirname, 'docs/HEARTH'), 'HEARTH'),
    },
  ],
};
