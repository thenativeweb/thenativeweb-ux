import merge from 'lodash/merge';
import { ResponsiveSpaceFactor } from '../types/ResponsiveSpaceFactor';
import { ResponsiveSpaceProp } from '../types/ResponsiveSpaceProp';
import { Styles } from 'jss';
import { Theme } from '../themes/Theme';

type CssAttributesFunction = ({ spaceFactor, theme }: { spaceFactor: ResponsiveSpaceFactor; theme: Theme }) => Styles;
export type ClassDefinitions = Partial<{ [key: string]: {} | CssAttributesFunction }>;

const createSpaceDependentClasses = function ({
  theme,
  definitions,
  deviceSize = '',
  maximumSpaceFactor = 16
}: {
  theme: Theme;
  definitions: ClassDefinitions;
  deviceSize?: string;
  maximumSpaceFactor?: number;
}): { [key: string]: string | undefined } {
  const classes: Partial<{ [key: string]: string | undefined }> = {};

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
}): { [key: string]: string | undefined } {
  const emptySpaceProperties: ClassDefinitions = {};

  for (const propertyName of Object.keys(definitions)) {
    emptySpaceProperties[propertyName] = {};
  }

  let classes: Partial<{ [key: string]: string | undefined }> = {};

  for (const deviceSize of [ 'xs', 'sm', 'md', 'lg', 'xl' ]) {
    classes = merge({}, classes, createSpaceDependentClasses({
      theme,
      definitions: emptySpaceProperties,
      deviceSize
    }));
  }

  return classes;
};

const getSpaceDependentClassNamesFromProps = function ({
  props,
  definitions,
  classes
}: {
  props: Partial<{ [ key: string ]: ResponsiveSpaceProp }>;
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
