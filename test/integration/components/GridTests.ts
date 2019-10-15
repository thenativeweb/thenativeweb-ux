import assert from 'assertthat';
import browser from '../../shared/browser';
import environment from '../../shared/environment';
import puppeteer from 'puppeteer';

suite('Grid', function (): void {
  this.timeout(5 * 1000);

  let page: puppeteer.Page;

  const defaultGridGrap = 16;

  teardown(async (): Promise<void> => {
    await browser.teardownPage(page);
  });

  suite('Grid.Item', (): void => {
    test('spans across multiple columns when columSpan is given.', async (): Promise<void> => {
      page = await browser.setupPage();
      await page.goto(environment.url);

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

    test('spans across multiple columns when a configuration for multiple screen sizes is given.', async (): Promise<void> => {
      page = await browser.setupPage({ viewport: { width: 590, height: 600 }});
      await page.goto(environment.url);

      await page.waitForSelector('#grid');

      const gridOnXsDevice = await page.$('#grid');
      const { width: gridWidthOnXsDevice } = await gridOnXsDevice.boundingBox();

      const thirdItemOnXsDevice = await page.$('#grid-item-span6-responsive-third');
      const { width: itemWidthOnXsDevice } = await thirdItemOnXsDevice.boundingBox();

      assert.that(itemWidthOnXsDevice).is.equalTo(gridWidthOnXsDevice);
      await browser.teardownPage(page);

      page = await browser.setupPage({ viewport: { width: 1270, height: 600 }});
      await page.goto(environment.url);

      const gridOnMdDevice = await page.$('#grid');
      const { width: gridWidthOnMdDevice } = await gridOnMdDevice.boundingBox();

      const thirdItemOnMdDevice = await page.$('#grid-item-span6-responsive-third');
      const { width: itemWidthOnMdDevice } = await thirdItemOnMdDevice.boundingBox();

      assert.that(Math.round(itemWidthOnMdDevice * 2)).is.equalTo(gridWidthOnMdDevice - defaultGridGrap);
    });
  });
});
