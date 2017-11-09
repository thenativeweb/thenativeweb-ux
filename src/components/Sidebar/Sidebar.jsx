import Item from './_Item.jsx';
import React from 'react';
import styles from './styles.css';

const Brand = props => (
  <div className={ styles.Brand }>
    { props.children }
  </div>
);

const Sidebar = props => (
  <div className={ styles.Sidebar }>
    { props.children }
  </div>
);

Sidebar.Brand = Brand;
Sidebar.Item = Item;

export default Sidebar;
