import { Styles } from 'jss';
import Theme from '../../../themes/Theme';

const styles = (theme: Theme): Styles => ({
  FormRow: {
    display: 'flex',
    marginBottom: `${theme.space(2)}px`
  }
});

export default styles;
