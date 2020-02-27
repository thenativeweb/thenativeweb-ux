import { ThemeProvider as JssThemeProvider } from 'react-jss';
import { Theme } from '../../..';
import { themes } from '../../../themes';
import React, { FunctionComponent, ReactElement } from 'react';

interface ThemeProviderProps {
  theme?: Theme;
}

const ThemeProvider: FunctionComponent<ThemeProviderProps> = ({ theme = new themes.TheNativeWeb(), children }): ReactElement => (
  <JssThemeProvider theme={ theme }>{children}</JssThemeProvider>
);

ThemeProvider.displayName = 'ThemeProvider';

export { ThemeProvider };
