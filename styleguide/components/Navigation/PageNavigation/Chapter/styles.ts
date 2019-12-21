import color from 'color';
import { Styles } from 'jss';
import { Theme } from '../../../../../lib';

export type ChapterClassNames =
  'Chapter' |
  'Title' |
  'ExpandIcon' |
  'IsActive' |
  'IsExpanded' |
  'Chapters';

const styles = (theme: Theme): Styles => ({
  Chapter: {
    position: 'relative'
  },

  Title: {
    display: 'flex',
    padding: [ theme.space(1), theme.space(2), theme.space(1), theme.space(4) ],
    margin: 0,
    lineHeight: 1.1,
    cursor: 'pointer',
    textDecoration: 'none',
    fontWeight: 500,
    color: theme.color.brand.gray,

    '&:hover': {
      color: theme.color.brand.highlight
    }
  },

  ExpandIcon: {
    width: 12,
    height: 12,
    transform: 'rotate(0deg)',
    transition: 'transform 150ms ease-in-out',
    marginTop: 3,
    marginRight: 3
  },

  IsExpanded: {
    '& $Title': {
      display: 'flex',
      alignItems: 'flex-start',
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
    '&:after': {
      content: '""',
      position: 'absolute',
      top: theme.space(1),
      bottom: 0,
      left: theme.space(2) + 6,
      width: 2,
      background: color(theme.color.brand.grayDark).alpha(0.5).rgb().toString(),
      zIndex: theme.zIndices.contentOverlay + 1,
      opacity: 0.9
    },

    '& $Title': {
      color: theme.color.brand.grayDark,
      fontWeight: 600,

      '&:hover': {
        color: theme.color.brand.highlight
      }
    }
  },

  Chapters: {
    padding: 0,
    display: 'none',

    '& ul': {
      listStyle: 'none'
    }
  },

  [theme.breakpoints.up('xs')]: {
    Title: {
      fontSize: theme.font.size.md
    }
  }
});

export { styles };
