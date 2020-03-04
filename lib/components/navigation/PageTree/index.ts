import { PageTreeItem } from './PageTreeItem';
import { PageTreeItemWithMetadata } from './PageTreeItemWithMetadata';
import { slugify } from '../../../services';

class PageTree {
  private readonly originalItem: PageTreeItem [];

  private readonly basePath: string;

  public readonly items: PageTreeItemWithMetadata [];

  public readonly itemsFlat: PageTreeItemWithMetadata [];

  public constructor ({ items, basePath = '' }: { items: PageTreeItem []; basePath?: string }) {
    this.originalItem = items;
    this.basePath = basePath;

    this.items = this.buildMetaData(this.originalItem, basePath, []);
    this.itemsFlat = this.buildFlatItems(this.items);
  }

  private buildMetaData (items: PageTreeItem [], path: string, breadcrumbs: string []): PageTreeItemWithMetadata [] {
    const itemsWithMetadata = items.map((item): PageTreeItemWithMetadata => {
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
        title: item.title,
        slug,
        path: `${path}/${slug}`,
        breadcrumbs: breadcrumbsForItem,
        breadcrumbsAsString,
        keywordsAsString,
        keywords: item.keywords
      };
    });

    return itemsWithMetadata;
  }

  private buildFlatItems (itemsAsTree: PageTreeItemWithMetadata []): PageTreeItemWithMetadata [] {
    const flattenedItems: PageTreeItemWithMetadata[] = [];

    for (const item of itemsAsTree) {
      if (item.children) {
        flattenedItems.push(...this.buildFlatItems(item.children));
      } else {
        flattenedItems.push({ ...item });
      }
    }

    return flattenedItems;
  }

  public getPageItemByPath (path: string): PageTreeItemWithMetadata | undefined {
    const pathWithoutTrailingSlash = path.endsWith('/') ? path.slice(0, Math.max(0, path.length - 1)) : path;
    const foundItem = this.itemsFlat.find((item): boolean => item.path === pathWithoutTrailingSlash);

    return foundItem;
  }
}

export { PageTree };
