import assert from 'assertthat';
import browser from '../../shared/browser';
import puppeteer from 'puppeteer';

suite('Button', function (): void {
  this.timeout(5 * 1000);

  let page: puppeteer.Page;

  setup(async (): Promise<void> => {
    page = await browser.setupPage();
  });

  teardown(async (): Promise<void> => {
    await browser.teardownPage(page);
  });

  test('is clickable.', async (): Promise<void> => {
    await page.waitForSelector('#button');

    let text = await page.$eval(
      '#button',
      (element: Element): string => element.innerHTML
    );

    assert.that(text.trim()).is.equalTo('Click me');

    await page.click('#button');

    text = await page.$eval(
      '#button',
      (element: Element): string => element.innerHTML
    );

    assert.that(text.trim()).is.equalTo('Thanks!');
  });
});
