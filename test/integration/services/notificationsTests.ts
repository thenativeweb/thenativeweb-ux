import { browser } from '../../shared/browser';
import { Page } from 'puppeteer';
import { getIntegrationTestUrl, integrationTestTimeOut } from '../../shared/environment';

suite('notifications', function (): void {
  this.timeout(integrationTestTimeOut);

  let page: Page;

  setup(async (): Promise<void> => {
    page = await browser.setupPage();
  });

  teardown(async (): Promise<void> => {
    await browser.teardownPage(page);
  });

  test('shows a notification.', async (): Promise<void> => {
    const url = getIntegrationTestUrl('/integration/services/notifications');

    await page.goto(url);
    await page.waitForSelector('#show-notification-error');

    await page.click('#show-notification-error');

    await page.waitForFunction(
      'document.querySelector("body").innerText.includes("This is a notification of type error!")'
    );

    await page.click('#show-notification-success');

    await page.waitForFunction(
      'document.querySelector("body").innerText.includes("This is a notification of type success!")'
    );
  });
});
