import { createUseStyles } from '../../../styles';
import { Theme } from '../../..';
import React, { FunctionComponent, ReactElement } from 'react';
import styles, { FormRowClassNames } from './styles';

const useStyles = createUseStyles<Theme, FormRowClassNames>(styles);

const FormRow: FunctionComponent = ({
  children
}): ReactElement => {
  const classes = useStyles();

  return (
    <div className={ classes.FormRow }>{ children }</div>
  );
};

export default FormRow;
