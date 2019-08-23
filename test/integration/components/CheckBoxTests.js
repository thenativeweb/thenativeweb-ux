/* eslint-disable strict */

'use strict';

/* eslint-enable strict */

const assert = require('assertthat');

const browser = require('../../shared/browser');

suite('components/CheckBox', function () {
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
    await page.waitForSelector('#form-checkbox');

    const initialValue = await page.$eval('#form-checkbox', el => el.checked);

    assert.that(initialValue).is.false();

    await page.click('#form-checkbox');

    const newValue = await page.$eval('#form-checkbox', el => el.checked);

    assert.that(newValue).is.true();
  });
});
