import { Styles } from 'jss';
import { Theme } from '../../..';

export type ContainerClassNames =
  'Container' |
  'BackgroundDark' |
  'BackgroundLight' |
  'BackgroundNone' |
  'HorizontalLeft' |
  'HorizontalCenter'|
  'HorizontalRight' |
  'HorizontalStretch' |
  'IsScrollable' |
  'VerticalTop' |
  'VerticalCenter'|
  'VerticalBottom' |
  'VerticalStretch';

const styles = (theme: Theme): Styles<ContainerClassNames> => ({
  Container: {
    boxSizing: 'border-box',
    position: 'relative',
    fontFamily: theme.font.family.default,
    fontSize: theme.font.size.md,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    width: '100%',
    height: '100%',

    '& > *': {
    }
  },

  BackgroundDark: {
    background: theme.color.brand.grayDark,
    color: theme.color.brand.white
  },

  BackgroundLight: {
    background: theme.color.brand.grayLight
  },

  BackgroundNone: {
    background: 'none'
  },

  // For all the horizontal and vertical positioning options we're not
  // using alignItems and justifyContent but rather margins
  // in combination with the 'display: flex' of the parent.
  // This will make sure the container is scrollable.
  // For a detailed explanation see
  // https://stackoverflow.com/questions/33454533/cant-scroll-to-top-of-flex-
  // item-that-is-overflowing-container?answertab=active#tab-top

  HorizontalLeft: {
    // We're not using alignItems: 'flex-start' here but an auto margin, see comment above.
    '& > *': {
      marginRight: 'auto'
    }
  },

  HorizontalCenter: {
    '& > *': {
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },

  HorizontalRight: {
    // We're not using alignItems: 'flex-end' here but an auto margin, see comment above.
    '& > *': {
      marginLeft: 'auto'
    }
  },

  HorizontalStretch: {
    alignItems: 'stretch'
  },

  VerticalTop: {
    justifyContent: 'flex-start'
  },

  VerticalCenter: {
    // We're not using justifyContent: 'center' here but auto margin, see comment above.
    '& > *': {
      marginTop: 'auto',
      marginBottom: 'auto'
    }
  },

  VerticalBottom: {
    // We're not using justifyContent: 'flex-end' here but an auto margin.
    '& > *': {
      marginTop: 'auto'
    }
  },

  VerticalStretch: {
    alignItems: 'stretch',

    '& > *': {
      flexGrow: 1,
      flexShrink: 1
    }
  },

  IsScrollable: {
    overflow: 'auto',
    '-webkit-overflow-scrolling': 'touch'
  }
});

export { styles };
