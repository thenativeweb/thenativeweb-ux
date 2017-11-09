import Item from './Item.jsx';
import React from 'react';
import styles from './styles.css';

const Sidebar = props => (
  <div className={ styles.Sidebar }>
    { props.children }
  </div>
);

Sidebar.Item = Item;

export default Sidebar;
