import { ComponentClassNames } from '../../..';

const styles: ComponentClassNames<'Dialogs' | 'Actions'> = {
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
