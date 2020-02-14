import { ClassDefinitions } from '../../../styles/utils';
import { Styles } from 'jss';

const spaceDependentProperties: ClassDefinitions = {
  columnStart: ({ spaceFactor }): Styles => ({
    gridColumnStart: String(spaceFactor)
  }),
  columnEnd: ({ spaceFactor }): Styles => ({
    gridColumnEnd: String(Number(spaceFactor) + 1)
  }),
  columnSpan: ({ spaceFactor }): Styles => ({
    gridColumnStart: `span ${spaceFactor}`
  })
};

export { spaceDependentProperties };
