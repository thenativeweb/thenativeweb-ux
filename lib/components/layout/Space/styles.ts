import { Styles } from 'jss';
import { Theme } from '../../../themes';
import { ClassDefinitions, createDefaultSpaceDependantClasses, createSpaceDependentClasses } from '../../../styles/utils';

const spaceDependentProperties: ClassDefinitions = {
  padding: ({ spaceFactor, theme }): Styles => ({
    padding: theme.space(Number(spaceFactor))
  }),
  paddingLeft: ({ spaceFactor, theme }): Styles => ({
    paddingLeft: theme.space(Number(spaceFactor))
  }),
  paddingRight: ({ spaceFactor, theme }): Styles => ({
    paddingRight: theme.space(Number(spaceFactor))
  }),
  paddingBottom: ({ spaceFactor, theme }): Styles => ({
    paddingBottom: theme.space(Number(spaceFactor))
  }),
  paddingTop: ({ spaceFactor, theme }): Styles => ({
    paddingTop: theme.space(Number(spaceFactor))
  }),
  paddingX: ({ spaceFactor, theme }): Styles => ({
    paddingLeft: theme.space(Number(spaceFactor)),
    paddingRight: theme.space(Number(spaceFactor))
  }),
  paddingY: ({ spaceFactor, theme }): Styles => ({
    paddingTop: theme.space(Number(spaceFactor)),
    paddingBottom: theme.space(Number(spaceFactor))
  })
};

const styles = (theme: Theme): Styles => ({
  Space: {},

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

export { styles, spaceDependentProperties };
