const getExternalUrlsFromPage = function ({ page, baseUrl }: {
  page: CheerioStatic;
  baseUrl: string;
}) {
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

  return urls;
};

export { getExternalUrlsFromPage };
