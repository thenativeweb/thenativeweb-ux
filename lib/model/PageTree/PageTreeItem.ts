export interface PageTreeItem {
  title: string;
  slug?: string;
  keywords?: undefined | string [];
  path?: string;
  children?: PageTreeItem [];
  breadcrumbs?: string [];
}
