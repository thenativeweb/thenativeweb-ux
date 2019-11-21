import { assert } from 'assertthat';
import { browser } from '../../shared/browser';
import { Page } from 'puppeteer';
import { getIntegrationTestUrl, integrationTestTimeOut } from '../../shared/environment';

suite('Sidebar', function (): void {
  this.timeout(integrationTestTimeOut);

  let page: Page;

  setup(async (): Promise<void> => {
    page = await browser.setupPage();
  });

  teardown(async (): Promise<void> => {
    await browser.teardownPage(page);
  });

  test('is 80px wide.', async (): Promise<void> => {
    const url = getIntegrationTestUrl('/integration/components/layout/sidebar');

    await page.goto(url);
    await page.waitForSelector('#sidebar');

    const sidebar = await page.$('#sidebar');
    const boundingBox = await sidebar!.boundingBox();

    assert.that(boundingBox!.width).is.equalTo(80);
  });
});
