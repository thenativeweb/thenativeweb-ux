import React from 'react';
import { ThemeProvider } from 'react-jss';
import themes from '../../themes';

export default (function (_ref) {
  var theme = _ref.theme,
      children = _ref.children;

  if (typeof theme === 'string' && themes[theme]) {
    theme = themes[theme];
  }

  return React.createElement(
    ThemeProvider,
    { theme: theme || themes.thenativeweb },
    children
  );
});