import { Styles } from 'jss';
import { Theme } from '../../..';

export type PageNavigationClassNames =
  'PageNavigation' |
  'SearchBar' |
  'SearchField' |
  'Content';

const getStyles = (theme: Theme): Styles<PageNavigationClassNames> => {
  const styles: Styles<PageNavigationClassNames> = {
    PageNavigation: {
      position: 'relative',
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    },

    SearchBar: {},

    SearchField: {
      padding: `${theme.space(0.5)}px ${theme.space(1)}px`,
      flexGrow: 1
    },

    Content: {
      flexGrow: 1,
      overflow: 'auto',
      '-webkit-overflow-scrolling': 'touch'
    }
  };

  return styles;
};

export { getStyles as styles };
