import { ComponentClassNames } from '../../../../../lib';
import { CustomTheme } from '../../themes/CustomTheme';

export type CustomComponentClassNames = 'CustomComponent' | 'SizeLg';

const styles = (theme: CustomTheme): ComponentClassNames<CustomComponentClassNames> => ({
  CustomComponent: {
    width: theme.customComponent.width
  },

  SizeLg: {
    fontSize: '24px'
  }
});

export { styles };
