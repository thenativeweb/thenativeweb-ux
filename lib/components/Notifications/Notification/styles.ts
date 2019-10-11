import { Styles } from 'jss';
import Theme from '../../../themes/Theme';

export type ClassNames =
  'Notification' |
  'TypeError' |
  'TypeSuccess';

const styles = (theme: Theme): Styles<ClassNames> => ({
  Notification: {
    padding: '10px 15px',
    background: theme.color.brand.dark,
    boxShadow: theme.shadow.overlay,
    marginBottom: `${theme.space(1.5)}px`,
    fontFamily: theme.font.family.default
  },

  TypeError: {
    color: theme.color.brand.white,
    background: theme.color.state.error
  },

  TypeSuccess: {
    color: theme.color.brand.white,
    background: theme.color.state.success
  }
});

export default styles;
