import App from 'next/app';
import { Styleguide } from '../layouts/Styleguide';
import { theme } from '../theme';
import React, { ReactElement } from 'react';
import { removeServerSideStyles, ThemeProvider, Website } from '../../lib';

class CustomApp extends App {
  /* eslint-disable class-methods-use-this */
  public componentDidMount (): void {
    removeServerSideStyles();
  }
  /* eslint-enable class-methods-use-this */

  public render (): ReactElement {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={ theme }>
        <Website
          useNotifications={ true }
          useDialogs={ true }
        >
          <Styleguide>
            <Component { ...pageProps } />
          </Styleguide>
        </Website>
      </ThemeProvider>
    );
  }
}

export default CustomApp;
