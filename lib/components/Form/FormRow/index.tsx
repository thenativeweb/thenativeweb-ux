import { createUseStyles } from '../../../styles';
import { Theme } from '../../..';
import { FormRowClassNames, styles } from './styles';
import React, { FunctionComponent, ReactElement } from 'react';

const useStyles = createUseStyles<Theme, FormRowClassNames>(styles);

const FormRow: FunctionComponent = ({
  children
}): ReactElement => {
  const classes = useStyles();

  return (
    <div className={ classes.FormRow }>{ children }</div>
  );
};

export { FormRow };
