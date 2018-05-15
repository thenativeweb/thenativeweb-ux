import Application from '../components/Application';
import React from 'react';
import ThemeProvider from '../components/ThemeProvider';
import thenativeweb from '../themes/thenativeweb';

let isFirstRender = true;

export default props => {
  const Services = isFirstRender ? Application.Services : React.Fragment;

  isFirstRender = false;

  return (
    <ThemeProvider theme={ thenativeweb }>
      <React.Fragment>
        <Services />
        { props.children }
      </React.Fragment>
    </ThemeProvider>
  );
};
