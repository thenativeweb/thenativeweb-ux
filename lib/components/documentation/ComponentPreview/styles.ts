import { ComponentClassNames, Theme } from '../../..';

export type ComponentPreviewClassNames =
  'ComponentPreview' |
  'BackgroundDark'|
  'Code';

const styles = (theme: Theme): ComponentClassNames<ComponentPreviewClassNames> => ({
  ComponentPreview: {
  },

  BackgroundDark: {
    '& > *': {
      background: theme.color.brand.grayDark
    }
  },

  Code: {
    '& code': {
      maxWidth: 'none'
    }
  }
});

export { styles };
