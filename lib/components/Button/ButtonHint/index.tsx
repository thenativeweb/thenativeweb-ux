import { Classes } from 'jss';
import styles from './styles';
import { withStyles } from '../../../styles';
import React, { FunctionComponent, ReactElement } from 'react';

interface ButtonHintProps {
  classes: Classes;
}

const ButtonHint: FunctionComponent<ButtonHintProps> = ({
  children,
  classes
}): ReactElement => (
  <span className={ classes.ButtonHint }>
    { children }
  </span>
);

export default withStyles(styles)(ButtonHint);
