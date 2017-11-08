import classNames from 'classnames';
import Icon from '../Icon';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.css';

const Message = ({ children, icon, isVisible = true, type = 'info' }) => {
  const componentClasses = classNames(styles.Message, {
    [styles.TypeInfo]: type === 'info',
    [styles.TypeError]: type === 'error',
    [styles.WithIcon]: icon !== undefined
  });

  if (isVisible === false) {
    return null;
  }

  return (
    <div className={ componentClasses }>
      { icon !== undefined ? <div className={ styles.Icon }><Icon name={ icon } /></div> : null }
      <div className={ styles.Content }>{ children }</div>
    </div>
  );
};

Message.propTypes = {
  icon: PropTypes.string,
  isVisible: PropTypes.bool,
  type: PropTypes.oneOf([ 'default', 'info', 'error' ])
};

export default Message;
