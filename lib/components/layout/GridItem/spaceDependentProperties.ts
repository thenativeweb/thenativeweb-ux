import { ClassDefinitions } from '../../../styles/utils';
import { Styles } from 'jss';

const spaceDependentProperties: ClassDefinitions = {
  columnStart: ({ spaceFactor }): Styles => ({
    gridColumnStart: spaceFactor
  }),
  columnEnd: ({ spaceFactor }): Styles => ({
    gridColumnEnd: Number(spaceFactor) + 1
  }),
  columnSpan: ({ spaceFactor }): Styles => ({
    gridColumnStart: `span ${spaceFactor}`
  })
};

export { spaceDependentProperties };
