import processenv from 'processenv';

const integrationTestPort = 3000;
const debugModeEnabled = processenv('DEBUG', false);
const defaultIntegrationTestTimeout = 5 * 1000;

const environment = {
  integrationTestTimeOut: debugModeEnabled ? defaultIntegrationTestTimeout * 2 : defaultIntegrationTestTimeout,
  integrationTestPort,

  getIntegrationTestUrl (absolutePagePath = '/'): string {
    let path = absolutePagePath;

    // If we provide a path without a trailing slash, we add it to satisfy nginx
    if (absolutePagePath !== '/' && !absolutePagePath.endsWith('/')) {
      path = `${absolutePagePath}/`;
    }

    return `http://localhost:${integrationTestPort}${path}`;
  },

  viewport: { width: 1280, height: 800 },

  // Turn off headless mode to see what the Puppeteer is acutally doing.
  headless: !debugModeEnabled,

  // Slow down Puppeteer operations by the specified amount of milliseconds
  slowMo: debugModeEnabled ? 250 : 0
};

export { environment };
