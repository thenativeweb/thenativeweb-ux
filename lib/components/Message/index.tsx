import { Classes } from 'jss';
import Icon from '../Icon';
import styles from './styles';
import { classNames, withStyles } from '../../styles';
import React, { FunctionComponent, ReactElement } from 'react';

interface MessageProps {
  classes: Classes;
  isVisible?: boolean;
  type?: 'default' | 'info' | 'error';
}

const Message: FunctionComponent<MessageProps> = ({
  children,
  classes,
  isVisible = true,
  type = 'default'
}): ReactElement | null => {
  let iconName;

  if (type !== 'default') {
    iconName = type;
  }

  const componentClasses = classNames(classes.Message, {
    [classes.TypeInfo]: type === 'info',
    [classes.TypeError]: type === 'error',
    [classes.WithIcon]: iconName
  });

  if (isVisible === false) {
    return null;
  }

  return (
    <div className={ componentClasses }>
      {
        iconName ?
          <div className={ classes.IconContainer }><Icon className={ classes.Icon } name={ iconName } /></div> :
          null
      }
      <div className={ classes.Content }>{ children }</div>
    </div>
  );
};

export default withStyles(styles)(Message);
