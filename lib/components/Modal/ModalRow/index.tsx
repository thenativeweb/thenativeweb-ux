import Theme from '../../../themes/Theme';
import { withStyles } from '../../../styles';
import { Classes, Styles } from 'jss';
import React, { FunctionComponent, ReactElement } from 'react';

const styles = (theme: Theme): Styles => ({
  Row: {
    display: 'flex',
    marginBottom: `${theme.space(2)}px`
  }
});

interface RowProps {
  classes: Classes;
}

const Row: FunctionComponent<RowProps> = ({
  classes,
  children
}): ReactElement => (
  <div className={ classes.Row }>{ children }</div>
);

export default withStyles(styles)(Row);
