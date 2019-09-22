import classNames from 'classnames';
import Dialogs from '../Dialogs';
import Icons from '../Icons';
import Notifications from '../Notifications';
import React from 'react';
import View from '../View';
import { createDefaultStyles, withStyles } from '../../styles';

const styles = (theme: Theme): {} => ({
  '@global': {
    ...createDefaultStyles(theme)
  },

  Application: {
    position: 'absolute !important',
    left: 0,
    top: 0,
    right: 0
  }
});

interface ApplicationProps {
  classes: { [key: string]: string | undefined };
  className: string;
  orientation: 'horizontal' | 'vertical' | 'centered';
  style: any;
}

const Application: React.FunctionComponent<ApplicationProps> = ({
  children,
  classes,
  className,
  style,
  orientation
}): JSX.Element => {
  const componentClasses = classNames(classes.Application, className);

  return (
    <View className={ componentClasses } orientation={ orientation } style={ style }>
      { children }
    </View>
  );
};

Application.defaultProps = {
  orientation: 'horizontal'
};

Application.Services = (): JSX.Element => (
  <span suppressHydrationWarning={ true }>
    <Icons />
    <Dialogs />
    <Notifications />
  </span>
);

export default withStyles(styles)(Application);
