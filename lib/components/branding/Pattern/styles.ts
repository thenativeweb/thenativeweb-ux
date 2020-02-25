import { ComponentClassNames, Theme } from '../../..';

export type PatternClassNames =
  'Pattern';

const styles = (theme: Theme): ComponentClassNames<PatternClassNames> => ({
  Pattern: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    backgroundSize: '300px 300px',
    backgroundImage: theme.components.Pattern.backgroundImage,
    opacity: theme.components.Pattern.opacity
  }
});

export { styles };
