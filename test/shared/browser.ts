import { viewport as defaultViewport, headless, slowMotion } from './environment';
import puppeteer, { Browser, Page } from 'puppeteer';

let browserInstance: Browser | undefined;

const browser = {
  viewports: {
    xs: { width: 590, height: 600 },
    sm: { width: 601, height: 600 },
    md: { width: 961, height: 600 },
    lg: { width: 1281, height: 600 },
    xl: { width: 1921, height: 600 }
  },
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
