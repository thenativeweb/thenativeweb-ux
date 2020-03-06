import axios from 'axios';
import { buntstift } from 'buntstift';
import { oneLine } from 'common-tags';
import { retry } from 'retry-ignore-abort';
import shell from 'shelljs';

const nginx = {
  async start ({
    rootDirectory,
    port
  }: {
    rootDirectory: string;
    port: number;
  }): Promise<void> {
    const childProcess = shell.exec(oneLine`
      docker run
        -d
        -p ${port}:80
        -v ${rootDirectory}:/usr/share/nginx/html
        --name test-nginx
        nginx:1.17.4-alpine
    `);

    if (childProcess.code !== 0) {
      throw new Error('Failed to run nginx docker container.');
    }

    try {
      // We only do 3 retries here as nginx starts pretty fast. Otherwise we
      // wait for a very long time if nginx does not serve the files correctly.
      await retry(async (): Promise<void> => await axios.get(`http://localhost:${port}`), { retries: 3 });
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
