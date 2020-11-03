import fs from 'fs';
import { parseStringPromise as parseString } from 'xml2js';
import { Value } from 'validate-value';

interface UrlSetEntry {
  loc: string[];
  lastmod: string[];
}

interface SitemapContent {
  urlset: { url: UrlSetEntry[] };
}

const invalidXMLStructureErrorMessage = 'Provided XML file has invalid structure.';

const sitemapContentSchema = {
  type: 'object' as const,
  properties: {
    urlset: {
      type: 'object' as const,
      properties: {
        url: {
          type: 'array' as const,
          items: {
            type: 'object' as const,
            properties: {
              loc: {
                type: 'array' as const,
                items: {
                  type: 'string' as const
                },
                minItems: 1,
                maxItems: 1
              },
              lastmod: {
                type: 'array' as const,
                items: {
                  type: 'string' as const
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

const isSitemapContent = (data: any): boolean =>
  new Value(sitemapContentSchema).isValid(data);

const parseSitemapXML = (sitemapContent: SitemapContent): string[] =>
  sitemapContent.urlset.url.map((url): string => url.loc[0].trim());

const parseSitemapTXT = (sitemapContent: string): string[] => {
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
      return parseSitemapXML(xmlParsedSitemap);
    }
  } catch {
    return parseSitemapTXT(sitemap);
  }

  throw new Error(invalidXMLStructureErrorMessage);
};

export { getUrlsFromSitemap, parseSitemapTXT, parseSitemapXML };
