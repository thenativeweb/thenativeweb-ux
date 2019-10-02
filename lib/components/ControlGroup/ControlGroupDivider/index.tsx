import { Classes } from 'jss';
import styles from './styles';
import { withStyles } from '../../../styles';
import React, { FunctionComponent, ReactElement } from 'react';

interface ControlGroupDividerProps {
  classes: Classes;
}

const ControlGroupDivider: FunctionComponent<ControlGroupDividerProps> = ({
  classes
}): ReactElement => (
  <hr
    className={ classes.ControlGroupDivider }
  />
);

export default withStyles(styles)(ControlGroupDivider);
