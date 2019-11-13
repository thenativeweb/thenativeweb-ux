import { Classes } from 'jss';
import { createUseStyles } from '../../../styles';
import { Theme } from '../../..';
import React, { FunctionComponent, ReactElement } from 'react';
import styles, { ModalRowClassNames } from './styles';

interface ModalRowProps {
  classes: Classes;
}

const useStyles = createUseStyles<Theme, ModalRowClassNames>(styles);

const ModalRow: FunctionComponent<ModalRowProps> = ({
  children
}): ReactElement => {
  const classes = useStyles();

  return (
    <div className={ classes.ModalRow }>{ children }</div>
  );
};

export default ModalRow;
