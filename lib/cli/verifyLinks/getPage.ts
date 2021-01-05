import axios from 'axios';
import { JSDOM, VirtualConsole } from 'jsdom';

export interface Page {
  document: Document;
  destroy: () => void;
}

const getPage = async ({ url }: {
  url: string;
}): Promise<Page> => {
  const { data } = await axios({
    method: 'get',
    url,
    headers: {
      // By default, axios accepts JSON. This makes some websites think that we
      // are a bot, not a browser (actually, we *are* a bot, but we want to be
      // treated like a browser). E.g., this makes a difference when accessing
      // GitHub. So, to get the desired behavior, accept anything.
      accept: '*/*',

      // Twitter stopped serving to axios, based on its user agent. We use a
      // browser-style user agent here to trick Twitter into serving us anyway.
      'user-agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0'
    }
  });

  const { window } = new JSDOM(data, {
    virtualConsole: new VirtualConsole().sendTo(console, { omitJSDOMErrors: true })
  });

  const page = {
    document: window.document,
    destroy (): void {
      window.close();
    }
  };

  return page;
};

export { getPage };
