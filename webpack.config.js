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
      },
      {
        test: /\.css$/u,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      }
    ]
  }
};

module.exports = configuration;
