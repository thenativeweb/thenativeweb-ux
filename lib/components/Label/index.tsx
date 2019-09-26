import styles from './styles';
import { classNames, withStyles } from '../../styles';
import React, { FunctionComponent, ReactElement } from 'react';

interface LabelProps {
  classes: { [key: string]: string };
  className?: string;
  id?: string;
}

const Label: FunctionComponent<LabelProps> = function ({
  children,
  classes,
  className,
  id
}): ReactElement {
  return (
    <div id={ id } className={ classNames(classes.Label, className) }>
      { children }
    </div>
  );
};

export default withStyles(styles)(Label);
