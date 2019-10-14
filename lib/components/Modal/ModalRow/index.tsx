import { createUseStyles } from '../../../styles';
import { Theme } from '../../..';
import { Classes, Styles } from 'jss';
import React, { FunctionComponent, ReactElement } from 'react';

const styles = (theme: Theme): Styles<'ModalRow'> => ({
  ModalRow: {
    display: 'flex',
    marginBottom: `${theme.space(2)}px`
  }
});

interface ModalRowProps {
  classes: Classes;
}

const useStyles = createUseStyles<Theme, 'ModalRow'>(styles);

const ModalRow: FunctionComponent<ModalRowProps> = ({
  children
}): ReactElement => {
  const classes = useStyles();

  return (
    <div className={ classes.ModalRow }>{ children }</div>
  );
};

export default ModalRow;
