import { Styles } from 'jss';
import Theme from '../../../themes/Theme';

const styles: Styles = (theme: Theme): Styles => ({
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
    color: theme.color.brand.dark,
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

export default styles;
