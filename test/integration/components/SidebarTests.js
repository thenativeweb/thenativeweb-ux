'use strict';

const assert = require('assertthat');

const browser = require('../helpers/browser');

suite('components/Sidebar', function () {
  this.timeout(10 * 1000);

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
    test('expands on hover and subitems are clickable.', done => {
      (async () => {
        await page.waitForSelector('#sidebar-item-account');

        const parentItem = await page.$('#sidebar-item-account');

        await parentItem.hover();

        await page.waitForSelector('#sidebar-item-logout', {
          visible: true
        });

        const childItem = await page.$('#sidebar-item-logout');

        page.once('console', msg => {
          assert.that(msg.text).is.equalTo('clicked::clicked::logout');

          done();
        });

        await childItem.click();
      })();
    });
  });
});
