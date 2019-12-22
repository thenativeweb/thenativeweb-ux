import { PageTreeItem } from '../../..';

class PageTreeSearch {
  private readonly originalItems: PageTreeItem [];

  private flatItems: PageTreeItem [] | undefined;

  public constructor (items: PageTreeItem []) {
    this.originalItems = items;
  }

  public query (query: string): PageTreeItem [] {
    if (!this.flatItems) {
      this.flatItems = this.flattenItems(this.originalItems);
    }

    const queryWords = query.
      split(' ').
      filter((word): boolean => word !== '');

    const patterns = queryWords.map((word): RegExp => {
      const pattern = new RegExp(`(\\b${word})`, 'iu');

      return pattern;
    });

    const results = this.flatItems.filter((item: PageTreeItem): boolean => {
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

  private flattenItems (items: PageTreeItem []): PageTreeItem [] {
    const flattenedItems: PageTreeItem[] = [];

    for (const item of items) {
      if (item.children) {
        flattenedItems.push(...this.flattenItems(item.children));
      } else {
        flattenedItems.push({ ...item });
      }
    }

    return flattenedItems;
  }
}

export { PageTreeSearch };
