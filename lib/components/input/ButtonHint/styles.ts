import { ComponentClassNames, Theme } from '../../..';

export type ButtonHintClassNames = 'ButtonHint';

const styles = (theme: Theme): ComponentClassNames<ButtonHintClassNames> => ({
  ButtonHint: {
    opacity: 0.5,
    fontSize: theme.font.size.sm,
    paddingLeft: '0.75em'
  }
});

export { styles };
