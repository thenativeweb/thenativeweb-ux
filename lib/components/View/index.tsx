import { Theme } from '../..';
import { classNames, createUseStyles } from '../../styles';
import React, { FunctionComponent, ReactElement } from 'react';
import styles, { ViewClassNames } from './styles';

interface ViewProps {
  background?: 'dark' | 'light';
  className?: string;
  id?: string;
  direction?: 'horizontal' | 'vertical';
  content?: 'start' | 'center';
  isResizable?: boolean;
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
  content = 'start',
  isResizable = true,
  isScrollable = false,
  style
}): ReactElement => {
  const classes = useStyles();
  const componentClasses = classNames(
    classes.View,
    {
      [classes.ResizeFlexible]: isResizable,
      [classes.ResizeNone]: !isResizable,
      [classes.BackgroundLight]: background === 'light',
      [classes.BackgroundDark]: background === 'dark',
      [classes.ContentCenter]: content === 'center',
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
