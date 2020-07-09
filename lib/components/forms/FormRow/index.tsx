import { createUseStyles } from '../../../styles';
import { FormRowClassNames, styles } from './styles';
import React, { FunctionComponent, ReactElement } from 'react';

const useStyles = createUseStyles<FormRowClassNames>(styles);

const FormRow: FunctionComponent = ({
  children
}): ReactElement => {
  const classes = useStyles();

  return (
    <div className={ classes.FormRow }>{ children }</div>
  );
};

FormRow.displayName = 'FormRow';

export { FormRow };
