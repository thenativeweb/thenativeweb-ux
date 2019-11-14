import { Styles } from 'jss';
import { Theme } from '../../..';

export type PatternClassNames =
  'Pattern' |
  'TypeDefault';

const styles = (theme: Theme): Styles<PatternClassNames> => ({
  Pattern: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    backgroundSize: '300px 300px'
  },

  TypeDefault: {
    backgroundImage: theme.components.Pattern.backgroundImage,
    opacity: theme.components.Pattern.opacity
  }
});

export { styles };
