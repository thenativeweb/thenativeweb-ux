import { RootOptions } from '../RootOptions';

export interface VerifyLinksOptions extends RootOptions {
  url: string;
  sitemap?: string;
  ignore?: string;
}
