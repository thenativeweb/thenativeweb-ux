import Brand from './Brand';
import Footer from './Footer';
import Item from './Item';
import React from 'react';
import { withStyles } from '../../styles';

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

export default withStyles(styles)(Sidebar);
