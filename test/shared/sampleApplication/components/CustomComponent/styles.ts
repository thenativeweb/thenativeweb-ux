import { ComponentClassNames } from '../../../../../lib';
import { CustomTheme as Theme } from '../../themes/CustomTheme';

export type CustomComponentClassNames = 'CustomComponent' | 'SizeLg';

const styles = (theme: Theme): ComponentClassNames<CustomComponentClassNames> => ({
  CustomComponent: {
    width: theme.customComponent.width
  },

  SizeLg: {
    fontSize: '24px'
  }
});

export { styles };
