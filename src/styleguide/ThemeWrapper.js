import ThemeProvider from '../components/ThemeProvider';
import tnw from '../themes/tnw';
import React, { Component } from 'react';

export default class ThemeWrapper extends Component {
  render () {
    return (
      <ThemeProvider theme={tnw}>
        { this.props.children }
      </ThemeProvider>
    )
  }
};
