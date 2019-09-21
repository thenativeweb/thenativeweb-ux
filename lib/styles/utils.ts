import { merge } from 'lodash';
import { Theme } from '../themes/Theme';

const createSpaceDependentClasses = function (
  theme: Theme,
  definitions: {},
  deviceSize = '',
  maximumSpaceFactor = 16
): { [key: string]: string | undefined } {
  const classes = {};

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

const createDefaultSpaceDependantClasses = function (theme: Theme, definitions = {}) {
  const emptySpaceProperties = {};

  for (const propertyName of Object.keys(definitions)) {
    emptySpaceProperties[propertyName] = {};
  }

  let classes = {};

  for (const deviceSize of [ 'xs', 'sm', 'md', 'lg', 'xl' ]) {
    classes = merge({}, classes, createSpaceDependentClasses({
      deviceSize,
      theme,
      definitions: emptySpaceProperties
    }));
  }

  return classes;
};

const getSpaceDependentClassNamesFromProps = function (props, classes, definitions) {
  const responsiveClassNames = [];

  for (const propertyName of Object.keys(definitions)) {
    const propertyValue = props[propertyName];

    switch (typeof propertyValue) {
      case 'string':
      case 'number':
        responsiveClassNames.push(classes[`-${propertyName}-${propertyValue}`]);
        break;
      case 'object':
        for (const sizeId of Object.keys(propertyValue)) {
          responsiveClassNames.push(classes[`${sizeId}-${propertyName}-${propertyValue[sizeId]}`]);
        }
        break;
      default:
        break;
    }
  }

  return responsiveClassNames;
};

export {
  createDefaultSpaceDependantClasses,
  createSpaceDependentClasses,
  getSpaceDependentClassNamesFromProps
};
