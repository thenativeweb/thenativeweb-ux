import { Styles } from 'jss';
import Theme from '../../../themes/Theme';

const styles: Styles = (theme: Theme): Styles => ({
  Footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingTop: `${theme.space(2)}px`,
    paddingBottom: `${theme.space(2)}px`,
    borderTop: '1px solid rgba(255, 255, 255, 0.1)'
  }
});

export default styles;
