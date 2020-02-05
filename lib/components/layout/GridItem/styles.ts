import { spaceDependentProperties } from './spaceDependentProperties';
import { Styles } from 'jss';
import { Theme } from '../../..';
import { createDefaultSpaceDependantClasses, createSpaceDependentClasses } from '../../../styles/utils';

const styles = (theme: Theme): Styles => ({
  GridItem: {
    width: '100%'
  },

  ...createSpaceDependentClasses({ theme, definitions: spaceDependentProperties }),
  ...createDefaultSpaceDependantClasses({ theme, definitions: spaceDependentProperties }),

  [theme.breakpoints.up('xs')]: {
    ...createSpaceDependentClasses({ deviceSize: 'xs', theme, definitions: spaceDependentProperties })
  },
  [theme.breakpoints.up('sm')]: {
    ...createSpaceDependentClasses({ deviceSize: 'sm', theme, definitions: spaceDependentProperties })
  },
  [theme.breakpoints.up('md')]: {
    ...createSpaceDependentClasses({ deviceSize: 'md', theme, definitions: spaceDependentProperties })
  },
  [theme.breakpoints.up('lg')]: {
    ...createSpaceDependentClasses({ deviceSize: 'lg', theme, definitions: spaceDependentProperties })
  },
  [theme.breakpoints.up('xl')]: {
    ...createSpaceDependentClasses({ deviceSize: 'xl', theme, definitions: spaceDependentProperties })
  }
});

export { styles };
