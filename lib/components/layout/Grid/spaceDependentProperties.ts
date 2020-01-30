import { ResponsiveSpaceFactor } from '../../../types/ResponsiveSpaceFactor';
import { Styles } from 'jss';
import { Theme } from '../../..';

const spaceDependentProperties = {
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
    gridColumnGap: String(theme.space(Number(spaceFactor)))
  }),
  rowGap: ({
    spaceFactor,
    theme
  }: { spaceFactor: ResponsiveSpaceFactor; theme: Theme }): Styles => ({
    gridRowGap: String(theme.space(Number(spaceFactor)))
  })
};

export { spaceDependentProperties };
