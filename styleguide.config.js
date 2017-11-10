const path = require('path');

const webpackConfig = require('./webpack.config')('test-app');

module.exports = {
  title: 'the native web UX',
  skipComponentsWithoutExample: true,
  showCode: true,
  ignore: [ '**/_*.jsx' ],
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
      content: 'docs/introduction.md'
    },
    {
      name: 'Components',
      components: 'src/components/**/*.jsx'
    }
  ],
  webpackConfig,

  require: [
    path.join(__dirname, 'src', 'setup', 'auto')
  ]
};
