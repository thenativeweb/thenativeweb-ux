import { spaceDependentProperties } from './spaceDependentProperties';
import { Styles } from 'jss';
import { Theme } from '../../..';
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

  ...createSpaceDependentClasses({
    theme,
    definitions: spaceDependentProperties
  }),

  ...createDefaultSpaceDependantClasses({
    theme,
    definitions: spaceDependentProperties
  }),

  [theme.breakpoints.only('xs')]: {
    ...createSpaceDependentClasses({
      theme,
      definitions: spaceDependentProperties,
      deviceSize: 'xs'
    })
  },

  [theme.breakpoints.up('sm')]: {
    ...createSpaceDependentClasses({
      theme,
      definitions: spaceDependentProperties,
      deviceSize: 'sm'
    })
  },

  [theme.breakpoints.up('md')]: {
    ...createSpaceDependentClasses({
      theme,
      definitions: spaceDependentProperties,
      deviceSize: 'md'
    })
  },

  [theme.breakpoints.up('lg')]: {
    ...createSpaceDependentClasses({
      theme,
      definitions: spaceDependentProperties,
      deviceSize: 'lg'
    })
  },

  [theme.breakpoints.up('xl')]: {
    ...createSpaceDependentClasses({
      theme,
      definitions: spaceDependentProperties,
      deviceSize: 'xl'
    })
  }
});

export { styles };
