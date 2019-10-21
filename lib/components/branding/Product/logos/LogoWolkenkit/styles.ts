import { Styles } from 'jss';
import { Theme } from '../../../../..';

export type LogoWolkenkitClassNames =
  'LogoWolkenkit' |
  'SizeMd' |
  'SizeLg' |
  'SizeXl' |
  'Box' |
  '@keyframes move-cloud' |
  'MovingCloud' |
  'MovingCloud1' |
  'MovingCloud2';

const styles = (theme: Theme): Styles<LogoWolkenkitClassNames> => ({
  LogoWolkenkit: {},

  SizeMd: {
    width: '56px',
    height: '56px'
  },

  SizeLg: {
    width: '120px',
    height: '120px'
  },

  SizeXl: {
    width: '220px',
    height: '220px'
  },

  Box: {
    fill: theme.color.brand.grayDark
  },

  '@keyframes move-cloud': {
    '0%': { transform: 'translate3d(0, 0, 0)' },
    '50%': { transform: 'translate3d(83px, 5px, 0)' },
    '100%': { transform: 'translate3d(166px, 0, 0)' }
  },

  MovingCloud: {
    animationName: '$move-cloud',
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
    transform: 'translate3d(0, 0, 0)',
    willChange: 'transform'
  },

  MovingCloud1: {
    animationDuration: '50s',
    opacity: 0.9,
    transform: 'translate3d(0, 0, 0)',
    willChange: 'transform'
  },

  MovingCloud2: {
    animationDuration: '30s',
    opacity: 0.95
  },

  [theme.breakpoints.down('sm')]: {
    SizeLg: {
      width: '56px',
      height: '56px'
    },

    SizeXl: {
      width: '100px',
      height: '100px'
    }
  }
});

export default styles;
