import { viewport as defaultViewport, headless, slowMotion } from './environment';
import puppeteer, { Browser, Page } from 'puppeteer';

let browserInstance: Browser | undefined;

const browser = {
  async setupPage ({
    viewport = defaultViewport
  }: {
    viewport?: { width: number; height: number };
  } = {}): Promise<Page> {
    if (!browserInstance) {
      browserInstance = await puppeteer.launch({
        headless,
        slowMo: slowMotion
      });
    }

    const page = await browserInstance.newPage();

    await page.setViewport(viewport);

    return page;
  },

  async teardownPage (page: Page): Promise<void> {
    await page.close();
  }
};

export { browser };
