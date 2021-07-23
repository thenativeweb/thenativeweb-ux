import { processenv } from 'processenv';

const integrationTestContainer = 'integration-nginx';
const integrationTestPort = 3_000;
const debugModeEnabled = processenv('DEBUG', false);
const defaultIntegrationTestTimeout = 10_000;

const integrationTestTimeOut = debugModeEnabled ? defaultIntegrationTestTimeout * 2 : defaultIntegrationTestTimeout;

const getIntegrationTestUrl = function (absolutePagePath = '/'): string {
  let path = absolutePagePath;

  // If we provide a path without a trailing slash, we add it to satisfy nginx.
  if (absolutePagePath !== '/' && !absolutePagePath.endsWith('/')) {
    path = `${absolutePagePath}/`;
  }

  return `http://localhost:${integrationTestPort}${path}`;
};

const viewport = { width: 1_280, height: 800 };

const headless = !debugModeEnabled;

// Slow down puppeteer operations by the specified amount of milliseconds.
const slowMotion = debugModeEnabled ? 250 : 0;

export {
  integrationTestTimeOut,
  integrationTestContainer,
  integrationTestPort,
  getIntegrationTestUrl,
  viewport,
  headless,
  slowMotion
};
