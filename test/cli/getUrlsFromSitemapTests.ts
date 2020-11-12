import { assert } from 'assertthat';
import fs from 'fs';
import { isolated } from 'isolated';
import path from 'path';
import { getUrlsFromSitemap, parseSitemapTXT, parseSitemapXML } from '../../lib/cli/verifyLinks/getUrlsFromSitemap';
import { html, stripIndent } from 'common-tags';

const now = new Date().toISOString();

suite('parseSitemapXML', (): void => {
  test('returns all links from the XML file.', async (): Promise<void> => {
    const sitemapContent = {
      urlset: {
        url: [
          {
            loc: [ 'https://example.com/' ],
            lastmod: [ now ]
          },
          {
            loc: [ 'https://example.com/examplepage1' ],
            lastmod: [ now ]
          },
          {
            loc: [ 'https://example.com/examplepage2' ],
            lastmod: [ now ]
          }
        ]
      }
    };

    assert.
      that(parseSitemapXML(sitemapContent)).
      is.equalTo([ 'https://example.com/', 'https://example.com/examplepage1', 'https://example.com/examplepage2' ]);
  });
});

suite('parseSitemapTXT', (): void => {
  test('returns all links from the TXT file.', async (): Promise<void> => {
    const sitemapContent = stripIndent`
      https://example.com/
      https://example.com/examplepage1
      https://example.com/examplepage2`;

    assert.
      that(parseSitemapTXT(sitemapContent)).
      is.equalTo([ 'https://example.com/', 'https://example.com/examplepage1', 'https://example.com/examplepage2' ]);
  });

  test('ignores blank lines.', async (): Promise<void> => {
    const sitemapContent = stripIndent`
      https://example.com/

      https://example.com/examplepage1
      https://example.com/examplepage2
       
      `;

    assert.
      that(parseSitemapTXT(sitemapContent)).
      is.equalTo([ 'https://example.com/', 'https://example.com/examplepage1', 'https://example.com/examplepage2' ]);
  });

  test('trims urls correctly.', async (): Promise<void> => {
    const sitemapContent = stripIndent`
      https://example.com/
          https://example.com/examplepage1
        https://example.com/examplepage2`;

    assert.
      that(parseSitemapTXT(sitemapContent)).
      is.equalTo([ 'https://example.com/', 'https://example.com/examplepage1', 'https://example.com/examplepage2' ]);
  });
});

suite('getUrlsFromSitemap', (): void => {
  test('parses the XML file correctly.', async (): Promise<void> => {
    const validXMLData = html`
      <?xml version="1.0" encoding="UTF-8"?>
      <urlset>
        <url>
          <loc>
            https://example.com/
          </loc>
          <lastmod>
            ${now}
          </lastmod>
        </url>

        <url>
          <loc>
            https://example.com/examplepage
          </loc>
          <lastmod>
            ${now}
          </lastmod>
        </url>
    </urlset>`;
    const tempDirectory = await isolated();
    const tempFile = path.join(tempDirectory, 'tempFile');

    await fs.promises.writeFile(tempFile, validXMLData);

    const urls = await getUrlsFromSitemap({ sitemapPath: tempFile });

    assert.that(urls).is.equalTo([ 'https://example.com/', 'https://example.com/examplepage' ]);
  });

  test('parses TXT file correctly.', async (): Promise<void> => {
    const validTXTData = stripIndent`
      https://example.com/
      https://example.com/examplepage`;
    const tempDirectory = await isolated();
    const tempFile = path.join(tempDirectory, 'tempFile');

    await fs.promises.writeFile(tempFile, validTXTData);

    const urls = await getUrlsFromSitemap({ sitemapPath: tempFile });

    assert.that(urls).is.equalTo([ 'https://example.com/', 'https://example.com/examplepage' ]);
  });

  test('throws an error on valid XML file with wrong structure.', async (): Promise<void> => {
    const invalidXMLData = html`
      <?xml version="1.0" encoding="UTF-8"?>
      <wrong>
          obviously wrong structure
      </wrong>`;
    const tempDirectory = await isolated();
    const tempFile = path.join(tempDirectory, 'tempFile');

    await fs.promises.writeFile(tempFile, invalidXMLData);

    await assert.that(async (): Promise<void> => {
      await getUrlsFromSitemap({ sitemapPath: tempFile });
    }).is.throwingAsync();
  });
});
