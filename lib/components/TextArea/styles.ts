import { Styles } from 'jss';
import Theme from '../../themes/Theme';

const styles: Styles = (theme: Theme): Styles => ({
  TextArea: {
    padding: '9px 12px',
    fontSize: theme.font.size.md,
    fontFamily: theme.font.family.default,
    width: '100%',
    'box-sizing': 'border-box',
    border: `1px solid`,
    borderColor: theme.color.content.border,

    '&:focus': {
      outline: 'none',
      borderColor: theme.color.interaction.focus
    },

    '&::placeholder': {
      color: theme.color.brand.darkGrey,
      fontFamily: theme.font.family.default,
      fontSize: 'inherit',
      fontWeight: 400,
      opacity: 0.5
    }
  },

  IsDisabled: {
    color: theme.color.brand.darkGrey,
    background: theme.color.brand.lightGrey
  },

  SizeSm: {
    height: `${theme.space(10)}px`
  },

  SizeMd: {
    height: `${theme.space(18)}px`
  }
});

export default styles;
