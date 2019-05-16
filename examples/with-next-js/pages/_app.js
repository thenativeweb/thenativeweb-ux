import React from 'react';
import { ThemeProvider } from '../../../dist';
import App, { Container } from 'next/app';

class CustomApp extends App {
  /* eslint-disable class-methods-use-this */
  componentDidMount () {
    const style = document.getElementById('server-side-styles');

    if (style) {
      style.parentNode.removeChild(style);
    }
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
