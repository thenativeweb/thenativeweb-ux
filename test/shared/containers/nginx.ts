import axios from 'axios';
import { buntstift } from 'buntstift';
import { oneLine } from 'common-tags';
import { retry } from 'retry-ignore-abort';
import shell from 'shelljs';

const nginx = {
  async start ({
    name,
    rootDirectory,
    port
  }: {
    name: string;
    rootDirectory: string;
    port: number;
  }): Promise<void> {
    const childProcess = shell.exec(oneLine`
      docker run
        -d
        -p ${port}:80
        -v ${rootDirectory}:/usr/share/nginx/html
        --name ${name}
        nginx:1.17.4-alpine
    `);

    if (childProcess.code !== 0) {
      throw new Error('Failed to run nginx docker container.');
    }

    try {
      // We only do 3 retries here as nginx starts pretty fast. Otherwise we
      // wait for a very long time if nginx does not serve the files correctly.
      await retry(async (): Promise<void> => await axios.get(`http://localhost:${port}`), { retries: 3 });
    } catch (ex: unknown) {
      buntstift.info((ex as Error).message);
      buntstift.error('Failed to connect to nginx.');

      throw ex;
    }
  },

  async stop ({ name }: { name: string }): Promise<void> {
    shell.exec([
      `docker kill ${name}`,
      `docker rm -v ${name}`
    ].join(';'));
  }
};

export { nginx };
