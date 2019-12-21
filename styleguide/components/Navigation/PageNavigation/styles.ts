import { Styles } from 'jss';
import { Theme } from '../../../../lib';

export type PageNavigationClassNames =
  'PageNavigation' |
  'SearchBar' |
  'SearchIcon' |
  'SearchField' |
  'Content';

const styles = (theme: Theme): Styles => ({
  PageNavigation: {
    position: 'relative',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },

  SearchBar: {
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
    height: 56,
    borderBottom: `1px solid ${theme.color.brand.grayLight}`
  },

  SearchIcon: {
    left: theme.space(3),
    fill: theme.color.brand.grayModest,
    position: 'absolute'
  },

  SearchField: {
    margin: [ 0, theme.space(2) ],
    padding: [ theme.space(0.5), theme.space(1), theme.space(0.5), theme.space(4) ],
    flexGrow: 1
  },

  Content: {
    flexGrow: 1,
    overflow: 'auto',
    '-webkit-overflow-scrolling': 'touch'
  }
});

export { styles };
