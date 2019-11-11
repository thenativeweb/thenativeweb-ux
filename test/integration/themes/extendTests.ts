import assert from 'assertthat';
import { browser } from '../../shared/browser';
import { Page } from 'puppeteer';
import { getIntegrationTestUrl, integrationTestTimeOut } from '../../shared/environment';

suite('extend', function (): void {
  this.timeout(integrationTestTimeOut);

  let page: Page;

  teardown(async (): Promise<void> => {
    await browser.teardownPage(page);
  });

  test('creates a customized theme that can hold additional properties.', async (): Promise<void> => {
    const url = getIntegrationTestUrl('/themes');

    page = await browser.setupPage();

    await page.goto(url);

    const customComponent = await page.$('#custom-component');
    const boundingBox = await customComponent!.boundingBox();

    assert.that(boundingBox!.width).is.equalTo(42);
  });
});
