import { ClassDefinitions } from '../../../styles/utils';
import { NestedCssProperties } from '../../../types/NestedCssProperties';
import { ResponsiveSpaceFactor } from '../../../types/ResponsiveSpaceFactor';
import { Theme } from '../../..';

const spaceDependentProperties: ClassDefinitions = {
  columns ({ spaceFactor }: { spaceFactor: ResponsiveSpaceFactor }): NestedCssProperties {
    if (spaceFactor === 0) {
      return {
        gridTemplateColumns: '1fr 1fr',

        '& > *': {
          gridColumn: '1 / -1'
        }
      };
    }

    return {
      gridTemplateColumns: `repeat(${spaceFactor}, [col] minmax(0, 1fr))`
    };
  },
  columnGap: ({
    spaceFactor,
    theme
  }: { spaceFactor: ResponsiveSpaceFactor; theme: Theme }): NestedCssProperties => ({
    gridColumnGap: `${theme.space(Number(spaceFactor))}px`
  }),
  rowGap: ({
    spaceFactor,
    theme
  }: { spaceFactor: ResponsiveSpaceFactor; theme: Theme }): NestedCssProperties => ({
    gridRowGap: `${theme.space(Number(spaceFactor))}px`
  })
};

export { spaceDependentProperties };
