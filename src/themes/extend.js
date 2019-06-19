import merge from 'lodash/merge';
import thenativeweb from './thenativeweb';
import wolkenkit from './wolkenkit';

const extend = function (themeName, customProperties = {}) {
  if (!themeName) {
    throw new Error('Theme name is missing.');
  }

  let baseTheme;

  switch (themeName) {
    case 'thenativeweb':
      baseTheme = thenativeweb;
      break;
    case 'wolkenkit':
      baseTheme = wolkenkit;
      break;
    default:
      throw new Error('Unkown base theme.');
  }

  const customTheme = merge({}, baseTheme, customProperties);

  return customTheme;
};

export default extend;
