import { Styles } from 'jss';
import { CustomTheme as Theme } from '../../themes/CustomTheme';

export type CustomComponentClassNames = 'CustomComponent' | 'SizeLg';

const styles = (theme: Theme): Styles<CustomComponentClassNames> => ({
  CustomComponent: {
    width: theme.customComponent.width
  },

  SizeLg: {
    fontSize: '24px'
  }
});

export { styles };
