import { ComponentClassNames, Theme } from '../../..';

export type TextClassNames =
  'Text' |
  'AdjustAuto' |
  'AdjustFlex' |
  'SizeMd' |
  'SizeSm' |
  'BreakLines';

const styles = (theme: Theme): ComponentClassNames<TextClassNames> => ({
  Text: {
    display: 'block',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    color: 'inherit',
    fontFamily: theme.font.family.default
  },

  AdjustAuto: {},

  AdjustFlex: {
    flexGrow: 1,
    flexShrink: 1
  },

  SizeMd: {
    padding: `${theme.space(1)}px 0`,
    fontSize: theme.font.size.md
  },

  SizeSm: {
    padding: `${theme.space(1)}px 0`,
    fontSize: theme.font.size.sm
  },

  BreakLines: {
    whiteSpace: 'normal'
  }
});

export { styles };
