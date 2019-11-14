import { Classes } from 'jss';
import { createUseStyles } from '../../../styles';
import { Theme } from '../../..';
import { ModalRowClassNames, styles } from './styles';
import React, { FunctionComponent, ReactElement } from 'react';

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

export { ModalRow };
