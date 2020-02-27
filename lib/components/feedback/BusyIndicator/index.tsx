import { Theme } from '../../..';
import { BusyIndicatorClassNames, styles } from './styles';
import { classNames, createUseStyles } from '../../../styles';
import React, { FunctionComponent, ReactElement } from 'react';

interface BusyIndicatorProps {
  className?: string;
  isVisible?: boolean;
}

const useStyles = createUseStyles<Theme, BusyIndicatorClassNames>(styles);

const BusyIndicator: FunctionComponent<BusyIndicatorProps> = ({
  className,
  isVisible = true
}): ReactElement | null => {
  const classes = useStyles();

  if (!isVisible) {
    return null;
  }

  return (
    <div className={ classNames(classes.BusyIndicator, className) }>
      <div className={ classNames(classes.Pulse, classes.Pulse1) } />
      <div className={ classNames(classes.Pulse, classes.Pulse2) } />
      <div className={ classNames(classes.Pulse, classes.Pulse3) } />
    </div>
  );
};

BusyIndicator.displayName = 'BusyIndicator';

export { BusyIndicator };
