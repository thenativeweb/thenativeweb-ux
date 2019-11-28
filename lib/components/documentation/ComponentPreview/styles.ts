import { Styles } from 'jss';
import { Theme } from '../../../themes';

export type ComponentPreviewClassNames =
  'ComponentPreview' |
  'Header' |
  'Content' |
  'PreviewPanel' |
  'CodePanel' |
  'CodePanelIsExpanded' |
  'CodePanelToggleButton' |
  'Code';

const styles = (theme: Theme): Styles<ComponentPreviewClassNames> => ({
  ComponentPreview: {
    marginBottom: `${theme.space(2)}px`
  },

  Header: {
    display: 'flex',
    justifyContent: 'flex-start'
  },

  Content: {
    marginTop: theme.space(4),
    position: 'relative',
    display: 'flex'
  },

  PreviewPanel: {
    flexGrow: 1,
    border: `1px solid ${theme.color.brand.grayLight}`,
    padding: theme.space(2)
  },

  CodePanel: {
    maxHeight: '50vh',
    width: theme.space(4),
    background: theme.color.brand.grayDark,
    flexShrink: 1,
    overflow: 'hidden',
    display: 'flex'
  },

  CodePanelIsExpanded: {
    flexGrow: 1,
    minWidth: '50%',
    maxWidth: '50%',

    '& $CodePanelToggleButton': {
      transform: 'rotate(180deg)'
    }
  },

  CodePanelToggleButton: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: 'auto',
    width: theme.space(4),
    height: '100%',
    transition: 'transform 300ms',

    '&:focus': {
      border: '0 !important'
    },

    '& svg': {
      fill: `${theme.color.brand.white} !important`
    }
  },

  Code: {
    borderLeft: `1px solid ${theme.color.brand.gray}`,
    overflow: 'auto',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: '100%'
  }
});

export { styles };
