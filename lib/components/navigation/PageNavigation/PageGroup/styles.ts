import color from 'color';
import { Styles } from 'jss';
import { Theme } from '../../../..';

export type PageGroupClassNames =
  'PageGroup' |
  'Title' |
  'ExpandIcon' |
  'IsActive' |
  'IsExpanded' |
  'IsCollapsed' |
  'Children';

const styles = (theme: Theme): Styles<PageGroupClassNames> => ({
  PageGroup: {
    position: 'relative',

    '&$IsCollapsed > $Children': {
      display: 'none'
    },

    // First Level
    '&$IsExpanded': {
      '& $Children:after': {
        content: '""',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: `${theme.space(2) + 6}px`,
        width: '2px',
        background: color(theme.color.brand.grayDark).alpha(0.25).toString(),
        zIndex: theme.zIndices.contentOverlay
      },

      '& > $Title > $ExpandIcon': {
        transform: 'rotate(90deg)'
      },

      '& > $Children': {
        display: 'block'
      }
    },

    // Nested Levels
    '&.Level2, &.Level3, &.Level4': {
      paddingLeft: theme.space(2)
    },

    '&.Level2 > $Title': {
      fontWeight: 400
    },

    '&$IsExpanded $IsExpanded': {
      '& $Children:after': {
        background: 'transparent',
        left: '6px',
        top: `${theme.space(-4)}px`
      }
    },

    '&$IsExpanded $IsActive$IsExpanded': {
      '& $Children:after': {
        background: color(theme.color.brand.grayDark).alpha(0.5).toString()
      }
    },

    '&$IsActive > $Title': {
      fontWeight: 600
    }
  },

  Title: {
    display: 'flex',
    padding: `0`,
    margin: 0,
    cursor: 'pointer',
    textDecoration: 'none',
    color: theme.color.brand.grayDark,
    fontWeight: 600,
    minHeight: `${theme.space(4)}px`,
    alignItems: 'center',

    '&:hover': {
      color: theme.color.brand.highlight
    }
  },

  ExpandIcon: {
    flexShrink: 0,
    width: 14,
    height: 14,
    transform: 'rotate(0)',
    transition: 'transform 150ms ease-in-out',
    marginTop: '2px',
    marginRight: '3px',
    marginLeft: theme.space(2)
  },

  IsCollapsed: {},

  IsExpanded: {},

  IsActive: {},

  Children: {
    position: 'relative',
    display: 'none',

    '& ul': {
      listStyle: 'none'
    }
  },

  [theme.breakpoints.up('xs')]: {
    Title: {
      fontSize: theme.font.size.lg
    },

    PageGroup: {
      '& $PageGroup $Title': {
        fontSize: theme.font.size.md,
        lineHeight: `${theme.space(4)}px`
      }
    }
  }
});

export { styles };
