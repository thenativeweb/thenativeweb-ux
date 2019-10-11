import { ResponsiveSpaceFactor } from './ResponsiveSpaceFactor';

export interface ResponsiveSpaceDefinition {
  [index: string]: ResponsiveSpaceFactor | undefined;
  xs?: ResponsiveSpaceFactor;
  sm?: ResponsiveSpaceFactor;
  md?: ResponsiveSpaceFactor;
  lg?: ResponsiveSpaceFactor;
  xl?: ResponsiveSpaceFactor;
}
