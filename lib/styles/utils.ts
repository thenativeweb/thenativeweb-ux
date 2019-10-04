import { Classes } from 'jss';
import { merge } from 'lodash';
import { ResponsiveSpaceProp } from '../types/ResponsiveSpaceProp';
import Theme from '../themes/Theme';

type CssAttributesFunction = (spaceFactor: number, theme: Theme) => string;

const createSpaceDependentClasses = function (
  theme: Theme,
  definitions: { [key: string]: string | {} | CssAttributesFunction | undefined },
  deviceSize = '',
  maximumSpaceFactor = 16
): { [key: string]: string | undefined } {
  const classes: Partial<{ [key: string]: string | undefined }> = {};

  for (let spaceFactor = 0; spaceFactor < maximumSpaceFactor; spaceFactor++) {
    for (const propertyName of Object.keys(definitions)) {
      const cssAttributes = definitions[propertyName];
      const className = `${deviceSize}-${propertyName}-${spaceFactor}`;

      classes[className] = typeof cssAttributes === 'function' ?
        cssAttributes(spaceFactor, theme) :
        cssAttributes;
    }
  }

  return classes;
};

const createDefaultSpaceDependantClasses = function (
  theme: Theme,
  definitions = {}
): { [key: string]: string | undefined } {
  const emptySpaceProperties: Partial<{ [key: string]: string | {} | CssAttributesFunction | undefined }> = {};

  for (const propertyName of Object.keys(definitions)) {
    emptySpaceProperties[propertyName] = {};
  }

  let classes: Partial<{ [key: string]: string | undefined }> = {};

  for (const deviceSize of [ 'xs', 'sm', 'md', 'lg', 'xl' ]) {
    classes = merge({}, classes, createSpaceDependentClasses(
      theme,
      emptySpaceProperties,
      deviceSize,
    ));
  }

  return classes;
};

const getSpaceDependentClassNamesFromProps = function (
  props: { [key: string]: ResponsiveSpaceProp },
  definitions: { [key: string]: string | {} | CssAttributesFunction | undefined },
  classes: Classes,
): string[] {
  const responsiveClassNames = [];

  for (const propertyName of Object.keys(definitions)) {
    const propertyValue = props[propertyName];

    if (typeof propertyValue === 'string' || typeof propertyValue === 'number') {
      responsiveClassNames.push(classes[`-${propertyName}-${propertyValue}`]);
    } else {
      for (const sizeId of Object.keys(propertyValue)) {
        if (typeof sizeId === 'string') {
          responsiveClassNames.push(classes[`${sizeId}-${propertyName}-${propertyValue[sizeId]}`]);
        }
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
