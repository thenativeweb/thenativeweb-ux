import axios from 'axios';
import cheerio from 'cheerio';

const getPage = async ({ url }: {
  url: string;
}): Promise<CheerioStatic> => {
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

  const page = cheerio.load(data);

  return page;
};

export { getPage };
