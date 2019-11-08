import assert from 'assertthat';
import { browser } from '../shared/browser';
import { environment } from '../shared/environment';
import { Page } from 'puppeteer';

suite('client-side-rendering', function (): void {
  this.timeout(environment.integrationTestTimeOut);

  let page: Page;

  setup(async (): Promise<void> => {
    page = await browser.setupPage();
  });

  teardown(async (): Promise<void> => {
    await browser.teardownPage(page);
  });

  test('takes over once server side rendering is complete.', async (): Promise<void> => {
    const url = environment.getIntegrationTestUrl();

    await page.goto(url);
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
    const url = environment.getIntegrationTestUrl();

    await page.goto(url);
    await page.waitForSelector('#index-page');
    const styleTag = await page.$('#server-side-styles');

    assert.that(styleTag).is.null();
  });
});
