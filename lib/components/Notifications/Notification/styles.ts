import { Styles } from 'jss';
import { Theme } from '../../..';

export type NotificationClassNames =
  'Notification' |
  'TypeError' |
  'TypeSuccess';

const styles = (theme: Theme): Styles<NotificationClassNames> => ({
  Notification: {
    padding: '10px 15px',
    background: theme.color.brand.grayDark,
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

export { styles };
