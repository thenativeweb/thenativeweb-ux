import assert from 'assertthat';
import browser from '../../shared/browser';
import environment from '../../shared/environment';
import { Page } from 'puppeteer';

suite('Container', function (): void {
  this.timeout(5 * 1000);

  let page: Page;

  teardown(async (): Promise<void> => {
    await browser.teardownPage(page);
  });

  suite('isScrollable', (): void => {
    test('causes the container to be scrollable if set to true and the viewport is smaller than the container.', async (): Promise<void> => {
      page = await browser.setupPage({
        viewport: { width: 600, height: 250 }
      });

      await page.goto(`${environment.url}/integration/layout/container/isScrollableTrue/`);
      await page.waitForSelector('#container');

      const scrollHeight = await page.$eval('#container', (element: Element): number => element.scrollHeight);

      assert.that(scrollHeight).is.equalTo(440);

      const overflow = await page.$eval('#container', (element: Element): string => window.getComputedStyle(element).overflow);

      assert.that(overflow).is.equalTo('auto');
    });

    test('causes the child to be partially hidden it larger than the container.', async (): Promise<void> => {
      page = await browser.setupPage();

      await page.goto(`${environment.url}/integration/layout/container/isScrollableFalse/`);
      await page.waitForSelector('#container');

      await page.waitFor('#visible-child', { visible: true, hidden: false });
      await page.waitFor('#invisible-child', { visible: true, hidden: true });
    });
  });
});
