import React from 'react';
import { ThemeProvider } from 'react-jss';
import themes from '../../themes';

export default ({ theme, children }) => {
  if (typeof theme === 'string' && themes[theme]) {
    theme = themes[theme];
  }

  return (
    <ThemeProvider theme={ theme || themes.tnw }>{children}</ThemeProvider>
  );
};
