import { Styles } from 'jss';
import { Theme } from '../../../themes';

export type SplitViewClassNames =
  'SplitView' |
  'SplitViewWithCodeVisible' |
  'TogglePanel' |
  'PreviewPanel' |
  'CodePanel' |
  'ToggleButtonCode';

const styles = (theme: Theme): Styles<SplitViewClassNames> => ({
  SplitView: {
    marginTop: theme.space(2),
    position: 'relative',
    display: 'grid',
    gridTemplateColumns: `${theme.space(4)}px 0px 1fr`,
    margin: `${theme.space(3)}px 0 ${theme.space(3)}px 0`
  },

  SplitViewWithCodeVisible: {
    gridTemplateColumns: `${theme.space(4)}px 1fr 1fr`,

    '& $ToggleButtonCode svg': {
      transform: 'rotate(180deg)'
    }
  },

  TogglePanel: {
    background: `${theme.color.brand.grayDark} !important`,
    borderRight: `1px solid ${theme.color.brand.gray}`
  },

  PreviewPanel: {
    maxHeight: '50vh',
    overflow: 'auto',
    flexGrow: 1,
    border: `1px solid ${theme.color.brand.grayLight}`,
    padding: theme.space(2),

    '& hr': {
      background: theme.color.brand.grayLight,
      margin: `${theme.space(2)}px -${theme.space(2)}px`,
      height: '1px',
      borderStyle: 'solid',
      border: '0'
    }
  },

  CodePanel: {
    maxHeight: '50vh',
    height: '100%',
    width: '100%',
    background: theme.color.brand.grayDark,
    flexGrow: 0,
    flexShrink: 0,
    overflow: 'hidden',
    position: 'relative',

    '& > *': {
      width: '100%',
      height: '100%',
      overflow: 'auto'
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
      gridTemplateColumns: 'none',
      gridTemplateRows: `${theme.space(4)}px 0px 1fr`,

      '& $ToggleButtonCode svg': {
        transform: 'rotate(90deg)'
      }
    },

    SplitViewWithCodeVisible: {
      gridTemplateColumns: 'none',
      gridTemplateRows: `${theme.space(4)}px 1fr 1fr`,

      '& $ToggleButtonCode svg': {
        transform: 'rotate(-90deg)'
      }
    }
  }
});

export { styles };
