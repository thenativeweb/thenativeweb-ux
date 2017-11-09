const assert = require('assertthat'),
      puppeteer = require('puppeteer');

suite('Button', () => {
  let browser,
      page;

  setup(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });
    await page.goto('http://localhost:8080/');

    // await page.screenshot({ path: 'shot.png' });
  });

  teardown(async () => {
    await browser.close();
  });

  test('is clickable.', async () => {
    await page.waitForSelector('#button');

    let text = await page.$eval('#button', el => el.innerText);

    assert.that(text).is.equalTo('Click me');

    await page.click('#button');

    text = await page.$eval('#button', el => el.innerText);

    assert.that(text).is.equalTo('Thanks!');
  });
});
