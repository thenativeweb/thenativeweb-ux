import styles from './styles';
import { Classes, Styles } from 'jss';
import { classNames, withStyles } from '../../styles';
import React, { FunctionComponent, ReactElement } from 'react';

interface TextProps {
  adjust: 'flex' | 'auto';
  breakLines: boolean;
  classes: Classes;
  className: string;
  id: string | undefined;
  size: 'sm' | 'md';
  style: Styles;
}

const Text: FunctionComponent<TextProps> = ({
  adjust = 'auto',
  breakLines = false,
  classes,
  className,
  children,
  id,
  size = 'md',
  style
}): ReactElement => {
  const componentClasses = classNames(
    classes.Text,
    {
      [classes.BreakLines]: breakLines,
      [classes.AdjustFlex]: adjust === 'flex',
      [classes.AdjustAuto]: adjust === 'auto',
      [classes.SizeSm]: size === 'sm',
      [classes.SizeMd]: size === 'md'
    },
    className
  );

  return (
    <div id={ id } className={ componentClasses } style={ style }>
      { children }
    </div>
  );
};

export default withStyles(styles)(Text);
