import { Styles } from 'jss';
import { Theme } from '../..';

export type NotificationsClassNames = 'Notifications';

const styles = (theme: Theme): Styles<NotificationsClassNames> => ({
  Notifications: {
    position: 'fixed',
    top: `${theme.space(3)}px`,
    right: `${theme.space(3)}px`,
    width: '300px',
    zIndex: theme.zIndices.overlay,
    pointerEvents: 'none'
  }
});

export { styles };
