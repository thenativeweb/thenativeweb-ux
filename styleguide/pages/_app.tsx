import { NextApp } from '../../lib';
import { theme } from '../theme';
import React, { ReactElement } from 'react';

class CustomApp extends NextApp {
  public render (): ReactElement {
    const { Component, pageProps } = this.props;

    return NextApp.renderWithTheme((
      <Component { ...pageProps } />
    ), theme);
  }
}

export default CustomApp;
