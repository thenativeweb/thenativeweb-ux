import { browser } from '../../shared/browser';
import { Page } from 'puppeteer';
import { getIntegrationTestUrl, integrationTestTimeOut } from '../../shared/environment';

suite('dialogs', function (): void {
  this.timeout(integrationTestTimeOut);

  let page: Page;

  setup(async (): Promise<void> => {
    page = await browser.setupPage();
  });

  teardown(async (): Promise<void> => {
    await browser.teardownPage(page);
  });

  suite('confirm', (): void => {
    test('shows a confirm dialog and resolves once the confirm action has been clicked.', async (): Promise<void> => {
      const url = getIntegrationTestUrl('/integration/services/dialogs');

      await page.goto(url);
      await page.waitForSelector('#show-confirm');

      const button = await page.$('#show-confirm');

      await button!.click();

      await page.waitForSelector('#dialogs-confirm-action-confirm', {
        visible: true
      });

      const confirmAction = await page.$('#dialogs-confirm-action-confirm');

      await Promise.all([
        new Promise((resolve, reject): void => {
          page.once('console', (message): void => {
            try {
              if (message.text() !== 'confirm::action::confirm::clicked') {
                return;
              }

              resolve();
            } catch (ex: unknown) {
              reject(ex);
            }
          });
        }),
        confirmAction!.click()
      ]);
    });

    test('shows a confirm dialog and resolves once the cancel action has been clicked.', async (): Promise<void> => {
      const url = getIntegrationTestUrl('/integration/services/dialogs');

      await page.goto(url);
      await page.waitForSelector('#show-confirm');

      const button = await page.$('#show-confirm');

      await button!.click();

      await page.waitForSelector('#dialogs-confirm-action-cancel', {
        visible: true
      });

      const cancelAction = await page.$('#dialogs-confirm-action-confirm');

      await Promise.all([
        new Promise((resolve, reject): void => {
          page.once('console', (message): void => {
            try {
              if (message.text() !== 'confirm::action::confirm::clicked') {
                return;
              }

              resolve();
            } catch (ex: unknown) {
              reject(ex);
            }
          });
        }),

        cancelAction!.click()
      ]);
    });
  });
});
