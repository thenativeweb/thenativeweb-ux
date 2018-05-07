const path = require('path');

const merge = require('lodash/merge'),
      webpack = require('webpack');

module.exports = function (env) {
  const configurationBase = {
    devtool: 'eval',
    target: 'web',

    module: {
      rules: [
        {
          test: /\.jsx?$/,
          include: [
            path.join(__dirname, 'src'),
            path.join(__dirname, 'test')
          ],
          use: {
            loader: 'babel-loader'
          }
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

  if (env === 'test-app') {
    const configurationForTestApp = merge({}, configurationBase, {
      devServer: {
        contentBase: path.join(__dirname, 'test'),
        compress: true,
        port: 8080
      },
      entry: [
        './index.jsx',
        './index.html'
      ],
      output: {
        path: path.join(__dirname, 'build'),
        filename: 'index.js'
      },
      context: path.join(__dirname, 'test')
    });

    return configurationForTestApp;
  }

  if (env === undefined || env === 'build') {
    const configurationForBuild = merge({}, configurationBase, {
      devtool: false,
      entry: [
        './index.js'
      ],
      output: {
        path: path.join(__dirname, 'build'),
        filename: 'index.js'
      },
      context: path.join(__dirname, 'src')
    });

    configurationForBuild.plugins = [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
      }),
      new webpack.optimize.UglifyJsPlugin()
    ];

    return configurationForBuild;
  }
};
