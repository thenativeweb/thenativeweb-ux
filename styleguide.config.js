const path = require('path');

const webpackConfig = require('./webpack.config')('test-app');

module.exports = {
  title: 'the native web UX',
  skipComponentsWithoutExample: true,
  showCode: true,
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
      name: 'Components',
      components: 'src/components/*/index.js'
    }
  ],

  webpackConfig,

  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src', 'styleguide', 'ThemeWrapper.jsx')
  }
};
