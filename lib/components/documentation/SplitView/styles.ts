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
    background: theme.color.brand.grayDark,
    marginTop: theme.space(2),
    position: 'relative',
    display: 'flex',
    margin: `${theme.space(3)}px 0 ${theme.space(3)}px 0`,
    overflow: 'hidden'
  },

  SplitViewWithCodeVisible: {
    flexBasis: '50%',
    flexGrow: 1,
    flexShrink: 1
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
    maxHeight: '50vh',
    flexGrow: 0,
    flexShrink: 0,
    overflowY: 'auto',
    position: 'relative',

    '& > *': {
      width: '100%',
      height: '100%',
      overflow: 'auto'
    }
  },

  PreviewPanel: {
    background: theme.color.brand.white,
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
    CodePanel: {
      height: '0px'
    },

    PreviewPanel: {
      maxHeight: '50vh'
    },

    SplitView: {
      flexDirection: 'column',

      '& $ToggleButtonCode svg': {
        transform: 'rotate(90deg)'
      }
    },

    SplitViewWithCodeVisible: {
      '& $CodePanel': {
        height: '50vh',
        width: '100%'
      },

      '& $ToggleButtonCode svg': {
        transform: 'rotate(-90deg)'
      }
    }
  },

  [theme.breakpoints.up('md')]: {
    CodePanel: {
      width: '0%'
    },

    PreviewPanel: {
      maxHeight: '50vh'
    },

    SplitViewWithCodeVisible: {
      '& $CodePanel': {
        flexBasis: '50%',
        width: '50%'
      },

      '& $ToggleButtonCode svg': {
        transform: 'rotate(180deg)'
      }
    }
  }
});

export { styles };
