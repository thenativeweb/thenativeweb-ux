import { browser } from '../../shared/browser';
import { Page } from 'puppeteer';
import { getIntegrationTestUrl, integrationTestTimeOut } from '../../shared/environment';

suite('breakpoints', function (): void {
  this.timeout(integrationTestTimeOut);

  let page: Page;

  teardown(async (): Promise<void> => {
    await browser.teardownPage(page);
  });

  const assertElementVisibility = async function ({ viewportWidth, visibleSelectors, hiddenSelectors }: {
    viewportWidth: number;
    visibleSelectors: string[];
    hiddenSelectors: string[];
  }): Promise<void> {
    const url = getIntegrationTestUrl('/integration/themes/breakpoints');

    page = await browser.setupPage({
      viewport: { width: viewportWidth, height: 600 }
    });

    await page.goto(url);

    for (const selector of visibleSelectors) {
      await page.waitForSelector(selector, {
        visible: true
      });
    }

    for (const selector of hiddenSelectors) {
      await page.waitForSelector(selector, {
        hidden: true
      });
    }
  };

  suite('only', (): void => {
    test(`only('xs') creates a query that targets devices smaller than 600px.`, async (): Promise<void> => {
      await assertElementVisibility({
        viewportWidth: 590,
        visibleSelectors: [ '#xs' ],
        hiddenSelectors: [ '#sm', '#md', '#lg', '#xl' ]
      });
    });

    test(`only('sm') creates a query that targets devices smaller than 960px.`, async (): Promise<void> => {
      await assertElementVisibility({
        viewportWidth: 950,
        visibleSelectors: [ '#sm' ],
        hiddenSelectors: [ '#xs', '#md', '#lg', '#xl' ]
      });
    });

    test(`only('md') creates a query that targets devices smaller than 1280px.`, async (): Promise<void> => {
      await assertElementVisibility({
        viewportWidth: 1_270,
        visibleSelectors: [ '#md' ],
        hiddenSelectors: [ '#xs', '#sm', '#lg', '#xl' ]
      });
    });

    test(`only('md') creates a query that targets devices smaller than 1920px.`, async (): Promise<void> => {
      await assertElementVisibility({
        viewportWidth: 1_910,
        visibleSelectors: [ '#lg' ],
        hiddenSelectors: [ '#xs', '#sm', '#md', '#xl' ]
      });
    });

    test(`only('lg') creates a query that targets devices larger than 1920px.`, async (): Promise<void> => {
      await assertElementVisibility({
        viewportWidth: 1_930,
        visibleSelectors: [ '#xl' ],
        hiddenSelectors: [ '#xs', '#sm', '#md', '#lg' ]
      });
    });
  });
});
