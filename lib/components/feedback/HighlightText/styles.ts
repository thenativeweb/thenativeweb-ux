import color from 'color';
import { ComponentClassNames, Theme } from '../../..';

export type HighlightTextClassNames =
  'HighlightText' |
  'Highlight';

const styles = (theme: Theme): ComponentClassNames<HighlightTextClassNames> => ({
  HighlightText: {},

  Highlight: {
    background: color(theme.color.brand.highlight).
      whiten(0.9).
      fade(0.2).
      rgb().
      string(),
    padding: '0px 0 1px 0'
  }
});

export { styles };
