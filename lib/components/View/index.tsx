import { Theme } from '../..';
import { classNames, createUseStyles } from '../../styles';
import React, { FunctionComponent, ReactElement, ReactNode } from 'react';
import styles, { ViewClassNames } from './styles';

interface ViewProps {
  background?: 'dark' | 'light';
  className?: string;
  children?: ReactNode;
  id?: string;
  direction?: 'horizontal' | 'vertical';
  contentPosition?: 'aligned' | 'centered';
  adaptSpaceOf?: 'content' | 'parent';
  isScrollable?: boolean;
  style?: any;
}

const useStyles = createUseStyles<Theme, ViewClassNames>(styles);

const View: FunctionComponent<ViewProps> = ({
  background = 'light',
  children,
  className,
  id,
  direction = 'horizontal',
  contentPosition = 'aligned',
  adaptSpaceOf = 'content',
  isScrollable = false,
  style
}): ReactElement => {
  const classes = useStyles();
  const componentClasses = classNames(
    classes.View,
    {
      [classes.AdaptToContent]: adaptSpaceOf === 'content',
      [classes.AdaptToParent]: adaptSpaceOf === 'parent',
      [classes.BackgroundLight]: background === 'light',
      [classes.BackgroundDark]: background === 'dark',
      [classes.ContentCenter]: contentPosition === 'centered',
      [classes.DirectionHorizontal]: direction === 'horizontal',
      [classes.DirectionVertical]: direction === 'vertical',
      [classes.ScrollableAuto]: isScrollable,
      [classes.ScrollableNone]: !isScrollable
    },
    className
  );

  return (
    <div id={ id } className={ componentClasses } style={ style }>
      { children }
    </div>
  );
};

export default View;
