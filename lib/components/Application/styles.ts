import { createDefaultStyles } from '../../styles';
import Theme from '../../themes/Theme';

const styles = (theme: Theme): any => ({
  '@global': {
    ...createDefaultStyles(theme)
  },

  Application: {
    position: 'absolute !important',
    left: 0,
    top: 0,
    right: 0
  }
});

export default styles;
