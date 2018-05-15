import Application from '../components/Application';
import React from 'react';
import ThemeProvider from '../components/ThemeProvider';
import thenativeweb from '../themes/thenativeweb';

var isFirstRender = true;

export default (function (props) {
  var Services = isFirstRender ? Application.Services : React.Fragment;

  isFirstRender = false;

  return React.createElement(
    ThemeProvider,
    { theme: thenativeweb },
    React.createElement(
      React.Fragment,
      null,
      React.createElement(Services, null),
      props.children
    )
  );
});