/* eslint-disable strict */

'use strict';

/* eslint-enable strict */

const assert = require('assertthat');

const browser = require('../helpers/browser');

suite('components/Button', () => {
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

    assert.that(text).is.equalTo('Click me');

    await page.click('#button');

    text = await page.$eval('#button', el => el.innerText);

    assert.that(text).is.equalTo('Thanks!');
  });
});
