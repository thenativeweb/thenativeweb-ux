import { Styles } from 'jss';
import { Theme } from '../..';

export type ToggleClassNames =
  'Toggle' |
  'ActiveButton' |
  'Button';

const styles = (theme: Theme): Styles<ToggleClassNames> => ({
  Toggle: {
    display: 'flex'
  },

  ActiveButton: {
    marginRight: 0,
    background: theme.color.brand.highlight,

    '&:first-child': {
      'border-top-right-radius': 0,
      'border-bottom-right-radius': 0
    },

    '&:last-child': {
      'border-top-left-radius': 0,
      'border-bottom-left-radius': 0
    }
  },

  Button: {
    marginRight: 0,

    '&:first-child': {
      'border-top-right-radius': 0,
      'border-bottom-right-radius': 0
    },

    '&:last-child': {
      'border-top-left-radius': 0,
      'border-bottom-left-radius': 0
    }
  }
});

export { styles };
