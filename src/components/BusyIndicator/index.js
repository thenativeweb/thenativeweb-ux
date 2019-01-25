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
    'justify-content': 'flex-start',
    'align-items': 'center',
    'min-height': 100
  },

  Pulse: {
    width: 12,
    height: 12,
    marginRight: 3,
    'border-radius': '50%',
    'background-color': theme.color.brand.highlight,
    'animation-iteration-count': 'infinite',
    'animation-timing-function': 'linear',
    'animation-name': 'loading-indicator-pulse',
    'animation-duration': '900ms',
    'animation-fill-mode': 'both'
  },

  Pulse1: {
    'animation-delay': '-300ms'
  },

  Pulse2: {
    'animation-delay': '-150ms'
  }
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
