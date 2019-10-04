import { Classes } from 'jss';
import styles from './styles';
import { withStyles } from '../../../styles';
import React, { FunctionComponent, ReactElement } from 'react';

interface FormRowProps {
  classes: Classes;
}

const Row: FunctionComponent<FormRowProps> = ({
  children,
  classes
}): ReactElement => (
  <div className={ classes.FormRow }>{ children }</div>
);

export default withStyles(styles)(Row);
