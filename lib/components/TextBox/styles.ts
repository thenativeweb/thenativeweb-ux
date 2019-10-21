import { Styles } from 'jss';
import { Theme } from '../..';

export type TextBoxClassNames =
  'TextBox' |
  'IsDisabled' |
  'TypePort' |
  'TypeTime';

const styles = (theme: Theme): Styles<TextBoxClassNames> => ({
  TextBox: {
    padding: '9px 12px',
    fontSize: theme.font.size.md,
    fontFamily: theme.font.family.default,
    width: '100%',
    boxSizing: 'border-box',
    border: `1px solid`,
    borderColor: theme.color.content.border,

    '&:focus': {
      outline: 'none',
      borderColor: theme.color.interaction.focus
    },

    '&::placeholder': {
      color: theme.color.brand.gray,
      fontFamily: theme.font.family.default,
      fontSize: 'inherit',
      fontWeight: 400,
      opacity: 0.5
    }
  },

  IsDisabled: {
    color: theme.color.brand.gray,
    background: theme.color.brand.grayLight
  },

  TypePort: {
    width: '5em'
  },

  TypeTime: {
    width: '7em'
  }
});

export default styles;
