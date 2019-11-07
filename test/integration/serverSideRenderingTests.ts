import assert from 'assertthat';
import browser from '../shared/browser';
import environment from '../shared/environment';
import { Page } from 'puppeteer';

suite('with-next-js/server-side-rendering', function (): void {
  this.timeout(5 * 1000);

  let page: Page;

  setup(async (): Promise<void> => {
    page = await browser.setupPage();
    await page.setJavaScriptEnabled(false);
    await page.goto(environment.url);
  });

  teardown(async (): Promise<void> => {
    await page.setJavaScriptEnabled(true);
    await browser.teardownPage(page);
  });

  test('renders app although JavaScript is disabled.', async (): Promise<void> => {
    await page.waitForSelector('#index-page');
    await page.waitForSelector('#server-side-styles');

    const headline = await page.$eval('#headline', (el): string | null => el.textContent);

    assert.that(headline).is.equalTo('Universally rendered Next.js app');
  });

  test('renders styles on the server side.', async (): Promise<void> => {
    await page.waitForSelector('#index-page');
    const styleTag = await page.$('#server-side-styles');

    assert.that(styleTag).is.not.null();
  });
});
