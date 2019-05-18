/* eslint-disable strict */

'use strict';

/* eslint-enable strict */

const assert = require('assertthat');

const browser = require('../../shared/browser');

suite('styles/classNames', () => {
  let page;

  setup(async () => {
    page = await browser.setupPage();
  });

  teardown(async () => {
    await browser.teardownPage(page);
  });

  test('creates classes.', async () => {
    const hasCustomClass = await page.$eval('#classNames', el => el.classList.contains('custom'));

    assert.that(hasCustomClass).is.equalTo(true);
  });
});
