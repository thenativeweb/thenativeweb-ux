import { assert } from 'assertthat';
import { getBrokenUrls } from '../../lib/cli/verifyLinks/getBrokenUrls';
import getPort from 'get-port';
import http from 'http';
import path from 'path';
import express, { static as serveStatic } from 'express';

suite('getBrokenUrls', (): void => {
  let port: number;

  suiteSetup(async (): Promise<void> => {
    port = await getPort();

    const app = express();

    app.use('/', serveStatic(path.join(__dirname, '..', 'shared', 'brokenUrlsWebsite')));

    const server = http.createServer(app);

    server.listen(port);
  });

  test('returns a list of broken urls.', async (): Promise<void> => {
    const brokenUrls = await getBrokenUrls({
      urls: [ `http://localhost:${port}` ],
      baseUrl: `http://localhost:${port}`
    });

    assert.that(brokenUrls).is.equalTo([
      {
        url: `http://localhost:${port}/missing.html`,
        referrers: [
          `http://localhost:${port}`,
          `http://localhost:${port}/page.html`,
          `http://localhost:${port}/index.html`
        ]
      }
    ]);
  });

  test('supports meta redirects.', async (): Promise<void> => {
    const brokenUrls = await getBrokenUrls({
      urls: [ `http://localhost:${port}/meta-redirect.html` ],
      baseUrl: `http://localhost:${port}`
    });

    assert.that(brokenUrls).is.equalTo([
      {
        url: `http://localhost:${port}/missing.html`,
        referrers: [
          `http://localhost:${port}/page.html`,
          `http://localhost:${port}/index.html`
        ]
      }
    ]);
  });
});
