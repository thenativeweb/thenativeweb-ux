import { Styles } from 'jss';
import Theme from '../../../themes/Theme';

const styles: Styles = (theme: Theme): Styles => ({
  ButtonHint: {
    opacity: 0.5,
    fontSize: theme.font.size.sm,
    paddingLeft: '0.75em'
  }
});

export default styles;
