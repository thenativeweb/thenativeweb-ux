import { assert } from 'assertthat';
import { PageSearch } from '../../../../lib/components/navigation/PageTree/PageSearch';
import { PageTree } from '../../../../lib';

suite('PageTreeSearch', (): void => {
  let pageTree: PageTree;
  let pageSearch: PageSearch;

  setup(async (): Promise<void> => {
    pageTree = new PageTree({
      items: [
        {
          title: 'Computer Science',
          children: [
            {
              title: 'Data Structures & Algorithms',
              children: [
                { title: 'Graphs' },
                { title: 'Trees' },
                { title: 'Queues' }
              ]
            },
            {
              title: 'Programming Languages',
              children: [
                { title: 'Lisp' },
                { title: 'JavaScript', keywords: [ 'dynamic' ]},
                { title: 'TypeScript', keywords: [ 'typed' ]}
              ]
            }
          ]
        },
        {
          title: 'Movies',
          children: [
            {
              title: 'Science Fiction',
              children: [
                { title: 'Blade Runner' },
                { title: 'Star Trek' },
                { title: 'Star Wars' }
              ]
            },
            {
              title: 'Comedy',
              children: [
                { title: 'The Life Aquatic' },
                { title: 'Ghost Busters' },
                { title: 'Anchorman' }
              ]
            }
          ]
        }
      ]
    });

    pageSearch = new PageSearch(pageTree);
  });

  suite('query', (): void => {
    test('returns an empty array when no page has been found.', async (): Promise<void> => {
      const results = pageSearch.query('foo');

      assert.that(results.length).is.equalTo(0);
    });

    test('returns multiple tree items if multiple items match the query.', async (): Promise<void> => {
      const results = pageSearch.query('star');

      assert.that(results.length).is.equalTo(2);

      assert.that(results[0].title).is.equalTo('Star Trek');
      assert.that(results[1].title).is.equalTo('Star Wars');
    });

    test('ignores upper and lower case.', async (): Promise<void> => {
      const results = pageSearch.query('sTAr');

      assert.that(results.length).is.equalTo(2);
      assert.that(results[0].title).is.equalTo('Star Trek');
      assert.that(results[1].title).is.equalTo('Star Wars');
    });

    test('queries both title and the breadcrumbs of tree items.', async (): Promise<void> => {
      const results = pageSearch.query('science');

      assert.that(results.length).is.equalTo(9);
      assert.that(results[0].title).is.equalTo('Graphs');
      assert.that(results[8].title).is.equalTo('Star Wars');
    });

    test('queries the keywords of tree items.', async (): Promise<void> => {
      const results = pageSearch.query('typed');

      assert.that(results.length).is.equalTo(1);
      assert.that(results[0].title).is.equalTo('TypeScript');
    });
  });
});
