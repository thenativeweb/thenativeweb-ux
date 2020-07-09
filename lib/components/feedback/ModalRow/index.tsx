import { createUseStyles } from '../../../styles';
import { ModalRowClassNames, styles } from './styles';
import React, { FunctionComponent, ReactElement } from 'react';

const useStyles = createUseStyles<ModalRowClassNames>(styles);

const ModalRow: FunctionComponent = ({
  children
}): ReactElement => {
  const classes = useStyles();

  return (
    <div className={ classes.ModalRow }>{ children }</div>
  );
};

ModalRow.displayName = 'ModalRow';

export { ModalRow };
