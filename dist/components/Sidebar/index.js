import Brand from './Brand';
import Footer from './Footer';
import injectSheet from 'react-jss';
import Item from './Item';
import React from 'react';

var styles = function styles(theme) {
  return {
    Sidebar: {
      position: 'relative',
      'flex-grow': 0,
      'flex-shrink': 0,
      display: 'flex',
      'flex-direction': 'column',
      'box-sizing': 'content-box',
      width: theme.components.sidebar.width,
      background: theme.color.brand.dark,
      padding: theme.grid.stepSize * 1.5 + 'px 0'
    }
  };
};

var Sidebar = function Sidebar(_ref) {
  var children = _ref.children,
      classes = _ref.classes,
      id = _ref.id;
  return React.createElement(
    'div',
    { id: id, className: classes.Sidebar },
    children
  );
};

Sidebar.Brand = Brand;
Sidebar.Footer = Footer;
Sidebar.Item = Item;

export default injectSheet(styles)(Sidebar);