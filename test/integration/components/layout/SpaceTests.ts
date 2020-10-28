import { assert } from 'assertthat';
import { browser } from '../../../shared/browser';
import { Page } from 'puppeteer';
import { getIntegrationTestUrl, integrationTestTimeOut } from '../../../shared/environment';

const testPageUrl = '/integration/components/layout/space';

suite('Space', function (): void {
  this.timeout(integrationTestTimeOut);

  let page: Page;

  teardown(async (): Promise<void> => {
    await browser.teardownPage(page);
  });

  suite('paddings', (): void => {
    test('set correct padding values when specified as string or number.', async (): Promise<void> => {
      const url = getIntegrationTestUrl(testPageUrl);

      page = await browser.setupPage();

      await page.goto(url);
      await page.waitForSelector('#with-padding-as-string');

      const paddingAsString = await page.$eval('#with-padding-as-string', (element: Element): string => window.getComputedStyle(element).padding);
      const paddingAsNumber = await page.$eval('#with-padding-as-number', (element: Element): string => window.getComputedStyle(element).padding);
      const paddingTopAsString = await page.$eval('#with-paddingTop-as-string', (element: Element): string => window.getComputedStyle(element).padding);
      const paddingTopAsNumber = await page.$eval('#with-paddingTop-as-number', (element: Element): string => window.getComputedStyle(element).padding);
      const paddingBottomAsString = await page.$eval('#with-paddingBottom-as-string', (element: Element): string => window.getComputedStyle(element).padding);
      const paddingBottomAsNumber = await page.$eval('#with-paddingBottom-as-number', (element: Element): string => window.getComputedStyle(element).padding);
      const paddingLeftAsString = await page.$eval('#with-paddingLeft-as-string', (element: Element): string => window.getComputedStyle(element).padding);
      const paddingLeftAsNumber = await page.$eval('#with-paddingLeft-as-number', (element: Element): string => window.getComputedStyle(element).padding);
      const paddingRightAsString = await page.$eval('#with-paddingRight-as-string', (element: Element): string => window.getComputedStyle(element).padding);
      const paddingRightAsNumber = await page.$eval('#with-paddingRight-as-number', (element: Element): string => window.getComputedStyle(element).padding);
      /* eslint-disable @typescript-eslint/naming-convention */
      const paddingXAsString = await page.$eval('#with-paddingX-as-string', (element: Element): string => window.getComputedStyle(element).padding);
      const paddingXAsNumber = await page.$eval('#with-paddingX-as-number', (element: Element): string => window.getComputedStyle(element).padding);
      const paddingYAsString = await page.$eval('#with-paddingY-as-string', (element: Element): string => window.getComputedStyle(element).padding);
      const paddingYAsNumber = await page.$eval('#with-paddingY-as-number', (element: Element): string => window.getComputedStyle(element).padding);
      /* eslint-enable @typescript-eslint/naming-convention */

      assert.that(paddingAsString).is.equalTo('16px');
      assert.that(paddingAsNumber).is.equalTo('16px');

      assert.that(paddingTopAsString).is.equalTo('16px 0px 0px');
      assert.that(paddingTopAsNumber).is.equalTo('16px 0px 0px');

      assert.that(paddingTopAsString).is.equalTo('16px 0px 0px');
      assert.that(paddingTopAsNumber).is.equalTo('16px 0px 0px');

      assert.that(paddingBottomAsString).is.equalTo('0px 0px 16px');
      assert.that(paddingBottomAsNumber).is.equalTo('0px 0px 16px');

      assert.that(paddingLeftAsString).is.equalTo('0px 0px 0px 16px');
      assert.that(paddingLeftAsNumber).is.equalTo('0px 0px 0px 16px');

      assert.that(paddingRightAsString).is.equalTo('0px 16px 0px 0px');
      assert.that(paddingRightAsNumber).is.equalTo('0px 16px 0px 0px');

      assert.that(paddingXAsString).is.equalTo('0px 16px');
      assert.that(paddingXAsNumber).is.equalTo('0px 16px');

      assert.that(paddingYAsString).is.equalTo('16px 0px');
      assert.that(paddingYAsNumber).is.equalTo('16px 0px');
    });

    test('set correct padding values when using responsive properties.', async (): Promise<void> => {
      const url = getIntegrationTestUrl(testPageUrl);

      // Test on xs viewport
      page = await browser.setupPage({ viewport: browser.viewports.xs });

      await page.goto(url);
      await page.waitForSelector('#with-responsive-padding');

      const responsivePaddingOnXsDevice = await page.$eval('#with-responsive-padding', (element: Element): string => window.getComputedStyle(element).padding);

      assert.that(responsivePaddingOnXsDevice).is.equalTo('8px');

      await browser.teardownPage(page);

      // Test on xs viewport
      page = await browser.setupPage({ viewport: browser.viewports.sm });

      await page.goto(url);
      await page.waitForSelector('#with-responsive-padding');

      const responsivePaddingOnSmDevice = await page.$eval('#with-responsive-padding', (element: Element): string => window.getComputedStyle(element).padding);

      assert.that(responsivePaddingOnSmDevice).is.equalTo('16px');

      await browser.teardownPage(page);

      // Test on md viewport
      page = await browser.setupPage({ viewport: browser.viewports.md });

      await page.goto(url);
      await page.waitForSelector('#with-responsive-padding');

      const responsivePaddingOnMdDevice = await page.$eval('#with-responsive-padding', (element: Element): string => window.getComputedStyle(element).padding);

      assert.that(responsivePaddingOnMdDevice).is.equalTo('24px');

      await browser.teardownPage(page);

      // Test on lg viewport
      page = await browser.setupPage({ viewport: browser.viewports.lg });

      await page.goto(url);
      await page.waitForSelector('#with-responsive-padding');

      const responsivePaddingOnLgDevice = await page.$eval('#with-responsive-padding', (element: Element): string => window.getComputedStyle(element).padding);

      assert.that(responsivePaddingOnLgDevice).is.equalTo('32px');

      await browser.teardownPage(page);

      // Test on xl viewport
      page = await browser.setupPage({ viewport: browser.viewports.xl });

      await page.goto(url);
      await page.waitForSelector('#with-responsive-padding');

      const responsivePaddingOnXlDevice = await page.$eval('#with-responsive-padding', (element: Element): string => window.getComputedStyle(element).padding);

      assert.that(responsivePaddingOnXlDevice).is.equalTo('40px');
    });
  });

  suite('between', (): void => {
    test('sets correct margins for all children expcept the last child.', async (): Promise<void> => {
      const url = getIntegrationTestUrl(testPageUrl);

      page = await browser.setupPage();

      await page.goto(url);
      await page.waitForSelector('#with-between');

      const firstChildMargin = await page.$eval('#with-between div:nth-child(1)', (element: Element): string => window.getComputedStyle(element).margin);
      const secondChildMargin = await page.$eval('#with-between div:nth-child(2)', (element: Element): string => window.getComputedStyle(element).margin);
      const lastChildMargin = await page.$eval('#with-between div:nth-child(3)', (element: Element): string => window.getComputedStyle(element).margin);

      assert.that(firstChildMargin).is.equalTo('0px 0px 16px');
      assert.that(secondChildMargin).is.equalTo('0px 0px 16px');
      assert.that(lastChildMargin).is.equalTo('0px');
    });
  });
});
