import assert from 'assertthat';
import { browser } from '../../shared/browser';
import { environment } from '../../shared/environment';
import { Page } from 'puppeteer';

suite('extend', function (): void {
  this.timeout(environment.integrationTestTimeOut);

  let page: Page;

  teardown(async (): Promise<void> => {
    await browser.teardownPage(page);
  });

  test('creates a customized theme that can hold additional properties.', async (): Promise<void> => {
    const url = environment.getIntegrationTestUrl('/themes');

    page = await browser.setupPage();

    await page.goto(url);

    const customComponent = await page.$('#custom-component');
    const boundingBox = await customComponent!.boundingBox();

    assert.that(boundingBox!.width).is.equalTo(42);
  });
});
