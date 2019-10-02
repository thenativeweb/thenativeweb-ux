import { Styles } from 'jss';

const styles: Styles = {
  Dialogs: {},

  Actions: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',

    '& *': {
      flexGrow: 0,
      'max-width': '200px'
    }
  }
};

export default styles;
