import React from 'react';
import ThemeProvider from '../components/ThemeProvider';
import tnw from '../themes/tnw';

export default props => (
  <ThemeProvider theme={ tnw }>
    { props.children }
  </ThemeProvider>
);
