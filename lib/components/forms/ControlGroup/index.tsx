import { Theme } from '../../..';
import { classNames, createUseStyles } from '../../../styles';
import React, { FunctionComponent, ReactElement } from 'react';
import styles, { ControlGroupClassNames } from './styles';

interface ControlGroupProps {
  className?: string;
  isVisible?: boolean;
}

const useStyles = createUseStyles<Theme, ControlGroupClassNames>(styles);

const ControlGroup: FunctionComponent<ControlGroupProps> = ({
  className,
  children,
  isVisible = true
}): ReactElement | null => {
  const classes = useStyles();
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

export default ControlGroup;
