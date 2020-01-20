import { Styles } from 'jss';
import { Theme } from '../../../themes';

export type ComponentPreviewClassNames =
  'ComponentPreview' |
  'BackgroundDark'|
  'Code';

const styles = (theme: Theme): Styles<ComponentPreviewClassNames> => ({
  ComponentPreview: {
  },

  BackgroundDark: {
    background: theme.color.brand.grayDark
  },

  Code: {
    '& code': {
      maxWidth: 'none'
    }
  }
});

export { styles };
