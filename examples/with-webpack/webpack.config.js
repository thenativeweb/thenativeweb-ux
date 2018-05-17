const path = require('path');

const configuration = {
  entry: [
    './src/index.html',
    './src/index.js'
  ],

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.join(__dirname, 'src')
        ],
        use: [
          { loader: 'babel-loader' }
        ]
      },
      {
        test: /\.html$/,
        use: [
          { loader: 'file-loader', options: { name: '[name].[ext]' }}
        ]
      }
    ]
  }
};

module.exports = configuration;
