import browser from '../../shared/browser';
import puppeteer from 'puppeteer';

suite('NotificationService', (): void => {
  let page: puppeteer.Page;

  setup(async (): Promise<void> => {
    page = await browser.setupPage();
  });

  teardown(async (): Promise<void> => {
    await browser.teardownPage(page);
  });

  test('shows a notification.', async (): Promise<void> => {
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
