import { classNames, createUseStyles } from '../../../styles';
import { Icon, Theme } from '../../..';
import { MessageClassNames, styles } from './styles';
import React, { FunctionComponent, ReactElement } from 'react';

interface MessageProps {
  isVisible?: boolean;
  type?: 'default' | 'info' | 'error';
  id?: string;
}

const useStyles = createUseStyles<Theme, MessageClassNames>(styles);

const Message: FunctionComponent<MessageProps> = ({
  children,
  id,
  isVisible = true,
  type = 'default'
}): ReactElement | null => {
  const classes = useStyles();

  let iconName;

  if (type !== 'default') {
    iconName = type;
  }

  const componentClasses = classNames(classes.Message, {
    [classes.TypeInfo]: type === 'info',
    [classes.TypeError]: type === 'error',
    [classes.WithIcon]: iconName
  });

  if (!isVisible) {
    return null;
  }

  return (
    <div id={ id } className={ componentClasses }>
      {
        iconName ?
          <div className={ classes.IconContainer }><Icon className={ classes.Icon } name={ iconName } /></div> :
          null
      }
      <div className={ classes.Content }>{ children }</div>
    </div>
  );
};

export { Message };
