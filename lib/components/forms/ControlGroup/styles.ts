import { Styles } from 'jss';
import { Theme } from '../../..';

export type ControlGroupClassNames = 'ControlGroup';

const styles = (theme: Theme): Styles<ControlGroupClassNames> => ({
  ControlGroup: {
    display: 'flex',
    marginBottom: theme.space(2)
  }
});

export { styles };
