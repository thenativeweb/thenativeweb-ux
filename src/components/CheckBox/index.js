import classNames from 'classnames';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import React from 'react';

const styles = theme => ({
  CheckBox: {
    'font-family': theme.font.family.default
  }
});

const CheckBox = ({ checked, classes, className, id, name, onChange }) => {
  const componentClasses = classNames(classes.CheckBox, className);

  return (
    <input
      id={ id }
      className={ componentClasses }
      name={ name }
      type='checkbox'
      checked={ checked }
      onChange={ onChange }
    />
  );
};

CheckBox.propTypes = {
  checked: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func
};

CheckBox.defaultProps = {
  onChange () {}
};

export default injectSheet(styles)(CheckBox);
