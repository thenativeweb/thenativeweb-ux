const getExternalUrlsFromPage = function ({ page, baseUrl }: {
  page: CheerioStatic;
  baseUrl: string;
}): string[] {
  const urls: string[] = [];

  const linkElements = page('a[href]').toArray();

  for (const linkElement of linkElements) {
    let url = page(linkElement).attr('href');

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

  const metaRedirectElements = page('head meta[http-equiv="refresh"]').toArray();

  for (const metaRedirectElement of metaRedirectElements) {
    const content = page(metaRedirectElement).attr('content');

    if (!content) {
      continue;
    }

    const results = /url=(?<url>.*)$/u.exec(content);

    if (!results || !results[1]) {
      continue;
    }

    let url = results[1];

    if (url.startsWith('/')) {
      url = `${baseUrl}${url}`;
    }

    urls.push(url);
  }

  return urls;
};

export { getExternalUrlsFromPage };
