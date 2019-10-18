import axios from 'axios';
import buntstift from 'buntstift';
import { oneLine } from 'common-tags';
import retry from 'async-retry';
import shell from 'shelljs';
import path from 'path';

const nginx = {
  async start (): Promise<void> {
    shell.exec(oneLine`
      docker run
        -d
        -p 3000:80
        -v ${path.join(__dirname, '..', '..', '..', 'examples', 'with-next-js', 'out')}:/usr/share/nginx/html
        --name test-nginx
        nginx:1.17.4-alpine
    `);

    try {
      await retry(async (): Promise<void> => await axios.get('http://localhost:3000/'));
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

export default nginx;
