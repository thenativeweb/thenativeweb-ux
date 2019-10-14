const path = require('path');

module.exports = {
  devtool: 'source-map',

  resolve: {
    extensions: [ '.js', '.jsx', '.ts', '.tsx' ],

    alias: {
      'thenativeweb-ux': path.join(__dirname, 'lib', 'index.ts')
    }
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/u,
        exclude: /node_modules/u,
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      }
    ]
  }
};
