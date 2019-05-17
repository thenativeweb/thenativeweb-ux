import PropTypes from 'prop-types';
import React from 'react';
import { classNames, withStyles } from '../../styles';

const styles = theme => ({
  CheckBox: {
    'font-family': theme.font.family.default
  }
});

const CheckBox = ({ checked, classes, className, id, name, style, onChange }) => {
  const componentClasses = classNames(classes.CheckBox, className);

  return (
    <input
      id={ id }
      className={ componentClasses }
      name={ name }
      style={ style }
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
  onChange () {
    // Intentionally left blank
  }
};

export default withStyles(styles)(CheckBox);
