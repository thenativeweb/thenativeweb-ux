import { NestedCssProperties } from './NestedCssProperties';

export type ComponentClassNames<TClassNames extends string> = Record<TClassNames, NestedCssProperties>;
