import color from 'color';
import { Styles } from 'jss';
import { Theme } from '../../../../../lib';

export type SectionClassNames =
  'Section' |
  'Title' |
  'ExpandIcon' |
  'IsActive' |
  'IsExpanded' |
  'HasChapters' |
  'HasPages' |
  'Chapters';

const styles = (theme: Theme): Styles => ({
  Section: {
    position: 'relative',

    '&:first-child': {
      paddingTop: theme.space(1.5)
    }
  },

  Title: {
    display: 'flex',
    padding: [ theme.space(1), theme.space(2), theme.space(1), theme.space(2) ],
    margin: 0,
    lineHeight: 1,
    cursor: 'pointer',
    textDecoration: 'none',
    color: theme.color.brand.grayDark,
    fontWeight: 600,

    '&:hover': {
      color: theme.color.brand.highlight
    }
  },

  ExpandIcon: {
    width: 14,
    height: 14,
    transform: 'rotate(0)',
    transition: 'transform 150ms ease-in-out',
    marginTop: 2,
    marginRight: 3
  },

  IsExpanded: {
    '&:after': {
      content: '""',
      position: 'absolute',
      top: theme.space(6.75),
      bottom: '0.5em',
      left: theme.space(2) + 6,
      width: 2,
      background: color(theme.color.brand.grayDark).alpha(0.1).toString(),
      zIndex: theme.zIndices.contentOverlay
    },

    '& $Title': {
      paddingBottom: theme.space(1)
    },

    '& $ExpandIcon': {
      transform: 'rotate(90deg)'
    },

    '& $Chapters': {
      display: 'block'
    }
  },

  IsActive: {
    '& $Title': {
      fontWeight: 800,
      opacity: 1
    }
  },

  HasChapters: {
    '& $Chapters': {
    }
  },

  HasPages: {
    '&:after': {
      top: theme.space(4.2),
      bottom: '0'
    },

    '&$IsActive:after': {
      background: color(theme.color.brand.grayDark).alpha(0.5).rgb().toString()
    },

    '& $Chapters': {}
  },

  Chapters: {
    display: 'none',

    '& ul': {
      listStyle: 'none'
    }
  },

  [theme.breakpoints.up('xs')]: {
    Title: {
      fontSize: theme.font.size.lg
    }
  }
});

export { styles };
