import styles from './styles';
import { classNames, createUseStyles } from '../../../styles';
import React, { FunctionComponent, ReactElement } from 'react';

interface LabelProps {
  className?: string;
  id?: string;
}

const useStyles = createUseStyles(styles);

const Label: FunctionComponent<LabelProps> = function ({
  children,
  className,
  id
}): ReactElement {
  const classes = useStyles();

  return (
    <div id={ id } className={ classNames(classes.Label, className) }>
      { children }
    </div>
  );
};

export default Label;
