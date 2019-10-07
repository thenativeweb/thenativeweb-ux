import { Classes } from 'jss';
import styles from './styles';
import { withStyles } from '../../../styles';
import React, { FunctionComponent, ReactElement } from 'react';

interface SidebarFooterProps {
  classes: Classes;
}

const SidebarFooter: FunctionComponent<SidebarFooterProps> = ({ children, classes }): ReactElement => (
  <div className={ classes.Footer }>
    { children }
  </div>
);

export default withStyles(styles)(SidebarFooter);
