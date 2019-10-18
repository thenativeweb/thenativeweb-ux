import assert from 'assertthat';
import browser from '../shared/browser';
import environment from '../shared/environment';
import { Page } from 'puppeteer';

suite('with-next-js/client-side-rendering', function (): void {
  // Next.js needs a little bit more time on the first render of a page.
  // As this can vary depending on the complexity we give it a little bit more time.
  this.timeout(15 * 1000);

  let page: Page;

  setup(async (): Promise<void> => {
    page = await browser.setupPage();
  });

  teardown(async (): Promise<void> => {
    await browser.teardownPage(page);
  });

  test('takes over once server side rendering is complete.', async (): Promise<void> => {
    await page.goto(`${environment.url}`);
    const button = await page.$('#button');

    await new Promise(async (resolve): Promise<void> => {
      page.once('console', (msg): void => {
        assert.that(msg.text()).is.equalTo('clicked::button');

        resolve();
      });

      await button!.click();
    });
  });

  test('removes server side rendered styles.', async (): Promise<void> => {
    await page.goto(`${environment.url}`);
    await page.waitForSelector('#index-page');
    const styleTag = await page.$('#server-side-styles');

    assert.that(styleTag).is.null();
  });
});
