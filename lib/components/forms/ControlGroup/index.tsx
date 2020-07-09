import { classNames, createUseStyles } from '../../../styles';
import { ControlGroupClassNames, styles } from './styles';
import React, { FunctionComponent, ReactElement } from 'react';

interface ControlGroupProps {
  className?: string;
  isVisible?: boolean;
}

const useStyles = createUseStyles<ControlGroupClassNames>(styles);

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

ControlGroup.displayName = 'ControlGroup';

export { ControlGroup };
