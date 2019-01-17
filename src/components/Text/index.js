import PropTypes from 'prop-types';
import React from 'react';
import { classNames, withStyles } from '../../styles';

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
  },

  BreakLines: {
    'white-space': 'normal'
  }
});

const Text = function ({ breakLines, classes, className, children, id, size, style }) {
  const componentClasses = classNames(classes.Text, {
    [classes.BreakLines]: breakLines,
    [classes.SizeS]: size === 's',
    [classes.SizeM]: size === 'm'
  }, className);

  return (
    <div id={ id } className={ componentClasses } style={ style }>
      { children }
    </div>
  );
};

Text.propTypes = {
  breakLines: PropTypes.bool,
  size: PropTypes.oneOf([ 's', 'm' ])
};

Text.defaultProps = {
  breakLines: false,
  size: 'm'
};

export default withStyles(styles)(Text);
