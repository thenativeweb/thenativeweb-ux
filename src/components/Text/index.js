import PropTypes from 'prop-types';
import React from 'react';
import { classNames, withStyles } from '../../styles';

const styles = theme => ({
  Text: {
    display: 'block',
    overflow: 'hidden',
    'text-overflow': 'ellipsis',
    'white-space': 'nowrap',
    color: 'inherit',
    'font-family': theme.font.family.default
  },

  AdjustAuto: {
  },

  AdjustFlex: {
    'flex-grow': 1,
    'flex-shrink': 1
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

const Text = function ({ adjust, breakLines, classes, className, children, id, size, style }) {
  const componentClasses = classNames(classes.Text, {
    [classes.BreakLines]: breakLines,
    [classes.AdjustFlex]: adjust === 'flex',
    [classes.AdjustAuto]: adjust === 'auto',
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
  adjust: PropTypes.oneOf([ 'flex', 'auto' ]),
  breakLines: PropTypes.bool,
  size: PropTypes.oneOf([ 's', 'm' ])
};

Text.defaultProps = {
  adjust: 'auto',
  breakLines: false,
  size: 'm'
};

export default withStyles(styles)(Text);
