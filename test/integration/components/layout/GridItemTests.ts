import { assert } from 'assertthat';
import { browser } from '../../../shared/browser';
import { Page } from 'puppeteer';
import { getIntegrationTestUrl, integrationTestTimeOut } from '../../../shared/environment';

suite('GridItem', function (): void {
  this.timeout(integrationTestTimeOut);

  let page: Page;

  const defaultGridGrap = 16;

  teardown(async (): Promise<void> => {
    await browser.teardownPage(page);
  });

  suite('columnSpan', (): void => {
    test('spans the GridItem across multiple columns of the parent grid.', async (): Promise<void> => {
      const url = getIntegrationTestUrl('/integration/components/layout/gridItem');

      page = await browser.setupPage();
      await page.goto(url);
      await page.waitForSelector('#grid');

      const grid = await page.$('#grid');
      const gridBoundingBox = await grid!.boundingBox();

      const firstItem = await page.$('#grid-item-span6-first');
      const firstItemBoundingBox = await firstItem!.boundingBox();

      const secondItem = await page.$('#grid-item-span6-second');
      const secondItemBoundingBox = await secondItem!.boundingBox();

      assert.that(Math.round(firstItemBoundingBox!.width * 2)).is.equalTo(Math.round(gridBoundingBox!.width - defaultGridGrap));
      assert.that(Math.round(secondItemBoundingBox!.width * 2)).is.equalTo(Math.round(gridBoundingBox!.width - defaultGridGrap));
    });

    test('spans GridItems across multiple columns using repsonsive properties.', async (): Promise<void> => {
      const url = getIntegrationTestUrl('/integration/components/layout/gridItem');

      page = await browser.setupPage({ viewport: browser.viewports.xs });

      await page.goto(url);
      await page.waitForSelector('#grid');

      const gridOnXsDevice = await page.$('#grid');
      const gridOnXsDeviceBoundingBox = await gridOnXsDevice!.boundingBox();

      const thirdItemOnXsDevice = await page.$('#grid-item-span6-responsive-third');
      const thirdItemOnXsDeviceBoundingBox = await thirdItemOnXsDevice!.boundingBox();

      assert.that(thirdItemOnXsDeviceBoundingBox!.width).is.equalTo(gridOnXsDeviceBoundingBox!.width);
      await browser.teardownPage(page);

      page = await browser.setupPage({ viewport: browser.viewports.md });

      await page.goto(url);
      await page.waitForSelector('#grid');

      const gridOnMdDevice = await page.$('#grid');
      const gridOnMdDeviceBoundingBox = await gridOnMdDevice!.boundingBox();

      const thirdItemOnMdDevice = await page.$('#grid-item-span6-responsive-third');
      const thirdItemOnMdDeviceBoundingBox = await thirdItemOnMdDevice!.boundingBox();

      assert.that(Math.round(thirdItemOnMdDeviceBoundingBox!.width * 2)).is.equalTo(gridOnMdDeviceBoundingBox!.width - defaultGridGrap);
    });
  });
});
