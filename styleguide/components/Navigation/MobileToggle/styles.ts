import { Styles } from 'jss';
import { Theme } from '../../../../lib';

export type MobileToggleClassNames =
  'MobileToggle' |
  'IsVisible' |
  'Backdrop' |
  'Toggle' |
  'IconContainer' |
  'NavIcon';

const styles = (theme: Theme): Styles => ({
  MobileToggle: {
    position: 'fixed',
    zIndex: theme.zIndices.content,
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    pointerEvents: 'none'
  },

  IsVisible: {},

  Backdrop: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    background: 'rgba(0, 0, 0, 0.3)',
    visibility: 'hidden',
    pointerEvents: 'none'
  },

  Toggle: {
    zIndex: theme.zIndices.navigation,
    background: theme.color.brand.grayDark,
    position: 'absolute',
    right: theme.space(1),
    top: theme.space(1),
    borderRadius: '50%',
    display: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    width: 36,
    height: 36,
    willChange: 'opacity'
  },

  IconContainer: {
    position: 'relative',
    width: '100%',
    height: '100%'
  },

  NavIcon: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
  },

  [theme.breakpoints.down('xs')]: {
    Toggle: {
      display: 'flex',
      pointerEvents: 'auto'
    },

    IsVisible: {
      '& $Backdrop': {
        visibility: 'visible',
        pointerEvents: 'auto'
      }
    }
  }
});

export { styles };
