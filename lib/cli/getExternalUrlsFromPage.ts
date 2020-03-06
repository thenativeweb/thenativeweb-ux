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

  const metaRedirectContent = page('head meta[http-equiv="refresh"]').attr('content');

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
