import { browser } from '../../../shared/browser';
import { Page } from 'puppeteer';
import { getIntegrationTestUrl, integrationTestTimeOut } from '../../../shared/environment';

suite('SidebarItem', function (): void {
  this.timeout(integrationTestTimeOut);

  let page: Page;

  setup(async (): Promise<void> => {
    page = await browser.setupPage();
  });

  teardown(async (): Promise<void> => {
    await browser.teardownPage(page);
  });

  test('expands on hover and subitems are clickable.', async (): Promise<void> => {
    const url = getIntegrationTestUrl('/integration/components/layout/sidebarItem');

    await page.goto(url);
    await page.waitForSelector('#sidebar-item-account');

    const parentItem = await page.$('#sidebar-item-account');

    await parentItem!.hover();

    await page.waitForSelector('#sidebar-item-logout', {
      visible: true
    });

    const childItem = await page.$('#sidebar-item-logout');

    await new Promise(async (resolve, reject): Promise<void> => {
      page.once('console', (message): void => {
        try {
          if (message.text() !== 'clicked::clicked::logout') {
            return;
          }

          resolve();
        } catch (ex) {
          reject(ex);
        }
      });

      await childItem!.click();
    });
  });
});
