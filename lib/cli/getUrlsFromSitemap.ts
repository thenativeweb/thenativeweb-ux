import fs from 'fs';

const getUrlsFromSitemap = async function ({ sitemapPath }: {
  sitemapPath: string;
}): Promise<string[]> {
  const sitemap = await fs.promises.readFile(sitemapPath, 'utf8');

  const urls = sitemap.
    split('\n').
    filter((url): boolean => url.trim() !== '');

  return urls;
};

export { getUrlsFromSitemap };
