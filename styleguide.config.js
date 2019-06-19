const path = require('path');

const webpackConfig = require('./webpack.config.js');

module.exports = {
  title: 'the native web UX',
  skipComponentsWithoutExample: true,
  exampleMode: 'expand',
  theme: {
    color: {
      link: '#f09',
      linkHover: '#f09'
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
      components: 'src/components/*/index.js'
    },
    {
      name: 'Styling Custom Components',
      content: 'src/styles/Readme.md'
    }
  ],

  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src', 'styleguide', 'ThemeWrapper.jsx')
  },

  webpackConfig
};
