import { PageTreeItem } from './PageTreeItem';
import { slugify } from '../../../services';

class PageTree {
  private readonly originalItem: PageTreeItem [];

  private readonly basePath: string;

  public readonly items: PageTreeItem [];

  public readonly itemsFlat: PageTreeItem [];

  public constructor ({ items, basePath = '' }: { items: PageTreeItem []; basePath?: string }) {
    this.originalItem = items;
    this.basePath = basePath;

    this.items = this.buildMetaData(this.originalItem, basePath, []);
    this.itemsFlat = this.buildFlatItems(this.items);
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

  private buildFlatItems (itemsAsTree: PageTreeItem []): PageTreeItem [] {
    const flattenedItems: PageTreeItem[] = [];

    for (const item of itemsAsTree) {
      if (item.children) {
        flattenedItems.push(...this.buildFlatItems(item.children));
      } else {
        flattenedItems.push({ ...item });
      }
    }

    return flattenedItems;
  }

  public getPageItemByPath (path: string): PageTreeItem | undefined {
    const pathWithoutTrailingSlash = path.endsWith('/') ? path.slice(0, Math.max(0, path.length - 1)) : path;
    const foundItem = this.itemsFlat.find((item): boolean => item.path === pathWithoutTrailingSlash);

    return foundItem;
  }
}

export { PageTree };
