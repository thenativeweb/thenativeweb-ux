/* eslint-disable strict */

'use strict';

/* eslint-enable strict */

const assert = require('assertthat');

const browser = require('../../shared/browser'),
      env = require('../../shared/env');

suite('with-next-js/themes', () => {
  let page;

  teardown(async () => {
    await browser.teardownPage(page);
  });

  suite('extend', function () {
    this.timeout(5 * 1000);

    test('creates a customized theme that can hold additional properties.', async () => {
      page = await browser.setupPage();

      await page.goto(`${env.APP_URL}/themes`);

      const customComponent = await page.$('#custom-component');
      const boundingBox = await customComponent.boundingBox();

      assert.that(boundingBox.width).is.equalTo(42);
    });
  });
});
