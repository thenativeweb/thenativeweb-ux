import ApplicationServices from '../components/ApplicationServices';
import React from 'react';
import ThemeProvider from '../components/ThemeProvider';
import thenativeweb from '../themes/thenativeweb';

let isFirstRender = true;

const ThemeWrapper: React.FunctionComponent = ({ children }): JSX.Element => {
  const Services = isFirstRender ? ApplicationServices : React.Fragment;

  isFirstRender = false;

  return (
    <ThemeProvider theme={ thenativeweb }>
      <React.Fragment>
        <Services />
        { children }
      </React.Fragment>
    </ThemeProvider>
  );
};

export default ThemeWrapper;
