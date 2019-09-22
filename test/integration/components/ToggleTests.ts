import assert from 'assertthat';
import browser from '../../shared/browser';
import puppeteer from 'puppeteer';

suite('Toggle', function (): void {
  this.timeout(5 * 1000);

  let page: puppeteer.Page;

  setup(async (): Promise<void> => {
    page = await browser.setupPage();
  });

  teardown(async (): Promise<void> => {
    await browser.teardownPage(page);
  });

  test('calls onChange when option is clicked.', async (): Promise<void> => {
    await page.waitForSelector('#toggle');

    let text = await page.$eval(
      '#toggle-value',
      (element: Element): string => element.innerText
    );

    assert.that(text.trim()).is.equalTo('Option 1');

    await page.click('#toggle :nth-child(2)');

    text = await page.$eval(
      '#toggle-value',
      (element: Element): string => element.innerText
    );

    assert.that(text.trim()).is.equalTo('Option 2');
  });
});
