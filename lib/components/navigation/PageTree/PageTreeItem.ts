export interface PageTreeItem {
  title: string;
  slug?: string;
  keywords?: string [];
  keywordsAsString?: string;
  path?: string;
  children?: PageTreeItem [];
  breadcrumbs?: string [];
  breadcrumbsAsString?: string;
}
