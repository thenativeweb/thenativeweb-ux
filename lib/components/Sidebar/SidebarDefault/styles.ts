import { Styles } from 'jss';
import Theme from '../../../themes/Theme';

const styles: Styles = (theme: Theme): Styles => ({
  Sidebar: {
    position: 'relative',
    flexGrow: 0,
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'content-box',
    width: theme.components.Sidebar.width,
    background: theme.color.brand.dark,
    padding: `${theme.space(2)}px 0`
  }
});

export default styles;
