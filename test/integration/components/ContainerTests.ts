import assert from 'assertthat';
import { browser } from '../../shared/browser';
import { Page } from 'puppeteer';
import { getIntegrationTestUrl, integrationTestTimeOut } from '../../shared/environment';

suite('Container', function (): void {
  this.timeout(integrationTestTimeOut);

  let page: Page;

  teardown(async (): Promise<void> => {
    await browser.teardownPage(page);
  });

  suite('isScrollable', (): void => {
    test('causes the container to be scrollable if set to true and the viewport is smaller than the container.', async (): Promise<void> => {
      const url = getIntegrationTestUrl('/integration/components/layout/container/isScrollableTrue');

      page = await browser.setupPage({
        viewport: { width: 600, height: 250 }
      });

      await page.goto(url);
      await page.waitForSelector('#container');

      const scrollHeight = await page.$eval('#container', (element: Element): number => element.scrollHeight);

      assert.that(scrollHeight).is.equalTo(440);

      const overflow = await page.$eval('#container', (element: Element): string => window.getComputedStyle(element).overflow);

      assert.that(overflow).is.equalTo('auto');
    });

    test('causes the child to be partially hidden if larger than the container.', async (): Promise<void> => {
      page = await browser.setupPage();
      const url = getIntegrationTestUrl('/integration/components/layout/container/isScrollableFalse');

      await page.goto(url);
      await page.waitForSelector('#container');

      await page.waitFor('#visible-child', { visible: true, hidden: false });
      await page.waitFor('#invisible-child', { visible: true, hidden: true });
    });
  });
});
