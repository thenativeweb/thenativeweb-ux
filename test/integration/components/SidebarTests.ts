import assert from 'assertthat';
import { browser } from '../../shared/browser';
import { environment } from '../../shared/environment';
import { Page } from 'puppeteer';

suite('Sidebar', function (): void {
  this.timeout(environment.integrationTestTimeOut);

  let page: Page;

  setup(async (): Promise<void> => {
    page = await browser.setupPage();
  });

  teardown(async (): Promise<void> => {
    await browser.teardownPage(page);
  });

  test('is 80px wide.', async (): Promise<void> => {
    const url = environment.getIntegrationTestUrl('/integration/components/layout/sidebar');

    await page.goto(url);
    await page.waitForSelector('#sidebar');

    const sidebar = await page.$('#sidebar');
    const boundingBox = await sidebar!.boundingBox();

    assert.that(boundingBox!.width).is.equalTo(80);
  });
});
