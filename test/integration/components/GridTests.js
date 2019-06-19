/* eslint-disable strict */

'use strict';

/* eslint-enable strict */

const assert = require('assertthat');

const browser = require('../../shared/browser'),
      env = require('../../shared/env');

suite('components/Grid', () => {
  let page;
  const defaultGridGrap = 16;

  teardown(async () => {
    await browser.teardownPage(page);
  });

  suite('components/Grid.Item', () => {
    test('spans accross multiple columns when columSpan is given.', async () => {
      page = await browser.setupPage();
      await page.goto(env.APP_URL);

      await page.waitForSelector('#grid');

      const grid = await page.$('#grid');
      const { width: gridWidth } = await grid.boundingBox();

      const firstItem = await page.$('#grid-item-span6-first');
      const firstItemBoundingBox = await firstItem.boundingBox();
      const secondItem = await page.$('#grid-item-span6-second');
      const secondItemBoundingBox = await secondItem.boundingBox();

      assert.that(Math.round(firstItemBoundingBox.width * 2)).is.equalTo(gridWidth - defaultGridGrap);
      assert.that(Math.round(secondItemBoundingBox.width * 2)).is.equalTo(gridWidth - defaultGridGrap);
    });

    test('spans accross multiple columns when a configuration for multiple screen sizes is given.', async () => {
      page = await browser.setupPage({ viewport: { width: 590, height: 600 }});
      await page.goto(env.APP_URL);

      await page.waitForSelector('#grid');

      const gridOnXsDevice = await page.$('#grid');
      const { width: gridWidthOnXsDevice } = await gridOnXsDevice.boundingBox();

      const thirdItemOnXsDevice = await page.$('#grid-item-span6-responsive-third');
      const { width: itemWidthOnXsDevice } = await thirdItemOnXsDevice.boundingBox();

      assert.that(itemWidthOnXsDevice).is.equalTo(gridWidthOnXsDevice);
      await browser.teardownPage(page);

      page = await browser.setupPage({ viewport: { width: 1270, height: 600 }});
      await page.goto(env.APP_URL);

      const gridOnMdDevice = await page.$('#grid');
      const { width: gridWidthOnMdDevice } = await gridOnMdDevice.boundingBox();

      const thirdItemOnMdDevice = await page.$('#grid-item-span6-responsive-third');
      const { width: itemWidthOnMdDevice } = await thirdItemOnMdDevice.boundingBox();

      assert.that(Math.round(itemWidthOnMdDevice * 2)).is.equalTo(gridWidthOnMdDevice - defaultGridGrap);
    });
  });
});
