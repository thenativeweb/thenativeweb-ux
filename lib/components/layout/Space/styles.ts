import { NestedCssProperties } from '../../../types/NestedCssProperties';
import { ClassDefinitions, createDefaultSpaceDependantClasses, createSpaceDependentClasses } from '../../../styles/utils';
import { ComponentClassNames, Theme } from '../../..';

const spaceDependentProperties: ClassDefinitions = {
  between: ({ spaceFactor, theme }): NestedCssProperties => ({
    '& > *': {
      marginBottom: `${theme.space(Number(spaceFactor))}px`
    },
    '& > *:last-child': {
      marginBottom: `0`
    }
  }),
  padding: ({ spaceFactor, theme }): NestedCssProperties => ({
    padding: `${theme.space(Number(spaceFactor))}px`
  }),
  paddingLeft: ({ spaceFactor, theme }): NestedCssProperties => ({
    paddingLeft: `${theme.space(Number(spaceFactor))}px`
  }),
  paddingRight: ({ spaceFactor, theme }): NestedCssProperties => ({
    paddingRight: `${theme.space(Number(spaceFactor))}px`
  }),
  paddingBottom: ({ spaceFactor, theme }): NestedCssProperties => ({
    paddingBottom: `${theme.space(Number(spaceFactor))}px`
  }),
  paddingTop: ({ spaceFactor, theme }): NestedCssProperties => ({
    paddingTop: `${theme.space(Number(spaceFactor))}px`
  }),
  paddingX: ({ spaceFactor, theme }): NestedCssProperties => ({
    paddingLeft: `${theme.space(Number(spaceFactor))}px`,
    paddingRight: `${theme.space(Number(spaceFactor))}px`
  }),
  paddingY: ({ spaceFactor, theme }): NestedCssProperties => ({
    paddingTop: `${theme.space(Number(spaceFactor))}px`,
    paddingBottom: `${theme.space(Number(spaceFactor))}px`
  })
};

const styles = (theme: Theme): ComponentClassNames<string> => ({
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
