import { CssProperties } from './CssProperties';
import { Length } from './Length';

// eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
export type NestedCssProperties = CssProperties | {
  [selector: string]: NestedCssProperties | Length | Length[] | undefined;
};
