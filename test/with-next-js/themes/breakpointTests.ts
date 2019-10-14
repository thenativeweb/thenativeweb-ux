import assert from 'assertthat';
import browser from '../../shared/browser';
import env from '../../shared/environment';
import { Page } from 'puppeteer';

suite('with-next-js/themes/breakpoints', function (): void {
  // Next.js needs a little bit more time on the first render of a page.
  // As this can vary depending on the complexity we give it a little bit more time.
  this.timeout(5 * 1000);

  let page: Page;

  teardown(async (): Promise<void> => {
    await browser.teardownPage(page);
  });

  const assertResponsiveContainer = async function ({ viewportWidth, innerText }: {
    viewportWidth: number;
    innerText: string;
  }): Promise<void> {
    if (!viewportWidth) {
      throw new Error('Viewport width is missing.');
    }
    if (!innerText) {
      throw new Error('Inner text is missing.');
    }

    page = await browser.setupPage(true, { width: viewportWidth, height: 600 });

    await page.goto(`${env.url}/breakpoints`);
    await page.waitForSelector('#responsive-container');

    const actual = await page.$eval('#responsive-container', (el): string | null => el.textContent);

    assert.that(actual).is.equalTo(innerText);
  };

  suite('only', (): void => {
    test(`'only-xs' creates a query that targets devices smaller than 600px.`, async (): Promise<void> => {
      await assertResponsiveContainer({ viewportWidth: 590, innerText: 'OnlyXs' });
    });

    test(`'only-sm' creates a query that targets devices smaller than 960px.`, async (): Promise<void> => {
      await assertResponsiveContainer({ viewportWidth: 950, innerText: 'OnlySm' });
    });

    test(`'only-md' creates a query that targets devices smaller than 1280px.`, async (): Promise<void> => {
      await assertResponsiveContainer({ viewportWidth: 1270, innerText: 'OnlyMd' });
    });

    test(`'only-lg' creates a query that targets devices smaller than 1920px.`, async (): Promise<void> => {
      await assertResponsiveContainer({ viewportWidth: 1910, innerText: 'OnlyLg' });
    });

    test(`'only-xl' creates a query that targets devices larger than 1920px.`, async (): Promise<void> => {
      await assertResponsiveContainer({ viewportWidth: 1930, innerText: 'OnlyXl' });
    });
  });
});
