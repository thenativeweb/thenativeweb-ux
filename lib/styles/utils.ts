import { NestedCssProperties } from '../types/NestedCssProperties';
import { ResponsiveSpaceFactor } from '../types/ResponsiveSpaceFactor';
import { ResponsiveSpaceProp } from '../types/ResponsiveSpaceProp';
import { Theme } from '..';

type CssAttributesFunction = ({ spaceFactor, theme }: { spaceFactor: ResponsiveSpaceFactor; theme: Theme }) => NestedCssProperties;
export type ClassDefinitions = Partial<Record<string, Record<string, any> | CssAttributesFunction>>;

const createSpaceDependentClasses = function ({
  theme,
  definitions,
  deviceSize = '',
  maximumSpaceFactor = 17
}: {
  theme: Theme;
  definitions: ClassDefinitions;
  deviceSize?: string;
  maximumSpaceFactor?: number;
}): Record<string, string | undefined> {
  const classes: Partial<Record<string, string | undefined>> = {};

  for (let spaceFactor = 0; spaceFactor < maximumSpaceFactor; spaceFactor++) {
    for (const propertyName of Object.keys(definitions)) {
      const cssAttributes = definitions[propertyName];
      const className = `${deviceSize}-${propertyName}-${spaceFactor}`;

      classes[className] = typeof cssAttributes === 'function' ?
        cssAttributes({ spaceFactor, theme }) :
        cssAttributes;
    }
  }

  return classes;
};

const createDefaultSpaceDependantClasses = function ({
  theme,
  definitions = {}
}: {
  theme: Theme;
  definitions: ClassDefinitions;
}): Record<string, string | undefined> {
  const emptySpaceProperties: ClassDefinitions = {};

  for (const propertyName of Object.keys(definitions)) {
    emptySpaceProperties[propertyName] = {};
  }

  let classes: Partial<Record<string, string | undefined>> = {};

  for (const deviceSize of [ 'xs', 'sm', 'md', 'lg', 'xl' ]) {
    classes = {
      ...classes,
      ...createSpaceDependentClasses({
        theme,
        definitions: emptySpaceProperties,
        deviceSize
      })
    };
  }

  return classes;
};

const getSpaceDependentClassNamesFromProps = function ({
  props,
  definitions,
  classes
}: {
  props: Partial<Record<string, ResponsiveSpaceProp>>;
  definitions: ClassDefinitions;
  classes: any;
}): string[] {
  const responsiveClassNames = [];

  for (const propertyName of Object.keys(definitions)) {
    const propertyValue = props[propertyName];

    if (typeof propertyValue === 'string' || typeof propertyValue === 'number') {
      responsiveClassNames.push(classes[`-${propertyName}-${propertyValue}`]);
    } else {
      if (!propertyValue) {
        continue;
      }

      for (const [ sizeKey, sizeValue ] of Object.entries(propertyValue)) {
        responsiveClassNames.push(classes[`${sizeKey}-${propertyName}-${sizeValue}`]);
      }
    }
  }

  return responsiveClassNames;
};

export {
  createDefaultSpaceDependantClasses,
  createSpaceDependentClasses,
  getSpaceDependentClassNamesFromProps
};
