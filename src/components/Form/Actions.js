import PropTypes from 'prop-types';
import React from 'react';
import { classNames, withStyles } from '../../styles';

const styles = theme => ({
  Actions: {
    display: 'flex',
    'border-top': `1px solid ${theme.color.content.border}`,
    'padding-top': `${theme.space(1)}px`,
    marginTop: `${theme.space(2)}px`
  },

  TypeDefault: {
    justifyContent: 'flex-end'
  },

  TypeStacked: {
    flexDirection: 'column',
    justifyContent: 'stretch',
    marginBottom: `${theme.space(2)}px`,

    '& > *': {
      marginRight: 0,
      marginBottom: 0
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
