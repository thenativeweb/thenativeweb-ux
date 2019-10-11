import spaceDependentProperties from './spaceDependentProperties';
import { Styles } from 'jss';
import Theme from '../../../themes/Theme';
import {
  createDefaultSpaceDependantClasses,
  createSpaceDependentClasses
} from '../../../styles/utils';

export type GridDefaultClassNames = 'Grid';

const styles = (theme: Theme): Styles<GridDefaultClassNames> => ({
  Grid: {
    width: '100%',
    display: 'grid'
  },

  ...createSpaceDependentClasses(theme, spaceDependentProperties),
  ...createDefaultSpaceDependantClasses(theme, spaceDependentProperties),

  [theme.breakpoints.only('xs')]: {
    ...createSpaceDependentClasses(theme, spaceDependentProperties, 'xs')
  },

  [theme.breakpoints.up('sm')]: {
    ...createSpaceDependentClasses(theme, spaceDependentProperties, 'sm')
  },

  [theme.breakpoints.up('md')]: {
    ...createSpaceDependentClasses(theme, spaceDependentProperties, 'md')
  },

  [theme.breakpoints.up('lg')]: {
    ...createSpaceDependentClasses(theme, spaceDependentProperties, 'lg')
  },

  [theme.breakpoints.up('xl')]: {
    ...createSpaceDependentClasses(theme, spaceDependentProperties, 'xl')
  }
});

export default styles;
