import { ButtonClassNames, styles } from './styles';
import { classNames, createUseStyles } from '../../../styles';
import { Icon, IconSize, Label, Theme } from '../../..';
import React, { CSSProperties, FunctionComponent, ReactElement } from 'react';

interface ButtonProps {
  adjust?: 'flex' | 'auto';
  autoFocus?: boolean;
  className?: string;
  icon?: string;
  iconSize?: IconSize;
  id?: string;
  isPrimary?: boolean;
  isSubtle?: boolean;
  size?: 'sm' | 'md';
  style?: CSSProperties;
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
      [classes.TypePrimary]: isPrimary,
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

Button.displayName = 'Button';

export { Button };
