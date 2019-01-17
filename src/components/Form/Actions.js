import PropTypes from 'prop-types';
import React from 'react';
import { classNames, withStyles } from '../../styles';

const styles = theme => ({
  Actions: {
    display: 'flex',
    'border-top': `1px solid ${theme.color.content.border}`,
    'padding-top': theme.grid.stepSize,
    'margin-top': theme.grid.stepSize * 2
  },

  TypeDefault: {
    'justify-content': 'flex-end'
  },

  TypeStacked: {
    'flex-direction': 'column',
    'justify-content': 'stretch',
    'margin-bottom': theme.grid.stepSize * 2,

    '& > *': {
      'margin-right': 0,
      'margin-bottom': 0
    }
  }
});

const Actions = function ({ children, classes, className, type }) {
  const componentClasses = classNames(classes.Actions, {
    [classes.TypeDefault]: type === 'default',
    [classes.TypeStacked]: type === 'stacked'
  }, className);

  return (
    <div className={ componentClasses }>{ children }</div>
  );
};

Actions.propTypes = {
  type: PropTypes.oneOf([ 'default', 'stacked' ])
};

Actions.defaultProps = {
  type: 'default'
};

export default withStyles(styles)(Actions);
