import classNames from 'classnames';
import Divider from './Divider';
import injectSheet from 'react-jss';
import Item from './Item';
import PropTypes from 'prop-types';
import React from 'react';

const styles = {
  ControlGroup: {
    display: 'flex',
    marginBottom: '18px'
  }
};

const ControlGroup = ({ className, classes, children, isVisible = true }) => {
  const componentClasses = classNames(classes.ControlGroup, className);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={ componentClasses }
    >
      { children }
    </div>
  );
};

ControlGroup.Divider = Divider;
ControlGroup.Item = Item;

ControlGroup.propTypes = {
  isVisible: PropTypes.bool
};

export default injectSheet(styles)(ControlGroup);
