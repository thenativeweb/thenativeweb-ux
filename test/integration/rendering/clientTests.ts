import assert from 'assertthat';
import { browser } from '../../shared/browser';
import { Page } from 'puppeteer';
import { getIntegrationTestUrl, integrationTestTimeOut } from '../../shared/environment';

suite('Client', function (): void {
  this.timeout(integrationTestTimeOut);

  let page: Page;

  setup(async (): Promise<void> => {
    page = await browser.setupPage();

    const url = getIntegrationTestUrl('/integration/rendering/clientSide');

    await page.goto(url);
  });

  teardown(async (): Promise<void> => {
    await browser.teardownPage(page);
  });

  test('takes over once server side rendering is complete.', async (): Promise<void> => {
    const button = await page.$('#button');

    await new Promise(async (resolve): Promise<void> => {
      page.once('console', (msg): void => {
        assert.that(msg.text()).is.equalTo('button::clicked');

        resolve();
      });

      await button!.click();
    });
  });

  test('removes server side rendered styles.', async (): Promise<void> => {
    await page.waitForSelector('#button');
    const styleTag = await page.$('#server-side-styles');

    assert.that(styleTag).is.null();
  });
});
