import axios from 'axios';
import { buntstift } from 'buntstift';
import { oneLine } from 'common-tags';
import path from 'path';
import { retry } from 'retry-ignore-abort';
import shell from 'shelljs';
import { getIntegrationTestUrl, integrationTestPort } from '../environment';

const nginx = {
  async start (): Promise<void> {
    const url = getIntegrationTestUrl();

    const childProcess = shell.exec(oneLine`
      docker run
        -d
        -p ${integrationTestPort}:80
        -v ${path.join(__dirname, '..', '..', '..', 'test', 'shared', 'sampleApplication', 'out')}:/usr/share/nginx/html
        --name test-nginx
        nginx:1.17.4-alpine
    `);

    if (childProcess.code !== 0) {
      throw new Error('Failed to run nginx docker container.');
    }

    try {
      // We only do 3 retries here as nginx starts pretty fast. Otherwise we
      // wait for a very long time if nginx does not serve the files correctly.
      await retry(async (): Promise<void> => await axios.get(url), { retries: 3 });
    } catch (ex) {
      buntstift.info(ex.message);
      buntstift.error('Failed to connect to nginx.');

      throw ex;
    }
  },

  async stop (): Promise<void> {
    shell.exec([
      'docker kill test-nginx',
      'docker rm -v test-nginx'
    ].join(';'));
  }
};

export { nginx };
