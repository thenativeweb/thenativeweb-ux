import { CssProperties } from './CssProperties';
import { Length } from './Length';

export type NestedCssProperties = CssProperties | {
  [selector: string]: NestedCssProperties | Length | Length[] | undefined;
};
