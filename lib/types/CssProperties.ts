import { TLength } from './TLength';
import * as CSS from 'csstype';

export interface CssProperties extends CSS.StandardPropertiesFallback<TLength>, CSS.SvgPropertiesFallback<TLength>{}
