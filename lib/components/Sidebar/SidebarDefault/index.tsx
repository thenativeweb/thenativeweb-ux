import { Classes } from 'jss';
import styles from './styles';
import { withStyles } from '../../../styles';
import React, { FunctionComponent, ReactElement } from 'react';

interface SidebarProps {
  classes: Classes;
  id: string | undefined ;
}

const Sidebar: FunctionComponent<SidebarProps> = ({ children, classes, id }): ReactElement => (
  <div id={ id } className={ classes.Sidebar }>
    { children }
  </div>
);

export default withStyles(styles)(Sidebar);
