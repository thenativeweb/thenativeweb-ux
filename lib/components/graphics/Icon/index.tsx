import { classNames, createUseStyles } from '../../../styles';
import { IconClassNames, styles } from './styles';
import { IconSize, Theme } from '../../..';
import React, { CSSProperties, FunctionComponent, ReactElement } from 'react';

interface IconProps {
  name: string;
  className?: string;
  color?: 'default' | 'current' | 'highlight' | 'white';
  size?: IconSize;
  style?: CSSProperties;
  type?: 'default' | 'inline' | 'flex-auto';
}

const useStyles = createUseStyles<Theme, IconClassNames>(styles);

const Icon: FunctionComponent<IconProps> = ({
  name,
  className,
  color = 'default',
  size = 'sm',
  style,
  type = 'default'
}): ReactElement => {
  const classes = useStyles();
  const iconClassNames = classNames(
    classes.Icon,
    {
      [classes.ColorDefault]: color === 'default',
      [classes.ColorCurrent]: color === 'current',
      [classes.ColorHighlight]: color === 'highlight',
      [classes.ColorWhite]: color === 'white',
      [classes.TypeInline]: type === 'inline',
      [classes.TypeFlexAuto]: type === 'flex-auto',
      [classes.SizeXs]: size === 'xs',
      [classes.SizeSm]: size === 'sm',
      [classes.SizeMd]: size === 'md',
      [classes.SizeLg]: size === 'lg',
      [classes.SizeXl]: size === 'xl',
      [classes.SizeXxl]: size === 'xxl'
    },
    className
  );

  return (
    <svg xmlns='http://www.w3.org/2000/svg' className={ iconClassNames } role='presentational' style={ style }>
      <use xlinkHref={ `#icon-${name}` } />
    </svg>
  );
};

export { Icon };
