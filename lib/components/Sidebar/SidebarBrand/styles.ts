import { Styles } from 'jss';
import Theme from '../../../themes/Theme';

const styles: Styles = (theme: Theme): Styles => ({
  Brand: {
    paddingBottom: `${theme.space(2)}px`,
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
  }
});

export default styles;
