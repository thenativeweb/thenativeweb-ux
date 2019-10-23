import { Styles } from 'jss';
import { Theme } from '../..';

export type ViewClassNames =
  'View' |
  'AdaptToContent' |
  'AdaptToParent' |
  'BackgroundDark' |
  'BackgroundLight' |
  'DirectionHorizontal'|
  'DirectionVertical'|
  'ContentCenter' |
  'ScrollableNone' |
  'ScrollableAuto';

const styles = (theme: Theme): Styles<ViewClassNames> => ({
  View: {
    boxSizing: 'border-box',
    position: 'relative',
    fontFamily: theme.font.family.default,
    fontSize: theme.font.size.md
  },

  AdaptToContent: {
    display: 'flex',
    flex: '0 1'
  },

  AdaptToParent: {
    display: 'flex',
    flexGrow: '1'
  },

  BackgroundDark: {
    background: theme.color.brand.grayDark,
    color: theme.color.brand.white
  },

  BackgroundLight: {
    background: theme.color.brand.grayLight
  },

  ContentCenter: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  DirectionHorizontal: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row'
  },

  DirectionVertical: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },

  ScrollableNone: {
    overflow: 'visible'
  },

  ScrollableAuto: {
    '-webkit-overflow-scrolling': 'touch',
    overflow: 'auto'
  }
});

export default styles;
