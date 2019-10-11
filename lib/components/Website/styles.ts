import { createDefaultStyles } from '../../styles';
import { Styles } from 'jss';
import Theme from '../../themes/Theme';

const styles = (theme: Theme): Styles => ({
  '@global': {
    ...createDefaultStyles(theme)
  },

  Website: {}
});

export default styles;
