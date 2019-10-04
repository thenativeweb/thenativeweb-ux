import { IconSize } from '../../Icon';
import styles from './styles';
import { Classes, Styles } from 'jss';
import { classNames, withStyles } from '../../../styles';
import { Icon, Label } from '../../..';
import React, { FunctionComponent, ReactElement } from 'react';

interface ButtonProps {
  classes: Classes;
  adjust?: 'flex' | 'auto';
  autoFocus?: boolean;
  className?: string;
  icon?: string;
  iconSize?: IconSize;
  id?: string;
  isPrimary?: boolean;
  isSubtle?: boolean;
  size?: 'sm' | 'md';
  style?: Styles;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

const Button: FunctionComponent<ButtonProps> = ({
  autoFocus = false,
  adjust = undefined,
  children,
  classes,
  className,
  id,
  icon,
  iconSize = 'md',
  onClick,
  isPrimary = false,
  isSubtle,
  size = 'md',
  style,
  type = undefined
}): ReactElement => {
  const componentClasses = classNames(
    classes.Button,
    {
      [classes.AdjustFlex]: adjust === 'flex',
      [classes.AdjustAuto]: adjust === 'auto',
      [classes.SizeSm]: size === 'sm',
      [classes.SizeMd]: size === 'md',
      [classes.TypeSubtle]: isSubtle === true,
      [classes.TypePrimary]: isPrimary === true,
      [classes.TypeIcon]: icon,
      [classes.TypeIconOnly]: icon && !children
    },
    className
  );

  const buttonType = type || (isPrimary ? 'submit' : 'button');

  /* eslint-disable react/button-has-type */
  return (
    <button
      autoFocus={ autoFocus }
      id={ id }
      type={ buttonType }
      className={ componentClasses }
      style={ style }
      onClick={ onClick }
    >
      { icon ? <Icon className={ classes.Icon } name={ icon } size={ iconSize } /> : null }
      { children ? <Label className={ classes.Label }>{ children }</Label> : null }
    </button>
  );
  /* eslint-enable react/button-has-type */
};

export default withStyles(styles)(Button);
