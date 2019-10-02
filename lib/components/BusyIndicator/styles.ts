import { Styles } from 'jss';
import Theme from '../../themes/Theme';

const styles: Styles = (theme: Theme): Styles => ({
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
    minHeight: '100px'
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

export default styles;
