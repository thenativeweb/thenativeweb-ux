const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const configuration = {
  mode: 'development',
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
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html')
    })
  ]
};

module.exports = configuration;
