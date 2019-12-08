import { Styles } from 'jss';
import { Theme } from '../../../themes';

export type ComponentPreviewClassNames =
  'ComponentPreview' |
  'BackgroundDark';

const styles = (theme: Theme): Styles<ComponentPreviewClassNames> => ({
  ComponentPreview: {
  },

  BackgroundDark: {
    background: theme.color.brand.grayDark
  }
});

export { styles };
