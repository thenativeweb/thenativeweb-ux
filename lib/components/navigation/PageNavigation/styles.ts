import { ComponentClassNames, Theme } from '../../..';

export type PageNavigationClassNames =
  'PageNavigation' |
  'SearchBar' |
  'SearchBarIcon' |
  'SearchField' |
  'Content';

const getStyles = (theme: Theme): ComponentClassNames<PageNavigationClassNames> => ({
  PageNavigation: {
    position: 'relative',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',

    '& $SearchBarIcon': {
      position: 'absolute',
      left: `${theme.space(3)}px`,
      pointerEvents: 'none'
    },

    '& $SearchField': {
      padding: `${theme.space(1)}px ${theme.space(1)}px`,
      paddingLeft: `${theme.space(4)}px`,
      flexGrow: 1
    },

    '& $Content': {
      flexGrow: 1,
      overflow: 'auto',
      '-webkit-overflow-scrolling': 'touch',
      paddingTop: theme.space(1.5)
    }
  },

  SearchBar: {},

  SearchBarIcon: {},

  SearchField: {},

  Content: {},

  [theme.breakpoints.down('xs')]: {
    PageNavigation: {
      '& $SearchField': {
        marginRight: theme.space(5)
      }
    }
  }
});

export { getStyles as styles };
