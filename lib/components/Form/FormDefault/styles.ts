import { Styles } from 'jss';
import Theme from '../../../themes/Theme';

const styles = (theme: Theme): Styles => ({
  Form: {
    fontFamily: theme.font.family.default
  }
});

export default styles;
