import { assert } from 'assertthat';
import { getPage } from 'lib/cli/verifyLinks/getPage';

suite('getPage', (): void => {
  test('is able to fetch from twitter.', async (): Promise<void> => {
    await assert.that(async (): Promise<void> => {
      await getPage({ url: 'https://twitter.com/twitter' });
    }).is.not.throwingAsync();
  });
});
