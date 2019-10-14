import { Styles } from 'jss';
import { Theme } from '../../..';

export type FormClassNames = 'Form';

const styles = (theme: Theme): Styles<FormClassNames> => ({
  Form: {
    fontFamily: theme.font.family.default
  }
});

export default styles;
