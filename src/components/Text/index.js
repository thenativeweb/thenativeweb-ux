import classNames from 'classnames';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import React from 'react';

const styles = theme => ({
  Text: {
    display: 'block',
    'flex-grow': 1,
    'flex-shrink': 1,
    overflow: 'hidden',
    'text-overflow': 'ellipsis',
    'white-space': 'nowrap',
    color: 'inherit',
    'font-family': theme.font.family.default
  },

  SizeM: {
    padding: '7px 0',
    'font-size': theme.font.size.default
  },

  SizeS: {
    padding: '7px 0',
    'font-size': theme.font.size.small
  }
});

const Text = function ({ classes, className, children, size, style }) {
  const componentClasses = classNames(classes.Text, {
    [classes.SizeS]: size === 's',
    [classes.SizeM]: size === 'm'
  }, className);

  return (
    <div className={ componentClasses } style={ style }>
      { children }
    </div>
  );
};

Text.propTypes = {
  size: PropTypes.oneOf([ 's', 'm' ])
};

Text.defaultProps = {
  size: 'm'
};

export default injectSheet(styles)(Text);
