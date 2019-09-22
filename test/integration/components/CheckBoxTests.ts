import assert from 'assertthat';
import browser from '../../shared/browser';
import puppeteer from 'puppeteer';

suite('CheckBox', function (): void {
  this.timeout(5 * 1000);

  let page: puppeteer.Page;

  setup(async (): Promise<void> => {
    page = await browser.setupPage();
  });

  teardown(async (): Promise<void> => {
    await browser.teardownPage(page);
  });

  test('is clickable.', async (): Promise<void> => {
    await page.waitForSelector('#form-checkbox');

    const initialValue = await page.$eval(
      '#form-checkbox',
      (element: Element): boolean => element.checked
    );

    assert.that(initialValue).is.false();

    await page.click('#form-checkbox');

    const newValue = await page.$eval(
      '#form-checkbox',
      (element: Element): boolean => element.checked
    );

    assert.that(newValue).is.true();
  });
});
