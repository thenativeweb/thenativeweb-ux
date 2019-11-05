import React from 'react';
import ThemeProvider from '../components/ThemeProvider';
import thenativeweb from '../themes/thenativeweb';

const ThemeWrapper: React.FunctionComponent = ({ children }): JSX.Element => (
  <ThemeProvider theme={ thenativeweb }>
    { children }
  </ThemeProvider>
);

export default ThemeWrapper;
