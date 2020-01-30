import App from 'next/app';
import React, { ReactElement } from 'react';
import { removeServerSideStyles, Theme, ThemeProvider } from '.';

class NextApp extends App {
  /* eslint-disable class-methods-use-this */
  public componentDidMount (): void {
    removeServerSideStyles();
  }
  /* eslint-enable class-methods-use-this */

  public static renderWithTheme (children: ReactElement, theme: Theme): ReactElement {
    return (
      <ThemeProvider theme={ theme }>
        { children }
      </ThemeProvider>
    );
  }
}

export { NextApp };
