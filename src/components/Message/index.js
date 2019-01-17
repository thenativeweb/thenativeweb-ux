import Icon from '../Icon';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles';
import { classNames, withStyles } from '../../styles';

const Message = ({ children, classes, isVisible, type }) => {
  const icon = type === 'default' ? null : type;

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
      { icon !== undefined ? <div className={ classes.IconContainer }><Icon className={ classes.Icon } name={ icon } /></div> : null }
      <div className={ classes.Content }>{ children }</div>
    </div>
  );
};

Message.propTypes = {
  isVisible: PropTypes.bool,
  type: PropTypes.oneOf([ 'default', 'info', 'error' ])
};

Message.defaultProps = {
  isVisible: true,
  type: 'default'
};

export default withStyles(styles)(Message);
