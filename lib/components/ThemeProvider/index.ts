import { ThemeProvider as JssThemeProvider } from 'react-jss';
import PropTypes from 'prop-types';
import React from 'react';
import themes from '../../themes';

const ThemeProvider = ({ theme, children }) => {
  let themeForChildren;

  if (typeof theme === 'string' && themes[theme]) {
    themeForChildren = themes[theme];
  } else {
    themeForChildren = theme;
  }

  return (
    <JssThemeProvider theme={ themeForChildren || themes.thenativeweb }>{children}</JssThemeProvider>
  );
};

ThemeProvider.propTypes = {
  /** Either 'thenativeweb', 'wolkenkit' or a custom theme object. */
  theme: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ])
};

ThemeProvider.defaultProps = {
  theme: 'thenativeweb'
};

export default ThemeProvider;
