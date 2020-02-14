import { ClassDefinitions } from '../../../styles/utils';
import { ResponsiveSpaceFactor } from '../../../types/ResponsiveSpaceFactor';
import { Styles } from 'jss';
import { Theme } from '../../..';

const spaceDependentProperties: ClassDefinitions = {
  columns ({ spaceFactor }: { spaceFactor: ResponsiveSpaceFactor }): Styles {
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
  }: { spaceFactor: ResponsiveSpaceFactor; theme: Theme }): Styles => ({
    gridColumnGap: `${theme.space(Number(spaceFactor))}px`
  }),
  rowGap: ({
    spaceFactor,
    theme
  }: { spaceFactor: ResponsiveSpaceFactor; theme: Theme }): Styles => ({
    gridRowGap: `${theme.space(Number(spaceFactor))}px`
  })
};

export { spaceDependentProperties };
