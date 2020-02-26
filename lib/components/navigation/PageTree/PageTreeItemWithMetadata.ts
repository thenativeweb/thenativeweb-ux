import { PageTreeItem } from './PageTreeItem';

export interface PageTreeItemWithMetadata extends PageTreeItem {
  slug: string;
  keywordsAsString?: string;
  path: string;
  children?: PageTreeItemWithMetadata [];
  breadcrumbs?: string [];
  breadcrumbsAsString?: string;
}
