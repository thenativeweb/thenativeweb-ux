/* eslint-disable strict */

'use strict';

/* eslint-enable strict */

const assert = require('assertthat');

const browser = require('../../shared/browser'),
      env = require('../../shared/env');

suite('with-next-js/themes/breakpoints', function () {
  // Next.js needs a little bit more time on the first render of a page.
  // As this can vary depending on the complexity we give it a little bit more time.
  this.timeout(5 * 1000);

  let page;

  teardown(async () => {
    await browser.teardownPage(page);
  });

  const assertResponsiveContainer = async function ({ viewportWidth, innerText } = {}) {
    if (!viewportWidth) {
      throw new Error('Viewport width is missing.');
    }
    if (!innerText) {
      throw new Error('Inner text is missing.');
    }

    page = await browser.setupPage({ viewport: { width: viewportWidth, height: 600 }});

    await page.goto(`${env.APP_URL}/breakpoints`);
    await page.waitForSelector('#responsive-container');

    const actual = await page.$eval('#responsive-container', el => el.innerText);

    assert.that(actual).is.equalTo(innerText);
  };

  suite('only', () => {
    test(`'only-xs' creates a query that targets devices smaller than 600px.`, async () => {
      await assertResponsiveContainer({ viewportWidth: 590, innerText: 'OnlyXs' });
    });

    test(`'only-sm' creates a query that targets devices smaller than 960px.`, async () => {
      await assertResponsiveContainer({ viewportWidth: 950, innerText: 'OnlySm' });
    });

    test(`'only-md' creates a query that targets devices smaller than 1280px.`, async () => {
      await assertResponsiveContainer({ viewportWidth: 1270, innerText: 'OnlyMd' });
    });

    test(`'only-lg' creates a query that targets devices smaller than 1920px.`, async () => {
      await assertResponsiveContainer({ viewportWidth: 1910, innerText: 'OnlyLg' });
    });

    test(`'only-xl' creates a query that targets devices larger than 1920px.`, async () => {
      await assertResponsiveContainer({ viewportWidth: 1930, innerText: 'OnlyXl' });
    });
  });
});
