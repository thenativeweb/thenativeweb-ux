import { Styles } from 'jss';
import { Theme } from '../../../themes';
import { ClassDefinitions, createDefaultSpaceDependantClasses, createSpaceDependentClasses } from '../../../styles/utils';

const spaceDependentProperties: ClassDefinitions = {
  padding: ({ spaceFactor, theme }): Styles => ({
    padding: `${theme.space(Number(spaceFactor))}px`
  }),
  paddingLeft: ({ spaceFactor, theme }): Styles => ({
    paddingLeft: `${theme.space(Number(spaceFactor))}px`
  }),
  paddingRight: ({ spaceFactor, theme }): Styles => ({
    paddingRight: `${theme.space(Number(spaceFactor))}px`
  }),
  paddingBottom: ({ spaceFactor, theme }): Styles => ({
    paddingBottom: `${theme.space(Number(spaceFactor))}px`
  }),
  paddingTop: ({ spaceFactor, theme }): Styles => ({
    paddingTop: `${theme.space(Number(spaceFactor))}px`
  }),
  paddingX: ({ spaceFactor, theme }): Styles => ({
    paddingLeft: `${theme.space(Number(spaceFactor))}px`,
    paddingRight: `${theme.space(Number(spaceFactor))}px`
  }),
  paddingY: ({ spaceFactor, theme }): Styles => ({
    paddingTop: `${theme.space(Number(spaceFactor))}px`,
    paddingBottom: `${theme.space(Number(spaceFactor))}px`
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
