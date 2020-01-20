import { PageTree } from '.';
import { PageTreeItem } from '../../..';

class PageSearch {
  private readonly pageTree: PageTree;

  public constructor (pageTree: PageTree) {
    this.pageTree = pageTree;
  }

  public query (query: string): PageTreeItem [] {
    const queryWords = query.
      split(' ').
      filter((word): boolean => word !== '');

    const patterns = queryWords.map((word): RegExp => {
      const pattern = new RegExp(`(\\b${word})`, 'iu');

      return pattern;
    });

    const results = this.pageTree.itemsFlat.filter((item: PageTreeItem): boolean => {
      let occurences = 0;

      for (const pattern of patterns) {
        if (
          pattern.test(item.title) ||
          pattern.test(item.keywordsAsString!) ||
          pattern.test(item.breadcrumbsAsString!)
        ) {
          occurences += 1;
        }
      }

      return occurences === patterns.length;
    });

    return results;
  }
}

export { PageSearch };
