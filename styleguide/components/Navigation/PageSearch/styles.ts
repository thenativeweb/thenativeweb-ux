import { Styles } from 'jss';
import { Theme } from '../../../../lib';

export type PageSearchClassNames =
  'PageSearch' |
  'SearchPanel' |
  'ResultsPanel' |
  'SearchField';

const styles = (theme: Theme): Styles => ({
  PageSearch: {
    position: 'relative'
  },

  SearchPanel: {
    display: 'flex',
    alignItems: 'center',
    height: 56,
    borderBottom: `1px solid ${theme.color.brand.grayLight}`
  },

  SearchField: {
    margin: theme.space(2),
    flexGrow: 1,
    width: '100%',
    padding: [ theme.space(0.5), theme.space(1), theme.space(0.5), theme.space(2) ],
    fontFamily: theme.font.family.default,
    fontSize: theme.font.size.md,
    fontWeight: 500,
    border: `1px solid ${theme.color.brand.grayLight}`,
    borderRadius: 0,
    outline: 0
  },

  ResultsPanel: {
    background: theme.color.brand.white,
    position: 'absolute',
    top: 56,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'scroll',
    '-webkit-overflow-scrolling': 'touch',
    zIndex: theme.zIndices.overlay
  }
});

export { styles };
