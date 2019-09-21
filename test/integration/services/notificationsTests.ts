/* eslint-disable strict */

'use strict';

/* eslint-enable strict */

const browser = require('../../shared/browser');

suite('services/notifications', () => {
  let page;

  setup(async () => {
    page = await browser.setupPage();
  });

  teardown(async () => {
    await browser.teardownPage(page);
  });

  test('shows a notification.', async () => {
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
