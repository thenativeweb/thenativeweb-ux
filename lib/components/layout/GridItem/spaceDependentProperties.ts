import { ClassDefinitions } from '../../../styles/utils';
import { NestedCssProperties } from '../../../types/NestedCssProperties';

const spaceDependentProperties: ClassDefinitions = {
  columnStart: ({ spaceFactor }): NestedCssProperties => ({
    gridColumnStart: String(spaceFactor)
  }),
  columnEnd: ({ spaceFactor }): NestedCssProperties => ({
    gridColumnEnd: String(Number(spaceFactor) + 1)
  }),
  columnSpan: ({ spaceFactor }): NestedCssProperties => ({
    gridColumnStart: `span ${spaceFactor}`
  })
};

export { spaceDependentProperties };
