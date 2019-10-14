import { ResponsiveSpaceFactor } from '../../../types/ResponsiveSpaceFactor';
import { Styles } from 'jss';
import { Theme } from '../../..';

const spaceDependentProperties = {
  columns ({ spaceFactor }: { spaceFactor: ResponsiveSpaceFactor }): Styles {
    if (spaceFactor === 0) {
      return {
        'grid-template-columns': '1fr 1fr',

        '& > *': {
          'grid-column': '1 / -1'
        }
      };
    }

    return {
      'grid-template-columns': `repeat(${spaceFactor}, [col] minmax(0, 1fr))`
    };
  },
  columnGap: ({
    spaceFactor,
    theme
  }: { spaceFactor: ResponsiveSpaceFactor; theme: Theme }): Styles => ({
    'grid-column-gap': theme.space(Number(spaceFactor))
  }),
  rowGap: ({
    spaceFactor,
    theme
  }: { spaceFactor: ResponsiveSpaceFactor; theme: Theme }): Styles => ({
    'grid-row-gap': theme.space(Number(spaceFactor))
  })
};

export default spaceDependentProperties;
