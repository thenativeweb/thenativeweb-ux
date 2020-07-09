import { classNames, createUseStyles } from '../../../styles';
import { FormActionsClassNames, styles } from './styles';
import React, { FunctionComponent, ReactElement } from 'react';

interface FormActionsProps {
  className?: string;
  type?: 'default' | 'stacked';
}

const useStyles = createUseStyles<FormActionsClassNames>(styles);

const FormActions: FunctionComponent<FormActionsProps> = ({
  children,
  className,
  type = 'default'
}): ReactElement => {
  const classes = useStyles();

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

FormActions.displayName = 'FormActions';

export { FormActions };
