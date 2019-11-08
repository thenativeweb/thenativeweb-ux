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
    const url = environment.getIntegrationTestUrl('/components');

    await page.goto(url);
    await page.waitForSelector('#sidebar');

    const sidebar = await page.$('#sidebar');
    const boundingBox = await sidebar!.boundingBox();

    assert.that(boundingBox!.width).is.equalTo(80);
  });

  suite('SidebarItem', (): void => {
    test('expands on hover and subitems are clickable.', async (): Promise<void> => {
      const url = environment.getIntegrationTestUrl('/components');

      await page.goto(url);
      await page.waitForSelector('#sidebar-item-account');

      const parentItem = await page.$('#sidebar-item-account');

      await parentItem!.hover();

      await page.waitForSelector('#sidebar-item-logout', {
        visible: true
      });

      const childItem = await page.$('#sidebar-item-logout');

      await new Promise(async (resolve): Promise<void> => {
        page.once('console', (message): void => {
          assert.that(message.text()).is.equalTo('clicked::clicked::logout');

          resolve();
        });

        await childItem!.click();
      });
    });
  });
});
