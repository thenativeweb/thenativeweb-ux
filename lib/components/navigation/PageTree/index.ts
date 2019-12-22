import { PageTreeItem } from './PageTreeItem';
import { PageTreeSearch } from './PageTreeSearch';
import { slugify } from '../../../services';

class PageTree {
  private readonly originalItem: PageTreeItem [];

  private readonly basePath: string;

  public readonly items: PageTreeItem [];

  private readonly treeSearch: PageTreeSearch;

  public constructor ({ items, basePath = '' }: { items: PageTreeItem []; basePath?: string }) {
    this.originalItem = items;
    this.basePath = basePath;

    this.items = this.buildMetaData(this.originalItem, basePath, []);
    this.treeSearch = new PageTreeSearch(this.items);
  }

  private buildMetaData (items: PageTreeItem [], path: string, breadcrumbs: string []): PageTreeItem [] {
    const itemsWithMetadata = items.map((item): PageTreeItem => {
      const slug = slugify(item.title);
      const breadcrumbsForItem = [ ...breadcrumbs, item.title ];
      const breadcrumbsAsString = breadcrumbsForItem.join(' ');
      const keywordsAsString = item.keywords?.join(' ');

      if (item.children) {
        return {
          ...item,
          slug,
          path: `${path}/${slug}`,
          breadcrumbs: breadcrumbsForItem,
          children: this.buildMetaData(item.children, `${path}/${slug}`, breadcrumbsForItem)
        };
      }

      return {
        ...item,
        slug,
        path: `${path}/${slug}`,
        breadcrumbs: breadcrumbsForItem,
        breadcrumbsAsString,
        keywordsAsString
      };
    });

    return itemsWithMetadata;
  }

  public search (query: string): PageTreeItem [] {
    return this.treeSearch.query(query);
  }
}

export { PageTree };
