const path = require('path');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  // eslint-disable-next-line no-process-env
  enabled: process.env.ANALYSE_BUNDLE === 'true'
});

const libraryEntryPointPath = path.resolve(__dirname, '..', 'lib');

const nextConfiguration = {
  // We dont't want Next.js to create pages like components.html but components/index.html.
  exportTrailingSlash: true,

  webpack (configuration) {
    configuration.module.rules[0].include.push(libraryEntryPointPath);

    return configuration;
  }
};

module.exports = withBundleAnalyzer(nextConfiguration);
