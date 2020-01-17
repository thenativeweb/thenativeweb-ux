import color from 'color';
import { Styles } from 'jss';
import { Theme } from '../../..';

export type HorizontalBarClassNames =
  'AlignStretch' |
  'AlignCenter' |
  'AlignRight' |
  'AlignLeft' |
  'AlignSpaceBetween' |
  'HorizontalBar' |
  'BackgroundLight' |
  'BackgroundDark' |
  'PaddingHorizontalNone' |
  'PaddingHorizontalSm' |
  'PaddingHorizontalMd' |
  'SpaceBetweenItemsNone' |
  'SpaceBetweenItemsSm' |
  'SpaceBetweenItemsMd' |
  'SpaceBetweenItemsLg' |
  'WithBorderBottom' |
  'WithBorderTop';

const styles = (theme: Theme): Styles<HorizontalBarClassNames> => ({
  HorizontalBar: {
    display: 'flex',
    alignItems: 'center',
    minHeight: theme.components.HorizontalBar.minHeight,
    borderStyle: 'solid'
  },

  AlignStretch: {
    justifyContent: 'stretch'
  },

  AlignCenter: {
    justifyContent: 'center'
  },

  AlignRight: {
    justifyContent: 'flex-end'
  },

  AlignLeft: {
    justifyContent: 'flex-start'
  },

  AlignSpaceBetween: {
    justifyContent: 'space-between'
  },

  BackgroundLight: {
    background: theme.color.brand.white,
    borderColor: theme.color.brand.grayLight
  },

  BackgroundDark: {
    background: theme.color.brand.grayDark,
    color: theme.color.brand.white,
    borderColor: color(theme.color.brand.white).alpha(0.15).rgb().toString()
  },

  PaddingHorizontalNone: {},

  PaddingHorizontalSm: {
    padding: `0 ${theme.space(1)}px`
  },

  PaddingHorizontalMd: {
    padding: `0 ${theme.space(2)}px`
  },

  SpaceBetweenItemsNone: {},

  SpaceBetweenItemsSm: {
    '& > *': {
      marginRight: theme.space(1)
    },
    '& > *:last-child': {
      marginRight: 0
    }
  },

  SpaceBetweenItemsMd: {
    '& > *': {
      marginRight: theme.space(2)
    },
    '& > *:last-child': {
      marginRight: 0
    }
  },

  SpaceBetweenItemsLg: {
    '& > *': {
      marginRight: theme.space(4)
    },
    '& > *:last-child': {
      marginRight: 0
    }
  },

  WithBorderBottom: {
    borderBottomWidth: '1px'
  },

  WithBorderTop: {
    borderTopWidth: '1px'
  }
});

export { styles };
