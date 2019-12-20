import { PageTreeItem } from './PageTreeItem';
import { slugify } from '../../services';
import { PageTreeSearch } from './PageTreeSearch';

class PageTree {
  private readonly originalItem: PageTreeItem [];

  private readonly basePath: string;

  public readonly items: PageTreeItem [];

  private expandedPaths: string [];

  private readonly treeSearch: PageTreeSearch;

  public constructor ({ items, basePath = '' }: { items: PageTreeItem []; basePath?: string }) {
    this.originalItem = items;
    this.basePath = basePath;
    this.expandedPaths = [];

    this.items = this.buildMetaData(this.originalItem, basePath, []);
    this.treeSearch = new PageTreeSearch(this.items);
  }

  private buildMetaData (items: PageTreeItem [], path: string, breadcrumbs: string []): PageTreeItem [] {
    const itemsWithMetadata = items.map((item): PageTreeItem => {
      const slug = slugify(item.title);
      const breadcrumbsForItem = [ ...breadcrumbs, item.title ];

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
        breadcrumbs: breadcrumbsForItem
      };
    });

    return itemsWithMetadata;
  }

  public search (query: string): PageTreeItem [] {
    return this.treeSearch.query(query);
  }

  // Todo: Handle selection here in central place.
  // public expandPath () {}
  // public isPathExpandend () {}
}

export { PageTree };
