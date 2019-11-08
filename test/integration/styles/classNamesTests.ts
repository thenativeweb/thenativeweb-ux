import assert from 'assertthat';
import { browser } from '../../shared/browser';
import { environment } from '../../shared/environment';
import { Page } from 'puppeteer';

suite('styles/classNames', function (): void {
  this.timeout(environment.integrationTestTimeOut);

  let page: Page;

  setup(async (): Promise<void> => {
    page = await browser.setupPage();
  });

  teardown(async (): Promise<void> => {
    await browser.teardownPage(page);
  });

  test('creates classes.', async (): Promise<void> => {
    await page.goto(`${environment.baseUrl}/components/`);
    const hasCustomClass = await page.$eval(
      '#classNames',
      (element: Element): boolean => element.classList.contains('custom')
    );

    assert.that(hasCustomClass).is.true();
  });
});
