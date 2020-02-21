import { assert } from 'assertthat';
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

    await new Promise(async (resolve, reject): Promise<void> => {
      page.once('console', (message): void => {
        try {
          if (message.text() !== 'button::clicked') {
            return;
          }

          resolve();
        } catch (ex) {
          reject(ex);
        }
      });

      await button!.click();
    });
  });

  test('removes server side rendered styles.', async (): Promise<void> => {
    await page.waitForSelector('#button');
    const serverSideStyles = await page.$('#server-side-styles');
    const staticGlobalStyles = await page.$('#static-global-styles');

    assert.that(serverSideStyles).is.null();
    assert.that(staticGlobalStyles).is.not.null();
  });
});
