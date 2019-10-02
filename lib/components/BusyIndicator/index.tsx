import { Classes } from 'jss';
import styles from './styles';
import { classNames, withStyles } from '../../styles';
import React, { FunctionComponent, ReactElement } from 'react';

interface BusyIndicatorProps {
  classes: Classes;
  className?: string;
  isVisible?: boolean;
}

const BusyIndicator: FunctionComponent<BusyIndicatorProps> = ({
  classes,
  className,
  isVisible = true
}): ReactElement | null => {
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

export default withStyles(styles)(BusyIndicator);
