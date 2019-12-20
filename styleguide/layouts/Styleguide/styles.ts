import { Styles } from 'jss';
import { Theme } from '../../../lib';

export type StyleguideClassNames =
  'Content' |
  'Styleguide' |
  'WithNavigationVisible' |
  'NavigationPanel' |
  'SidebarDesktop'|
  'TopbarMobile';

const navigationPanelWidthXs = '75vw';
const navigationPanelWidthSm = '200px';
const navigationPanelWidthMd = '300px';

const styles = (theme: Theme): Styles<StyleguideClassNames> => ({
  Styleguide: {
    background: theme.color.brand.white
  },

  WithNavigationVisible: {
    '& $NavigationPanel': {
      overflowY: 'auto',
      overflowX: 'hidden'
    }
  },

  SidebarDesktop: {
    zIndex: theme.zIndices.navigation,
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100%',
    overflow: 'hidden',
    display: 'flex'
  },

  TopbarMobile: {
    background: theme.color.brand.grayDark,
    padding: [ theme.space(1), theme.space(1) ]
  },

  NavigationPanel: {
    zIndex: theme.zIndices.navigation,
    position: 'fixed',
    top: 0,
    width: '0px',
    height: '100%',
    overflow: 'hidden',
    background: theme.color.brand.white,
    transition: `width 200ms, transform 300ms ${theme.ease.outCirc}, opacity 300ms ${theme.ease.outCirc}`
  },

  Content: {
    transition: 'margin-left 200ms'
  },

  [theme.breakpoints.only('xs')]: {
    SidebarDesktop: {
      display: 'none'
    },

    TopbarMobile: {
      display: 'flex'
    },

    NavigationPanel: {
      left: 0,
      opacity: 0,
      transform: 'translate(-50%,0)',
      width: navigationPanelWidthXs,

      '& > *': {
        width: navigationPanelWidthXs
      }
    },

    Content: {
      padding: [ theme.space(2.5), theme.space(4) ]
    },

    WithNavigationVisible: {
      '& $NavigationPanel': {
        opacity: 1,
        transform: 'translate(0,0)'
      },

      '& $Content': {
        marginLeft: 0
      }
    }
  },

  [theme.breakpoints.up('sm')]: {
    SidebarDesktop: {
      display: 'flex'
    },

    TopbarMobile: {
      display: 'none'
    },

    NavigationPanel: {
      borderRight: `1px solid ${theme.color.brand.grayLight}`,
      left: theme.components.Sidebar.width,

      '& > *': {
        width: navigationPanelWidthSm
      }
    },

    Content: {
      padding: theme.space(6),
      marginLeft: theme.components.Sidebar.width
    },

    WithNavigationVisible: {
      '& $NavigationPanel': {
        width: navigationPanelWidthSm
      },

      '& $Content': {
        marginLeft: `calc(${navigationPanelWidthSm} + ${theme.components.Sidebar.width})`
      }
    }
  },

  [theme.breakpoints.up('md')]: {
    NavigationPanel: {
      '& > *': {
        width: navigationPanelWidthMd
      }
    },

    WithNavigationVisible: {
      '& $NavigationPanel': {
        width: navigationPanelWidthMd
      },

      '& $Content': {
        marginLeft: `calc(${navigationPanelWidthMd} + ${theme.components.Sidebar.width})`
      }
    }
  }
});

export { styles };
