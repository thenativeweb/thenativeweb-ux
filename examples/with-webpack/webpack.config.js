const path = require('path');

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer'),
      HtmlWebpackPlugin = require('html-webpack-plugin');

/* eslint-disable no-process-env */
const env = process.env.NODE_ENV || 'development';
/* eslint-enable no-process-env */

const plugins = [
  new HtmlWebpackPlugin({
    template: path.join(__dirname, 'src', 'index.html')
  })
];

if (env === 'production') {
  plugins.push(new BundleAnalyzerPlugin());
}

const configuration = {
  mode: env,
  resolve: {
    alias: {
      'thenativeweb-ux': path.resolve(__dirname, '..', '..', 'dist')
    }
  },
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

  plugins,

  devServer: {
    port: 3000
  }
};

module.exports = configuration;
