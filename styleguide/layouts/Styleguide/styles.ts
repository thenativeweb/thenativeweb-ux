import { Styles } from 'jss';
import { Theme } from '../../../lib';

export type StyleguideClassNames = 'Content' | 'Styleguide' | 'NavigationDesktop';

const styles = (theme: Theme): Styles<StyleguideClassNames> => ({
  Styleguide: {
    background: theme.color.brand.white
  },

  NavigationDesktop: {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100%',
    overflow: 'hidden',
    display: 'flex'
  },

  Content: {
    padding: theme.space(6),
    marginLeft: theme.components.Sidebar.width
  }
});

export { styles };
