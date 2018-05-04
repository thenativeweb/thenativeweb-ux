import Brand from './_Brand.jsx';
import Footer from './_Footer.jsx';
import injectSheet from 'react-jss';
import Item from './_Item.jsx';
import React from 'react';

const styles = theme => ({
  Sidebar: {
    position: 'relative',
    'flex-grow': 0,
    'flex-shrink': 0,
    display: 'flex',
    'flex-direction': 'column',
    'box-sizing': 'content-box',
    width: theme.components.sidebar.width,
    background: theme.color.brand.dark,
    padding: `${theme.grid.stepSize * 1.5}px 0`
  }
});

const Sidebar = ({ children, classes, id }) => (
  <div id={ id } className={ classes.Sidebar }>
    { children }
  </div>
);

Sidebar.Brand = Brand;
Sidebar.Footer = Footer;
Sidebar.Item = Item;

export default injectSheet(styles)(Sidebar);
