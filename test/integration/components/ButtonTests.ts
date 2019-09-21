/* eslint-disable strict */

'use strict';

/* eslint-enable strict */

const assert = require('assertthat');

const browser = require('../../shared/browser');

suite('components/Button', function () {
  // Sometimes puppeteer takes a bit more time to start up.
  // As this can vary we give it a little bit more time.
  this.timeout(5 * 1000);

  let page;

  setup(async () => {
    page = await browser.setupPage();
  });

  teardown(async () => {
    await browser.teardownPage(page);
  });

  test('is clickable.', async () => {
    await page.waitForSelector('#button');

    let text = await page.$eval('#button', el => el.innerText);

    assert.that(text.trim()).is.equalTo('Click me');

    await page.click('#button');

    text = await page.$eval('#button', el => el.innerText);

    assert.that(text.trim()).is.equalTo('Thanks!');
  });
});
