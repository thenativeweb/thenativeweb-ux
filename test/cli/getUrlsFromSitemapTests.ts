import { assert } from 'assertthat';
import { isolated } from 'isolated';
import path from 'path';
import { writeFileSync } from 'fs';
import { getUrlsFromSitemap, parseSitemapTXT, parseSitemapXML } from '../../lib/cli/verifyLinks/getUrlsFromSitemap';

suite('parseSitemapXML', (): void => {
  test('returns all links from the xml file.', async (): Promise<void> => {
    const sitemapContent = {
      urlset: {
        url: [
          {
            loc: [ 'https://example.com/' ],
            lastmod: [ '...' ]
          },
          {
            loc: [ 'https://example.com/examplepage1' ],
            lastmod: [ '...' ]
          },
          {
            loc: [ 'https://example.com/examplepage2' ],
            lastmod: [ '...' ]
          }
        ]
      }
    };

    assert.
      that(parseSitemapXML(sitemapContent)).
      is.equalTo([ 'https://example.com/', 'https://example.com/examplepage1', 'https://example.com/examplepage2' ]);
  });
});

suite('parseSitetmapTXT', (): void => {
  test('returns all links from the txt file.', async (): Promise<void> => {
    const sitemapContent =
`https://example.com/
https://example.com/examplepage1
https://example.com/examplepage2`;

    assert.
      that(parseSitemapTXT(sitemapContent)).
      is.equalTo([ 'https://example.com/', 'https://example.com/examplepage1', 'https://example.com/examplepage2' ]);
  });

  test('ignores blank lines.', async (): Promise<void> => {
    const sitemapContent =
`https://example.com/

https://example.com/examplepage1
https://example.com/examplepage2
       
`;

    assert.
      that(parseSitemapTXT(sitemapContent)).
      is.equalTo([ 'https://example.com/', 'https://example.com/examplepage1', 'https://example.com/examplepage2' ]);
  });

  test('trims urls correctly.', async (): Promise<void> => {
    const sitemapContent =
` https://example.com/
   https://example.com/examplepage1
 https://example.com/examplepage2
`;

    assert.
      that(parseSitemapTXT(sitemapContent)).
      is.equalTo([ 'https://example.com/', 'https://example.com/examplepage1', 'https://example.com/examplepage2' ]);
  });
});

suite('getUrlsFromSitemap', (): void => {
  test('parses XML file correctly.', async (): Promise<void> => {
    const validXMLData =
`<?xml version="1.0" encoding="UTF-8"?>
<urlset>
    <url>
      <loc>
        https://example.com/
      </loc>
      <lastmod>
        ...
      </lastmod>
    </url>

    <url>
      <loc>
        https://example.com/examplepage
      </loc>
      <lastmod>
        ...
      </lastmod>
    </url>
</urlset>`;
    const tempDirectory = await isolated();
    const tempFile = path.join(tempDirectory, 'tempFile');

    writeFileSync(tempFile, validXMLData);

    const urls = await getUrlsFromSitemap({ sitemapPath: tempFile });

    assert.that(urls).is.equalTo([ 'https://example.com/', 'https://example.com/examplepage' ]);
  });

  test('parses TXT file correctly.', async (): Promise<void> => {
    const validTXTData =
`https://example.com/
https://example.com/examplepage`;
    const tempDirectory = await isolated();
    const tempFile = path.join(tempDirectory, 'tempFile');

    writeFileSync(tempFile, validTXTData);

    const urls = await getUrlsFromSitemap({ sitemapPath: tempFile });

    assert.that(urls).is.equalTo([ 'https://example.com/', 'https://example.com/examplepage' ]);
  });

  test('throws error on valid xml file with wrong structure.', async (): Promise<void> => {
    const invalidXMLData =
`<?xml version="1.0" encoding="UTF-8"?>
<wrong>
    obviously wrong structure
</wrong>`;
    const tempDirectory = await isolated();
    const tempFile = path.join(tempDirectory, 'tempFile');
    let errorThrown = false;

    writeFileSync(tempFile, invalidXMLData);

    writeFileSync(tempFile, invalidXMLData);

    try {
      await getUrlsFromSitemap({ sitemapPath: tempFile });
    } catch {
      errorThrown = true;
    }
    assert.that(errorThrown).is.true();
  });
});
