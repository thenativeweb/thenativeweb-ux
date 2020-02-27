import { ComponentClassNames, Theme } from '../../..';

export type MobileToggleClassNames =
  '@global' |
  'MobileToggle' |
  'IsResponsive' |
  'IsNotResponsive' |
  'IsVisible' |
  'PositionAbsolute' |
  'PositionFixed' |
  'Backdrop' |
  'Toggle' |
  'IconContainer' |
  'NavIcon';

const styles = (theme: Theme): ComponentClassNames<MobileToggleClassNames> => ({
  '@global': {
    '.tnw-ux-prevent-body-scroll': {
      overflow: 'hidden'
    }
  },

  MobileToggle: {
    zIndex: theme.zIndices.content,
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    pointerEvents: 'none'
  },

  IsVisible: {},

  IsResponsive: {},

  PositionAbsolute: {
    '&$Toggle': {
      position: 'absolute'
    }
  },

  PositionFixed: {
    '&$Toggle': {
      position: 'fixed'
    }
  },

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
    zIndex: theme.zIndices.navigation + 1,
    background: theme.color.brand.grayDark,
    position: 'fixed',
    right: theme.space(1),
    top: theme.space(1),
    borderRadius: '50%',
    display: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    width: '36px',
    height: '36px',
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

  IsNotResponsive: {
    '&IsVisible': {
      '&$Backdrop': {
        visibility: 'visible',
        pointerEvents: 'auto'
      }
    },

    '&$Toggle': {
      display: 'flex',
      pointerEvents: 'auto'
    }
  },

  [theme.breakpoints.down('xs')]: {
    IsResponsive: {
      '&IsVisible': {
        '& $Backdrop': {
          visibility: 'visible',
          pointerEvents: 'auto'
        }
      },

      '&$Toggle': {
        display: 'flex',
        pointerEvents: 'auto'
      }
    }
  }
});

export { styles };
