const path = require('path');

const configuration = {
  module: {
    rules: [
      {
        test: /\.jsx?$/u,
        include: [
          path.join(__dirname, 'src')
        ],
        use: [
          { loader: 'babel-loader' }
        ]
      }
    ]
  },

  resolve: {
    alias: {
      'thenativeweb-ux': path.join(__dirname, 'src', 'index.js')
    }
  }
};

module.exports = configuration;
