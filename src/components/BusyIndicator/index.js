import PropTypes from 'prop-types';
import React from 'react';
import { classNames, withStyles } from '../../styles';

const styles = theme => ({
  '@keyframes loading-indicator-pulse': {
    '0%': {
      transform: 'scale(0.5)'
    },

    '20%': {
      transform: 'scale(1)'
    },

    '100%': {
      transform: 'scale(0.5)'
    }
  },

  BusyIndicator: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    minHeight: 100
  },

  Pulse: {
    width: `${theme.space(1.5)}px`,
    height: `${theme.space(1.5)}px`,
    marginRight: 3,
    borderRadius: '50%',
    backgroundColor: theme.color.brand.highlight,
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
    animationName: '$loading-indicator-pulse',
    animationDuration: '900ms',
    animationFillMode: 'both'
  },

  Pulse1: {
    animationDelay: '-300ms'
  },

  Pulse2: {
    animationDelay: '-150ms'
  },

  Pulse3: {}
});

const BusyIndicator = ({ classes, className, isVisible }) => {
  if (!isVisible) {
    return null;
  }

  return (
    <div className={ classNames(classes.BusyIndicator, className) }>
      <div className={ classNames(classes.Pulse, classes.Pulse1) } />
      <div className={ classNames(classes.Pulse, classes.Pulse2) } />
      <div className={ classNames(classes.Pulse, classes.Pulse3) } />
    </div>
  );
};

BusyIndicator.propTypes = {
  isVisible: PropTypes.bool
};

BusyIndicator.defaultProps = {
  isVisible: true
};

export default withStyles(styles)(BusyIndicator);
