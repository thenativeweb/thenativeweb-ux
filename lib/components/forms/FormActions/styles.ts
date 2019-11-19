import { Styles } from 'jss';
import { Theme } from '../../..';

export type FormActionsClassNames = 'FormActions' | 'TypeDefault' | 'TypeStacked';

const styles = (theme: Theme): Styles<FormActionsClassNames> => ({
  FormActions: {
    display: 'flex',
    borderTop: `1px solid ${theme.color.content.border}`,
    paddingTop: `${theme.space(1)}px`,
    marginTop: `${theme.space(2)}px`
  },

  TypeDefault: {
    justifyContent: 'flex-end'
  },

  TypeStacked: {
    flexDirection: 'column',
    justifyContent: 'stretch',
    marginBottom: `${theme.space(2)}px`,

    '& > *': {
      marginRight: 0,
      marginBottom: 0
    }
  }
});

export { styles };
