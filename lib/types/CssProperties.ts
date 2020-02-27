import { Length } from './Length';
import * as CSS from 'csstype';

export interface CssProperties extends CSS.StandardPropertiesFallback<Length>, CSS.SvgPropertiesFallback<Length>{}
