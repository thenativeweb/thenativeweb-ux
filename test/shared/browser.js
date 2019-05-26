/* eslint-disable strict */

'use strict';

/* eslint-enable strict */

const puppeteer = require('puppeteer');

const env = require('./env');

let browserInstance;

const browser = {
  async setupPage ({ autoLoadApp = true, viewport = env.VIEWPORT } = {}) {
    if (!browserInstance) {
      browserInstance = await puppeteer.launch({ headless: env.HEADLESS });
    }

    const page = await browserInstance.newPage();

    await page.setViewport(viewport);

    if (autoLoadApp) {
      await page.goto(env.APP_URL);
    }

    return page;
  },

  async teardownPage (page) {
    await page.close();
  }
};

module.exports = browser;
