import React from 'react';
import styles from './styles';
import { classNames, withStyles } from '../../styles';

interface ViewProps {
  adjust: 'auto' | 'flex';
  alignItems: 'center';
  background: 'dark' | 'light';
  classes: { [key: string]: string | undefined };
  className: string;
  id: string;
  justifyContent: 'center';
  orientation: 'horizontal' | 'vertical' | 'centered';
  scrollable: false | 'auto';
  style: any;
}

const View: React.FunctionComponent<ViewProps> = ({
  adjust,
  alignItems,
  background,
  children,
  classes,
  className,
  id,
  justifyContent,
  scrollable,
  style,
  orientation
}): JSX.Element => {
  const viewClassNames = classNames(
    classes.View,
    {
      [classes.AdjustAuto]: adjust === 'auto',
      [classes.AdjustFlex]: adjust === 'flex',
      /* eslint-disable @typescript-eslint/no-unnecessary-condition */
      [classes.AlignItemsCenter]: alignItems === 'center',
      /* eslint-enable @typescript-eslint/no-unnecessary-condition */
      [classes.BackgroundLight]: background === 'light',
      [classes.BackgroundDark]: background === 'dark',
      /* eslint-disable @typescript-eslint/no-unnecessary-condition */
      [classes.JustifyContentCenter]: justifyContent === 'center',
      /* eslint-enable @typescript-eslint/no-unnecessary-condition */
      [classes.OrientationCentered]: orientation === 'centered',
      [classes.OrientationHorizontal]: orientation === 'horizontal',
      [classes.OrientationVertical]: orientation === 'vertical',
      [classes.ScrollableAuto]: scrollable === 'auto'
    },
    className
  );

  return (
    <div id={ id } className={ viewClassNames } style={ style }>
      { children }
    </div>
  );
};

export default withStyles(styles)(View);
