import assert from 'assertthat';
import { browser } from '../../shared/browser';
import { environment } from '../../shared/environment';
import { Page } from 'puppeteer';

suite('themes', function (): void {
  this.timeout(environment.integrationTestTimeOut);

  let page: Page;

  teardown(async (): Promise<void> => {
    await browser.teardownPage(page);
  });

  suite('extend', (): void => {
    test('creates a customized theme that can hold additional properties.', async (): Promise<void> => {
      page = await browser.setupPage();

      await page.goto(`${environment.baseUrl}/themes/`);

      const customComponent = await page.$('#custom-component');
      const boundingBox = await customComponent!.boundingBox();

      assert.that(boundingBox!.width).is.equalTo(42);
    });
  });
});
