import PropTypes from 'prop-types';
import React from 'react';
import { classNames, withStyles } from '../../styles';

const styles = theme => ({
  Text: {
    display: 'block',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    color: 'inherit',
    fontFamily: theme.font.family.default
  },

  AdjustAuto: {
  },

  AdjustFlex: {
    flexGrow: 1,
    flexShrink: 1
  },

  SizeMd: {
    padding: `${theme.space(1)}px 0`,
    fontSize: theme.font.size.md
  },

  SizeSm: {
    padding: `${theme.space(1)}px 0`,
    fontSize: theme.font.size.sm
  },

  BreakLines: {
    whiteSpace: 'normal'
  }
});

const Text = function ({ adjust, breakLines, classes, className, children, id, size, style }) {
  const componentClasses = classNames(classes.Text, {
    [classes.BreakLines]: breakLines,
    [classes.AdjustFlex]: adjust === 'flex',
    [classes.AdjustAuto]: adjust === 'auto',
    [classes.SizeSm]: size === 'sm',
    [classes.SizeMd]: size === 'md'
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
  size: PropTypes.oneOf([ 'sm', 'md' ])
};

Text.defaultProps = {
  adjust: 'auto',
  breakLines: false,
  size: 'md'
};

export default withStyles(styles)(Text);
