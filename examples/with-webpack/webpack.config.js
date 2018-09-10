const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const configuration = {
  mode: 'development',
  resolve: {
    alias: {
      'thenativeweb-ux': path.resolve(__dirname, '..', '..', 'dist')
    }
  },
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
