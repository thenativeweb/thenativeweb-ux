import React from 'react';
import { ThemeProvider } from 'react-jss';
import tnw from '../../themes/tnw';

export default ({ theme, children }) => (<ThemeProvider theme={ theme || tnw }>{children}</ThemeProvider>);
