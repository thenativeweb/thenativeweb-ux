import { CssProperties } from './CssProperties';
import { TLength } from './TLength';

export interface NestedCssProperties extends CssProperties {
  [selector: string]: NestedCssProperties | TLength | TLength[] | undefined;
}
