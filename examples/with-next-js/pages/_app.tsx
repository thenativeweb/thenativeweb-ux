import App from 'next/app';
import React, { ReactElement } from 'react';
import { removeServerSideStyles, ThemeProvider } from '../../../lib';

class CustomApp extends App {
  /* eslint-disable class-methods-use-this */
  public componentDidMount (): void {
    removeServerSideStyles();
  }
  /* eslint-enable class-methods-use-this */

  public render (): ReactElement {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider>
        <Component { ...pageProps } />
      </ThemeProvider>
    );
  }
}

export default CustomApp;
