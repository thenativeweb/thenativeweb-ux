import { environment } from './environment';
import puppeteer, { Browser, Page } from 'puppeteer';

let browserInstance: Browser | undefined;

const browser = {
  async setupPage ({
    viewport = environment.viewport
  }: {
    viewport?: { width: number; height: number };
  } = {}): Promise<Page> {
    const { headless, slowMo } = environment;

    if (!browserInstance) {
      browserInstance = await puppeteer.launch({
        headless,
        slowMo
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
