import { Styles } from 'jss';
import Theme from '../../themes/Theme';

const styles: Styles = (theme: Theme): Styles => ({
  Notifications: {
    position: 'fixed',
    top: `${theme.space(3)}px`,
    right: `${theme.space(3)}px`,
    width: '300px',
    zIndex: theme.zIndices.overlay,
    pointerEvents: 'none'
  }
});

export default styles;
