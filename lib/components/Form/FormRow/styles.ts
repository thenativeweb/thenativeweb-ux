import { Styles } from 'jss';
import { Theme } from '../../..';

export type FormRowClassNames = 'FormRow';

const styles = (theme: Theme): Styles<FormRowClassNames> => ({
  FormRow: {
    display: 'flex',
    marginBottom: `${theme.space(2)}px`
  }
});

export default styles;
