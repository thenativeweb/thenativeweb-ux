import { Styles } from 'jss';
import { Theme } from '../../..';

export type ModalRowClassNames =
  'ModalRow';

const styles = (theme: Theme): Styles<'ModalRow'> => ({
  ModalRow: {
    display: 'flex',
    marginBottom: `${theme.space(2)}px`
  }
});

export default styles;
