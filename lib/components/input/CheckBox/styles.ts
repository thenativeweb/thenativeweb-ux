import { ComponentClassNames, Theme } from '../../..';

export type CheckBoxClassNames = 'CheckBox';

const styles = (theme: Theme): ComponentClassNames<CheckBoxClassNames> => ({
  CheckBox: {
    fontFamily: theme.font.family.default
  }
});

export { styles };
