import { Styleguide } from '../layouts/Styleguide';
import { theme } from '../theme';
import { NextApp, Website } from '../../lib';
import React, { ReactElement } from 'react';

class CustomApp extends NextApp {
  public render (): ReactElement {
    const { Component, pageProps } = this.props;

    return NextApp.renderWithTheme((
      <Website
        useNotifications={ true }
        useDialogs={ true }
      >
        <Styleguide>
          <Component { ...pageProps } />
        </Styleguide>
      </Website>
    ), theme);
  }
}

export default CustomApp;
