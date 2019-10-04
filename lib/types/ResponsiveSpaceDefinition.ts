import { ResponsiveSpaceFactor } from './ResponsiveSpaceFactor';

type Sizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type ResponsiveSpaceDefinition = { [TSize in Sizes]?: ResponsiveSpaceFactor };

//
// Possible alternative to the above typing?
// export interface ResponsiveSpaceDefinition {
//   xs?: ResponsiveSpaceFactor;
//   sm?: ResponsiveSpaceFactor;
//   md?: ResponsiveSpaceFactor;
//   lg?: ResponsiveSpaceFactor;
//   xl?: ResponsiveSpaceFactor;
// }
