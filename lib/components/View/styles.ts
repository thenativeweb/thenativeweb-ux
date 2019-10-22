import { Styles } from 'jss';
import { Theme } from '../..';

export type ViewClassNames =
  'View' |
  'ResizeFlexible' |
  'ResizeNone' |
  'BackgroundDark' |
  'BackgroundLight' |
  'FlowHorizontal'|
  'FlowVertical'|
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

  ResizeFlexible: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: '0%'
  },

  ResizeNone: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: 'auto'
  },

  BackgroundDark: {
    background: theme.color.brand.dark,
    color: theme.color.brand.white
  },

  BackgroundLight: {
    background: theme.color.brand.lightGrey
  },

  ContentCenter: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  FlowHorizontal: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row'
  },

  FlowVertical: {
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
