import Brand from './Brand';
import Footer from './Footer';
import Item from './Item';
import React from 'react';
import { withStyles } from '../../styles';

const styles = theme => ({
  Sidebar: {
    position: 'relative',
    flexGrow: 0,
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'content-box',
    width: theme.components.Sidebar.width,
    background: theme.color.brand.dark,
    padding: `${theme.space(2)}px 0`
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

export default withStyles(styles)(Sidebar);
