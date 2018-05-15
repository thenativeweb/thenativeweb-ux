import classNames from 'classnames';
import Icon from '../Icon';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles';

const Message = ({ children, classes, icon, isVisible = true, type = 'info' }) => {
  const componentClasses = classNames(classes.Message, {
    [classes.TypeInfo]: type === 'info',
    [classes.TypeError]: type === 'error',
    [classes.WithIcon]: icon !== undefined
  });

  if (isVisible === false) {
    return null;
  }

  return (
    <div className={ componentClasses }>
      { icon !== undefined ? <div className={ classes.Icon }><Icon name={ icon } /></div> : null }
      <div className={ classes.Content }>{ children }</div>
    </div>
  );
};

Message.propTypes = {
  icon: PropTypes.string,
  isVisible: PropTypes.bool,
  type: PropTypes.oneOf([ 'default', 'info', 'error' ])
};

export default injectSheet(styles)(Message);
