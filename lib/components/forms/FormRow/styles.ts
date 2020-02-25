import { ComponentClassNames, Theme } from '../../..';

export type FormRowClassNames = 'FormRow';

const styles = (theme: Theme): ComponentClassNames<FormRowClassNames> => ({
  FormRow: {
    display: 'flex',
    marginBottom: `${theme.space(2)}px`
  }
});

export { styles };
