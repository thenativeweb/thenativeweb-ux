const path = require('path');

const reactDocgenTypescript = require('react-docgen-typescript');

const webpackConfig = require('./webpack.config.js');

module.exports = {
  propsParser: reactDocgenTypescript.withDefaultConfig({
    savePropValueAsString: true
  }).parse,
  title: 'the native web UX',
  skipComponentsWithoutExample: true,
  exampleMode: 'expand',
  theme: {
    color: {
      link: '#dd0099',
      linkHover: '#dd0099'
    },
    fontFamily: {
      base: '"Source Sans Pro", Arial, Helvetica, sans-serif',
      monospace: '"Ubuntu Mono", monospace'
    }
  },

  sections: [
    {
      name: 'Introduction',
      content: 'README.md'
    },
    {
      name: 'Layout',
      components: 'lib/components/layout/**/index.tsx'
    },
    {
      name: 'Branding',
      components: 'lib/components/branding/**/index.tsx'
    },
    {
      name: 'Components',
      components: 'lib/components/*/index.tsx'
    },
    {
      name: 'Styling Custom Components',
      content: 'lib/styles/README.md'
    }
  ],

  styleguideComponents: {
    Wrapper: path.join(__dirname, 'lib', 'styleguide', 'ThemeWrapper.tsx')
  },

  webpackConfig
};
