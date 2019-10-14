import assert from 'assertthat';
import browser from '../shared/browser';
import env from '../shared/environment';
import { Page } from 'puppeteer';

suite('with-next-js/server-side-rendering', function (): void {
  // Next.js needs a little bit more time on the first render of a page.
  // As this can vary depending on the complexity we give it a little bit more time.
  this.timeout(15 * 1000);

  let page: Page;

  setup(async (): Promise<void> => {
    page = await browser.setupPage(false);
    await page.setJavaScriptEnabled(false);
    await page.goto(env.url);
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
