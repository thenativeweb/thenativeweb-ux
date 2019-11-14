import { Theme } from '../../..';
import { classNames, createUseStyles } from '../../../styles';
import { FormClassNames, styles } from './styles';
import React, { FormEvent, FunctionComponent, ReactElement } from 'react';

interface FormProps {
  className?: string;
  onSubmit?: (event: FormEvent) => void;
}

const useStyles = createUseStyles<Theme, FormClassNames>(styles);

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
    <div className={ componentClasses } onSubmit={ onSubmit }>
      { children }
    </div>
  );
};

export { Form };
