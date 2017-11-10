/* eslint-disable strict */

'use strict';

/* eslint-enable strict */

const assert = require('assertthat');

const browser = require('../helpers/browser');

suite('components/Sidebar', () => {
  let page;

  setup(async () => {
    page = await browser.setupPage();
  });

  teardown(async () => {
    await browser.teardownPage(page);
  });

  test('is 80px wide.', async () => {
    await page.waitForSelector('#sidebar');

    const sidebar = await page.$('#sidebar');
    const boundingBox = await sidebar.boundingBox();

    assert.that(boundingBox.width).is.equalTo(80);
  });

  suite('components/Sidebar.Item', () => {
    test('expands on hover and subitems are clickable.', async () => {
      await page.waitForSelector('#sidebar-item-account');

      const parentItem = await page.$('#sidebar-item-account');

      await parentItem.hover();

      await page.waitForSelector('#sidebar-item-logout', {
        visible: true
      });

      const childItem = await page.$('#sidebar-item-logout');

      await new Promise(resolve => {
        page.once('console', msg => {
          assert.that(msg.text).is.equalTo('clicked::clicked::logout');

          resolve();
        });

        childItem.click();
      });
    });
  });
});
