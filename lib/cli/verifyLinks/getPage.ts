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
      accept: '*/*'
    }
  });

  const { window } = new JSDOM(data, {
    // eslint-disable-next-line @typescript-eslint/naming-convention
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
