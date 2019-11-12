import assert from 'assertthat';
import { browser } from '../../shared/browser';
import { Page } from 'puppeteer';
import { getIntegrationTestUrl, integrationTestTimeOut } from '../../shared/environment';

suite('classNames', function (): void {
  this.timeout(integrationTestTimeOut);

  let page: Page;

  setup(async (): Promise<void> => {
    page = await browser.setupPage();
  });

  teardown(async (): Promise<void> => {
    await browser.teardownPage(page);
  });

  test('creates classes.', async (): Promise<void> => {
    const url = getIntegrationTestUrl('/components');

    await page.goto(url);
    const hasCustomClass = await page.$eval(
      '#classNames',
      (element: Element): boolean => element.classList.contains('custom')
    );

    assert.that(hasCustomClass).is.true();
  });
});
