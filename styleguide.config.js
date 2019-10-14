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
      link: '#ff0099',
      linkHover: '#ff0099'
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
      name: 'Components',
      components: 'lib/components/*/index.tsx'
    },
    {
      name: 'Styling Custom Components',
      content: 'lib/styles/Readme.md'
    }
  ],

  styleguideComponents: {
    Wrapper: path.join(__dirname, 'lib', 'styleguide', 'ThemeWrapper.tsx')
  },

  webpackConfig
};
