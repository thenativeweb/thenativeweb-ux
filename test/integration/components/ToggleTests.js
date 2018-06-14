/* eslint-disable strict */

'use strict';

/* eslint-enable strict */

const assert = require('assertthat');

const browser = require('../helpers/browser');

suite('components/Toggle', () => {
  let page;

  setup(async () => {
    page = await browser.setupPage();
  });

  teardown(async () => {
    await browser.teardownPage(page);
  });

  test('calls onChange when option is clicked.', async () => {
    await page.waitForSelector('#toggle');

    let text = await page.$eval('#toggle-value', el => el.innerText);

    assert.that(text.trim()).is.equalTo('Option 1');

    await page.click('#toggle :nth-child(2)');

    text = await page.$eval('#toggle-value', el => el.innerText);

    assert.that(text.trim()).is.equalTo('Option 2');
  });
});
