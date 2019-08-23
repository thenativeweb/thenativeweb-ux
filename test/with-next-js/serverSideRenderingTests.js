/* eslint-disable strict */

'use strict';

/* eslint-enable strict */

const assert = require('assertthat');

const browser = require('../shared/browser'),
      env = require('../shared/env');

suite('with-next-js/server-side-rendering', function () {
  // Next.js needs a little bit more time on the first render of a page.
  // As this can vary depending on the complexity we give it a little bit more time.
  this.timeout(15 * 1000);

  let page;

  setup(async () => {
    page = await browser.setupPage({ autoLoadApp: false });
    await page.setJavaScriptEnabled(false);
    await page.goto(env.APP_URL);
  });

  teardown(async () => {
    await page.setJavaScriptEnabled(true);
    await browser.teardownPage(page);
  });

  test('renders app although JavaScript is disabled.', async () => {
    await page.waitForSelector('#index-page');
    await page.waitForSelector('#server-side-styles');

    const headline = await page.$eval('#headline', el => el.innerText);

    assert.that(headline).is.equalTo('Universally rendered Next.js app');
  });

  test('renders styles on the server side.', async () => {
    await page.waitForSelector('#index-page');
    const styleTag = await page.$('#server-side-styles');

    assert.that(styleTag).is.not.null();
  });
});
