import { ComponentClassNames, Theme } from '../../..';

export type ControlGroupClassNames = 'ControlGroup';

const styles = (theme: Theme): ComponentClassNames<ControlGroupClassNames> => ({
  ControlGroup: {
    display: 'flex',
    marginBottom: theme.space(2)
  }
});

export { styles };
