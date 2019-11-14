import { Styles } from 'jss';
import { Theme } from '../../..';

export type CheckBoxClassNames = 'CheckBox';

const styles = (theme: Theme): Styles<CheckBoxClassNames> => ({
  CheckBox: {
    fontFamily: theme.font.family.default
  }
});

export { styles };
