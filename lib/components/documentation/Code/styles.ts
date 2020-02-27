import color from 'color';
import { ComponentClassNames, Theme } from '../../..';

export type CodeClassNames =
  'Code' |
  'CodeContainer'|
  'WithLineNumbers';

const styles = (theme: Theme): ComponentClassNames<CodeClassNames> => ({
  Code: {
    marginBottom: theme.space(3),
    background: theme.color.brand.grayDark,
    maxWidth: theme.space(100),
    display: 'block',

    '& code': {
      fontFamily: theme.font.family.code,
      paddingTop: theme.space(2),
      paddingBottom: theme.space(2),
      paddingLeft: theme.space(2),
      paddingRight: '0 !important',
      color: '#666',
      fontSize: '15px',
      display: 'block'
    },

    '& $CodeContainer': {
      border: 0,
      color: color(theme.color.brand.grayModest).lighten(0.5).rgb().toString(),
      paddingRight: `${theme.space(1)}px !important`,
      overflow: 'auto'
    }
  },

  CodeContainer: {},

  WithLineNumbers: {}
});

export { styles };
