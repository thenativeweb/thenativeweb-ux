import { Classes } from 'jss';
import classNames from 'classnames';
import injectSheet from 'react-jss';
import styles from './styles';
import React, { FunctionComponent, ReactElement } from 'react';

interface ControlGroupProps {
  classes: Classes;
  className?: string;
  isVisible?: boolean;
}

const ControlGroup: FunctionComponent<ControlGroupProps> = ({
  className,
  classes,
  children,
  isVisible = true
}): ReactElement | null => {
  const componentClasses = classNames(classes.ControlGroup, className);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={ componentClasses }
    >
      { children }
    </div>
  );
};

export default injectSheet(styles)(ControlGroup);
