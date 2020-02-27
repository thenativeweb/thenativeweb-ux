import { CssProperties } from './CssProperties';
import { Length } from './Length';

export interface NestedCssProperties extends CssProperties {
  [selector: string]: NestedCssProperties | Length | Length[] | undefined;
}
