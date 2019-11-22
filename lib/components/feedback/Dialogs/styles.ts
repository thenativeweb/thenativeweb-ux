import { Styles } from 'jss';

const styles: Styles<'Dialogs' | 'Actions'> = {
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

export { styles };
