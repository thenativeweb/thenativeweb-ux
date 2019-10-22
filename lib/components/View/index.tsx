import { Theme } from '../..';
import { classNames, createUseStyles } from '../../styles';
import React, { FunctionComponent, ReactElement } from 'react';
import styles, { ViewClassNames } from './styles';

interface ViewProps {
  background: 'dark' | 'light';
  className?: string;
  id?: string;
  itemsFlow: 'horizontal' | 'vertical';
  isCentered: boolean;
  isRezisable?: boolean;
  isScrollable: boolean;
  style?: any;
}

const useStyles = createUseStyles<Theme, ViewClassNames>(styles);

const View: FunctionComponent<ViewProps> = ({
  background = 'light',
  children,
  className,
  id,
  itemsFlow = 'horizontal',
  isCentered = false,
  isRezisable = true,
  isScrollable = false,
  style
}): ReactElement => {
  const classes = useStyles();
  const componentClasses = classNames(
    classes.View,
    {
      [classes.ResizeFlexible]: isRezisable,
      [classes.ResizeNone]: !isRezisable,
      [classes.BackgroundLight]: background === 'light',
      [classes.BackgroundDark]: background === 'dark',
      [classes.ContentCenter]: isCentered,
      [classes.FlowHorizontal]: itemsFlow === 'horizontal',
      [classes.FlowVertical]: itemsFlow === 'vertical',
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
