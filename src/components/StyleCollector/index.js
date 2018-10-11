import React from 'react';
import { JssProvider, SheetsRegistry } from 'react-jss';

const StyleCollector = ({ children, collection }) => (
  <JssProvider registry={ collection }>{children}</JssProvider>
);

StyleCollector.createCollection = function () {
  return new SheetsRegistry();
};

export default StyleCollector;
