import { Classes } from 'jss';
import styles from './styles';
import { classNames, withStyles } from '../../../styles';
import React, { FormEvent, FunctionComponent, ReactElement } from 'react';

interface FormProps {
  classes: Classes;
  className?: string;
  onSubmit?: (event: FormEvent) => void;
}

const Form: FunctionComponent<FormProps> = ({
  children,
  classes,
  className,
  onSubmit = (): void => {
    // Intentionally left blank.
  }
}): ReactElement => {
  const componentClasses = classNames(classes.Form, className);

  return (
    <div className={ componentClasses } onSubmit={ onSubmit }>
      { children }
    </div>
  );
};

export default withStyles(styles)(Form);
