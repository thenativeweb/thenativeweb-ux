const path = require('path');

const libraryEntryPointPath = path.resolve(__dirname, '..', '..', 'lib');

module.exports = {
  webpack (configuration) {
    configuration.module.rules[0].include.push(libraryEntryPointPath);

    return configuration;
  }
};
