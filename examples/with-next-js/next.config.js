const path = require('path');

module.exports = {
  webpack (config) {
    const customizedConfig = {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          'thenativeweb-ux': path.resolve(__dirname, '..', '..', 'dist')
        }
      }
    };

    return customizedConfig;
  }
};
