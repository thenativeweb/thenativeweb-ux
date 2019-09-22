import environment from './environment';
import puppeteer from 'puppeteer';

let browserInstance: puppeteer.Browser;

const browser = {
  async setupPage (
    autoLoadApplication = true,
    viewport = environment.viewport
  ): Promise<puppeteer.Page> {
    const { headless, url } = environment;

    if (!browserInstance) {
      browserInstance = await puppeteer.launch({ headless });
    }

    const page = await browserInstance.newPage();

    await page.setViewport(viewport);

    if (autoLoadApplication) {
      await page.goto(url);
    }

    return page;
  },

  async teardownPage (page: puppeteer.Page): Promise<void> {
    await page.close();
  }
};

export default browser;
