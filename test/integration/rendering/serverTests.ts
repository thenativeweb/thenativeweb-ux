import assert from 'assertthat';
import { browser } from '../../shared/browser';
import { Page } from 'puppeteer';
import { getIntegrationTestUrl, integrationTestTimeOut } from '../../shared/environment';

suite('Server', function (): void {
  this.timeout(integrationTestTimeOut);

  let page: Page;

  setup(async (): Promise<void> => {
    const url = getIntegrationTestUrl('/integration/rendering/serverSide');

    page = await browser.setupPage();

    await page.setJavaScriptEnabled(false);
    await page.goto(url);
  });

  teardown(async (): Promise<void> => {
    await page.setJavaScriptEnabled(true);
    await browser.teardownPage(page);
  });

  test('renders app although JavaScript is disabled.', async (): Promise<void> => {
    await page.waitForSelector('#headline');

    const headline = await page.$eval('#headline', (el): string | null => el.textContent);

    assert.that(headline).is.equalTo('Server side rendered headline');
  });

  test('renders styles on the server.', async (): Promise<void> => {
    await page.waitForSelector('#server-side-styles');

    const sidebar = await page.$('#sidebar');
    const boundingBox = await sidebar!.boundingBox();

    assert.that(boundingBox!.width).is.equalTo(80);
  });
});
