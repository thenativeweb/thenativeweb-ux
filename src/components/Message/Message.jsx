import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.css';

const Message = ({ children, type = 'error' }) => {
  const componentClasses = classNames(styles.Message, {
    [styles.TypeError]: type === 'error'
  });

  return (
    <div className={ componentClasses }>
      { children }
    </div>
  );
};

Message.propTypes = {
  type: PropTypes.oneOf([ 'default', 'error' ])
};

export default Message;
