import { Styles } from 'jss';
import { Theme } from '../../..';

export type DropdownClassNames =
  'Dropdown' |
  'SizeSm' |
  'SizeMd' |
  'IsFocused' |
  'IsSubtle' |
  'CollapseIcon';

const styles = (theme: Theme): Styles<DropdownClassNames> => ({
  Dropdown: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    background: theme.color.brand.grayDark,
    border: theme.color.brand.grayDark,
    fontFamily: theme.font.family.default,
    color: theme.color.brand.white,

    '& select': {
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: '100%',
      background: 'inherit',
      fontSize: 'inherit',
      fontWeight: 'inherit',
      border: 0,
      color: 'inherit',
      cursor: 'pointer',
      outline: 'none',
      appearance: 'none',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      borderRadius: theme.components.borderRadius.default,
      fontFamily: 'inherit',

      '&:focus': {
        outline: 'none'
      }
    },

    '&:last-child': {
      '& select': {
        marginRight: 0
      }
    }
  },

  SizeSm: {
    fontSize: theme.font.size.sm,
    margin: 0,
    marginRight: '6px',

    '& select': {
      padding: '7px 40px 7px 11px'
    }
  },

  SizeMd: {
    margin: '16px',
    marginLeft: 0,
    fontSize: theme.font.size.md,

    '& select': {
      padding: '7px 40px 7px 11px'
    }
  },

  IsSubtle: {
    background: theme.color.brand.white,
    border: theme.color.brand.white,
    color: theme.color.brand.grayDark
  },

  IsFocused: {
    background: theme.color.brand.highlight,
    color: theme.color.brand.white
  },

  CollapseIcon: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: 'auto',
    transform: 'rotate(90deg)',
    pointerEvents: 'none',
    position: 'absolute',
    right: '7px',
    top: '50%',
    marginTop: '-8px'
  }
});

export { styles };
