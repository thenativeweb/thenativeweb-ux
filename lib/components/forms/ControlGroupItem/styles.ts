import { Styles } from 'jss';
import { Theme } from '../../..';

export type ControlGroupItemClassNames =
  'ControlGroupItem' |
  '&:last-child' |
  'AdjustFlex' |
  'AdjustAuto' |
  'Labeled' |
  'Label' |
  'Control' |
  'TypeCheckBox';

const styles = (theme: Theme): Styles<ControlGroupItemClassNames> => ({
  ControlGroupItem: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },

  '&:last-child': {
    marginRight: 0
  },

  AdjustFlex: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: '100%'
  },

  AdjustAuto: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: 'auto'
  },

  Labeled: {
    marginRight: '10px'
  },

  Label: {
    marginBottom: '6px',
    color: theme.color.brand.grayDark,
    fontWeight: 400,
    display: 'flex',

    '& label': {
      flexGrow: 1,
      flexShrink: 1
    },

    '& a': {
      display: 'flex',
      flexGrow: 0,
      flexShrink: 0,
      flexBasis: 'auto',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: 0.75
    },

    opacity: 1
  },

  Control: {
  },

  TypeCheckBox: {
    '& $Control': {
      paddingRight: '6px'
    }
  }
});

export { styles };
