const configuration = {
  entry: [
    './src/index.html',
    './src/index.js'
  ],

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          { loader: 'babel-loader' }
        ]
      },
      {
        test: /\.html$/,
        use: [
          { loader: 'file-loader', options: { name: '[name].[ext]' }}
        ]
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      }
    ]
  }
};

module.exports = configuration;
