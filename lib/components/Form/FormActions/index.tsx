import { Classes } from 'jss';
import styles from './styles';
import { classNames, withStyles } from '../../../styles';
import React, { FunctionComponent, ReactElement } from 'react';

interface FormActionsProps {
  classes: Classes;
  className?: string;
  type?: 'default' | 'stacked';
}

const FormActions: FunctionComponent<FormActionsProps> = ({
  children,
  classes,
  className,
  type = 'default'
}): ReactElement => {
  const componentClasses = classNames(
    classes.FormActions,
    {
      [classes.TypeDefault]: type === 'default',
      [classes.TypeStacked]: type === 'stacked'
    },
    className
  );

  return (
    <div className={ componentClasses }>{ children }</div>
  );
};

export default withStyles(styles)(FormActions);
