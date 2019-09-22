import assert from 'assertthat';
import browser from '../../shared/browser';
import puppeteer from 'puppeteer';

suite('classNames', (): void => {
  let page: puppeteer.Page;

  setup(async (): Promise<void> => {
    page = await browser.setupPage();
  });

  teardown(async (): Promise<void> => {
    await browser.teardownPage(page);
  });

  test('creates classes.', async (): Promise<void> => {
    const hasCustomClass = await page.$eval(
      '#classNames',
      (element: Element): boolean => element.classList.contains('custom')
    );

    assert.that(hasCustomClass).is.true();
  });
});
