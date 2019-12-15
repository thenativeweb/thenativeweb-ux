import { Styles } from 'jss';
import { Theme } from '../../../lib';

export type StyleguideClassNames =
  'Content' |
  'Styleguide' |
  'WithNavigationVisible' |
  'NavigationPanel' |
  'NavigationDesktop';

const navigationPanelWidthSmall = '20vw';
const navigationPanelWidthMedium = '300px';

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

  NavigationDesktop: {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100%',
    overflow: 'hidden',
    display: 'flex'
  },

  NavigationPanel: {
    position: 'fixed',
    top: 0,
    left: theme.components.Sidebar.width,
    width: '0px',
    height: '100%',
    overflow: 'hidden',
    background: theme.color.brand.white,
    borderRight: `1px solid ${theme.color.brand.grayLight}`,
    transition: 'width 200ms'
  },

  Content: {
    padding: theme.space(6),
    marginLeft: theme.components.Sidebar.width,
    transition: 'margin-left 200ms'
  },

  [theme.breakpoints.up('xs')]: {
    NavigationPanel: {
      '& > *': {
        width: navigationPanelWidthSmall
      }
    },

    WithNavigationVisible: {
      '& $NavigationPanel': {
        width: navigationPanelWidthSmall
      },

      '& $Content': {
        marginLeft: `calc(${navigationPanelWidthSmall} + ${theme.components.Sidebar.width})`
      }
    }
  },

  [theme.breakpoints.up('md')]: {
    NavigationPanel: {
      '& > *': {
        width: navigationPanelWidthMedium
      }
    },

    WithNavigationVisible: {
      '& $NavigationPanel': {
        width: navigationPanelWidthMedium
      },

      '& $Content': {
        marginLeft: `calc(${navigationPanelWidthMedium} + ${theme.components.Sidebar.width})`
      }
    }
  }
});

export { styles };
