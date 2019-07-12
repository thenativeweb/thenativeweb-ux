/* eslint-disable strict */

'use strict';

/* eslint-enable strict */

const assert = require('assertthat');

const browser = require('../shared/browser');

suite('with-next-js/client-side-rendering', function () {
  // Next.js needs a little bit more time on the first render of a page.
  // As this can vary depending on the complexity we give it a little bit more time.
  this.timeout(5 * 1000);

  let page;

  setup(async () => {
    page = await browser.setupPage();
  });

  teardown(async () => {
    await browser.teardownPage(page);
  });

  test('takes over once server side rendering is complete.', async () => {
    const button = await page.$('#button');

    await new Promise(resolve => {
      page.once('console', msg => {
        assert.that(msg.text()).is.equalTo('clicked::button');

        resolve();
      });

      button.click();
    });
  });

  test('removes server side rendered styles.', async () => {
    await page.waitForSelector('#index-page');
    const styleTag = await page.$('#server-side-styles');

    assert.that(styleTag).is.null();
  });
});
