import { Styles } from 'jss';
import { Theme } from '../..';

export type MessageClassNames =
  'Message' |
  'TypeError' |
  'TypeInfo' |
  'WithIcon' |
  'Icon' |
  'IconContainer' |
  'Content';

const styles = (theme: Theme): Styles<MessageClassNames> => ({
  Message: {
    padding: `${theme.space(1.5)}px ${theme.space(2)}px`,
    marginBottom: `${theme.space(1)}px`,
    fontFamily: theme.font.family.default
  },

  TypeError: {
    background: theme.color.state.error,
    color: theme.color.brand.white,

    '& $Icon': {
      fill: theme.color.brand.white
    }
  },

  TypeInfo: {
    background: theme.color.brand.grayLight
  },

  WithIcon: {
    display: 'flex',

    '& $IconContainer': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexGrow: 0,
      flexBasis: 'auto',
      marginRight: `${theme.space(1.5)}px`
    },

    '&. $Content': {
      flexGrow: 1,
      flexBasis: '100%'
    }
  },

  IconContainer: {},
  Icon: {},
  Content: {}
});

export default styles;
