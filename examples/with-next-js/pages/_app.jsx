import React from 'react';
import App, { Container } from 'next/app';
import { removeServerSideStyles, ThemeProvider } from 'thenativeweb-ux';

class CustomApp extends App {
  /* eslint-disable class-methods-use-this */
  componentDidMount () {
    removeServerSideStyles();
  }
  /* eslint-enable class-methods-use-this */

  render () {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider>
        <Container>
          <Component { ...pageProps } />
        </Container>
      </ThemeProvider>
    );
  }
}

export default CustomApp;
