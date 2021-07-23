import fs from 'fs';
import { parseStringPromise as parseString } from 'xml2js';
import { isOfType, JsonSchema } from 'validate-value';

interface UrlSetEntry {
  loc: string[];
  lastmod: string[];
}

interface SitemapContent {
  urlset: { url: UrlSetEntry[] };
}

const invalidXmlStructureErrorMessage = 'Provided XML file has invalid structure.';

const sitemapContentSchema: JsonSchema = {
  type: 'object',
  properties: {
    urlset: {
      type: 'object',
      properties: {
        url: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              loc: {
                type: 'array',
                items: {
                  type: 'string'
                },
                minItems: 1,
                maxItems: 1
              },
              lastmod: {
                type: 'array',
                items: {
                  type: 'string'
                },
                minItems: 1,
                maxItems: 1
              }
            },
            required: [ 'loc', 'lastmod' ],
            additionalProperties: false
          }
        }
      },
      required: [ 'url' ]
    }
  },
  required: [ 'urlset' ]
};

const isSitemapContent = (data: any): data is SitemapContent =>
  isOfType(data, sitemapContentSchema);

const parseSitemapXml = (sitemapContent: SitemapContent): string[] =>
  sitemapContent.urlset.url.map((url): string => url.loc[0].trim());

const parseSitemapTxt = (sitemapContent: string): string[] => {
  const urls = sitemapContent.
    split('\n').
    map((url): string => url.trim()).
    filter((url): boolean => url !== '');

  return urls;
};

const getUrlsFromSitemap = async function ({ sitemapPath }: {
  sitemapPath: string;
}): Promise<string[]> {
  const sitemap = await fs.promises.readFile(sitemapPath, 'utf8');

  try {
    const xmlParsedSitemap = await parseString(sitemap);

    if (isSitemapContent(xmlParsedSitemap)) {
      return parseSitemapXml(xmlParsedSitemap);
    }
  } catch {
    return parseSitemapTxt(sitemap);
  }

  throw new Error(invalidXmlStructureErrorMessage);
};

export { getUrlsFromSitemap, parseSitemapTxt, parseSitemapXml };
