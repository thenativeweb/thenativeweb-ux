import { classNames, createUseStyles } from '../../../styles';
import { FormClassNames, styles } from './styles';
import React, { FormEvent, FunctionComponent, ReactElement } from 'react';

interface FormProps {
  className?: string;
  onSubmit?: (event: FormEvent) => void;
}

const useStyles = createUseStyles<FormClassNames>(styles);

const Form: FunctionComponent<FormProps> = ({
  children,
  className,
  onSubmit = (): void => {
    // Intentionally left blank.
  }
}): ReactElement => {
  const classes = useStyles();
  const componentClasses = classNames(classes.Form, className);

  return (
    <form className={ componentClasses } onSubmit={ onSubmit }>
      { children }
    </form>
  );
};

Form.displayName = 'Form';

export { Form };
