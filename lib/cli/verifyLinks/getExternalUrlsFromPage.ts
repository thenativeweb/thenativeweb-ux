import { Page } from './getPage';
import { toArray } from '../../utils/toArray';

const getExternalUrlsFromPage = function ({ page, baseUrl }: {
  page: Page;
  baseUrl: string;
}): string[] {
  const urls: string[] = [];

  const linkElements = toArray(page.document.querySelectorAll<HTMLAnchorElement>('a[href]'));

  for (const linkElement of linkElements) {
    let url = linkElement.getAttribute('href');

    if (!url) {
      continue;
    }
    if (url.startsWith('#') || url.startsWith('mailto:')) {
      continue;
    }

    if (url.startsWith('/')) {
      url = `${baseUrl}${url}`;
    }

    urls.push(url);
  }

  const metaRedirectContent = page.document.querySelector<HTMLMetaElement>('head meta[http-equiv="refresh"]')?.getAttribute('content');

  if (metaRedirectContent) {
    const results = /url=(?<url>.*)$/u.exec(metaRedirectContent);

    if (results && results[1]) {
      let url = results[1];

      if (url.startsWith('/')) {
        url = `${baseUrl}${url}`;
      }

      urls.push(url);
    }
  }

  return urls;
};

export { getExternalUrlsFromPage };
