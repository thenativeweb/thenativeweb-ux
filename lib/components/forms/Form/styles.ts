import { ComponentClassNames, Theme } from '../../..';

export type FormClassNames = 'Form';

const styles = (theme: Theme): ComponentClassNames<FormClassNames> => ({
  Form: {
    fontFamily: theme.font.family.default
  }
});

export { styles };
