import { Classes } from 'jss';
import styles from './styles';
import { withStyles } from '../../../styles';
import React, { FunctionComponent, ReactElement } from 'react';

interface SidebarBrandProps {
  classes: Classes;
}

const SidebarBrand: FunctionComponent<SidebarBrandProps> = ({ children, classes }): ReactElement => (
  <div className={ classes.Brand }>
    { children }
  </div>
);

export default withStyles(styles)(SidebarBrand);
