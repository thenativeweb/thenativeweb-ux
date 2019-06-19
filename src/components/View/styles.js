const styles = theme => ({
  View: {
    'box-sizing': 'border-box',
    position: 'relative',
    fontFamily: theme.font.family.default,
    fontSize: theme.font.size.md
  },

  AdjustFlex: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: '0%'
  },

  AdjustAuto: {
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

  OrientationCentered: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  OrientationHorizontal: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row'
  },

  OrientationVertical: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },

  AlignItemsCenter: {
    alignItems: 'center'
  },

  JustifyContentCenter: {
    justifyContent: 'center'
  },

  ScrollableNone: {
    overflow: 'hidden'
  },

  ScrollableAuto: {
    '-webkit-overflow-scrolling': 'touch',
    overflow: 'auto'
  }
});

export default styles;
