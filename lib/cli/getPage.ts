import axios from 'axios';
import cheerio from 'cheerio';

const getPage = async ({ url }: {
  url: string;
}): Promise<CheerioStatic> => {
  const { data } = await axios({
    method: 'get',
    url
  });

  const page = cheerio.load(data);

  return page;
};

export { getPage };
