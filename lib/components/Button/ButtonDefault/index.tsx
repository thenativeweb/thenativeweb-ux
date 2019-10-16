import { IconSize } from '../../Icon';
import { Styles } from 'jss';
import { classNames, createUseStyles } from '../../../styles';
import { Icon, Label, Theme } from '../../..';
import React, { FunctionComponent, ReactElement } from 'react';
import styles, { ButtonClassNames } from './styles';

interface ButtonProps {
  adjust?: 'flex' | 'auto' | undefined;
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
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const useStyles = createUseStyles<Theme, ButtonClassNames>(styles);

const Button: FunctionComponent<ButtonProps> = ({
  autoFocus = false,
  adjust,
  children,
  className,
  id,
  icon,
  iconSize = 'md',
  onClick = (): void => {
    // Intentionally left blank.
  },
  isPrimary = false,
  isSubtle,
  size = 'md',
  style,
  type = 'button'
}): ReactElement => {
  const classes = useStyles();

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

  let buttonType = type;

  if (isPrimary) {
    buttonType = 'submit';
  }

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
      { children ? <Label>{ children }</Label> : null }
    </button>
  );
  /* eslint-enable react/button-has-type */
};

export default Button;
