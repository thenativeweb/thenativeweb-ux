import assert from 'assertthat';
import browser from '../../shared/browser';
import environment from '../../shared/environment';
import { Page } from 'puppeteer';

suite('components/layout/Container', (): void => {
  let page: Page;

  teardown(async (): Promise<void> => {
    await browser.teardownPage(page);
  });

  suite('isScrollable', (): void => {
    test('causes the container to be scrollable when viewport is smaller than the parent.', async (): Promise<void> => {
      page = await browser.setupPage({
        viewport: { width: 600, height: 250 }
      });

      await page.goto(`${environment.url}/integration/layout/container/scrollable/`);
      await page.waitForSelector('#container');

      const scrollHeight = await page.$eval('#container', (element: Element): number => element.scrollHeight);

      assert.that(scrollHeight).is.equalTo(442);
    });
  });
});
