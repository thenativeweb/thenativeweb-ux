const styles = theme => ({
  View: {
    'box-sizing': 'border-box',
    position: 'relative',
    'font-family': theme.font.family.default,
    'font-size': theme.font.size.default
  },

  AdjustFlex: {
    'flex-grow': 1,
    'flex-shrink': 1,
    'flex-basis': '0%'
  },

  AdjustAuto: {
    'flex-grow': 0,
    'flex-shrink': 0,
    'flex-basis': 'auto'
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
    'flex-direction': 'row',
    'align-items': 'center',
    'justify-content': 'center'
  },

  OrientationHorizontal: {
    width: '100%',
    height: '100%',
    display: 'flex',
    'flex-direction': 'row'
  },

  OrientationVertical: {
    width: '100%',
    height: '100%',
    display: 'flex',
    'flex-direction': 'column'
  },

  AlignItemsCenter: {
    'align-items': 'center'
  },

  JustifyContentCenter: {
    'justify-content': 'center'
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
