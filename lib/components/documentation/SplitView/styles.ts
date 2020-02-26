import { ComponentClassNames, Theme } from '../../..';

export type SplitViewClassNames =
  'SplitView' |
  'SplitViewWithCodeVisible' |
  'WithPreviewPadding' |
  'TogglePanel' |
  'PreviewPanel' |
  'CodePanel' |
  'ToggleButtonCode';

const styles = (theme: Theme): ComponentClassNames<SplitViewClassNames> => ({
  SplitView: {
    marginTop: theme.space(2),
    position: 'relative',
    display: 'flex',
    margin: `${theme.space(3)}px 0 ${theme.space(3)}px 0`,
    overflow: 'hidden'
  },

  SplitViewWithCodeVisible: {
    '& $CodePanel': {
      display: 'block',
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: '50%'
    },

    '& $ToggleButtonCode svg': {
      transform: 'rotate(180deg)'
    }
  },

  WithPreviewPadding: {
    '& $PreviewPanel': {
      padding: theme.space(2)
    }
  },

  TogglePanel: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: `${theme.space(3)}px`,
    background: `${theme.color.brand.grayDark} !important`,
    borderRight: `1px solid ${theme.color.brand.gray}`
  },

  CodePanel: {
    height: '100%',
    width: '100%',
    maxHeight: '50vh',
    flexGrow: 0,
    flexShrink: 0,
    background: theme.color.brand.grayDark,
    overflowY: 'auto',
    position: 'relative',
    display: 'none',

    '& > *': {
      width: '100%',
      height: '100%',
      overflow: 'auto'
    }
  },

  PreviewPanel: {
    position: 'relative',
    minHeight: '100%',
    overflow: 'auto',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: '50%',
    border: `1px solid ${theme.color.brand.grayLight}`,

    '& hr:not([class])': {
      background: theme.color.brand.grayLight,
      margin: `${theme.space(2)}px -${theme.space(2)}px`,
      height: '1px',
      borderStyle: 'solid',
      border: '0'
    }
  },

  ToggleButtonCode: {
    flexBasis: 'auto',
    width: '100%',
    height: '100%',
    '-webkit-tap-highlight-color': 'rgba(0,0,0,0)',

    '&:focus': {
      border: '0 !important'
    },

    '& svg': {
      transition: 'transform 300ms',
      fill: `${theme.color.brand.white} !important`
    }
  },

  [theme.breakpoints.down('sm')]: {
    SplitView: {
      flexDirection: 'column',

      '& $ToggleButtonCode svg': {
        transform: 'rotate(90deg)'
      }
    },

    SplitViewWithCodeVisible: {
      '& $ToggleButtonCode svg': {
        transform: 'rotate(-90deg)'
      }
    }
  },

  [theme.breakpoints.up('md')]: {
    PreviewPanel: {
      maxHeight: '50vh'
    }
  }
});

export { styles };
