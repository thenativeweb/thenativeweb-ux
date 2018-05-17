import React from 'react';
import { JssProvider, SheetsRegistry } from 'react-jss';

const sheets = new SheetsRegistry();

const ServerSideProvider = ({ children }) => (
  <JssProvider registry={ sheets }>{children}</JssProvider>
);

ServerSideProvider.getStyles = function () {
  return sheets.toString();
};

export default ServerSideProvider;
