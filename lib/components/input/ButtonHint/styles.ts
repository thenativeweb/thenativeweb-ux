import { Styles } from 'jss';
import { Theme } from '../../..';

export type ButtonHintClassNames = 'ButtonHint';

const styles = (theme: Theme): Styles<ButtonHintClassNames> => ({
  ButtonHint: {
    opacity: 0.5,
    fontSize: theme.font.size.sm,
    paddingLeft: '0.75em'
  }
});

export { styles };
