import assert from 'assertthat';
import browser from '../../shared/browser';
import env from '../../shared/environment';
import { Page } from 'puppeteer';

suite('with-next-js/themes', function (): void {
  // Next.js needs a little bit more time on the first render of a page.
  // As this can vary depending on the complexity we give it a little bit more time.
  this.timeout(5 * 1000);

  let page: Page;

  teardown(async (): Promise<void> => {
    await browser.teardownPage(page);
  });

  suite('extend', (): void => {
    test('creates a customized theme that can hold additional properties.', async (): Promise<void> => {
      page = await browser.setupPage();

      await page.goto(`${env.url}/themes`);

      const customComponent = await page.$('#custom-component');
      const boundingBox = await customComponent!.boundingBox();

      assert.that(boundingBox!.width).is.equalTo(42);
    });
  });
});
