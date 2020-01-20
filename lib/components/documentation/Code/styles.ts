import { Styles } from 'jss';
import { Theme } from '../../../themes';

export type CodeClassNames =
  'Code';

const styles = (theme: Theme): Styles<CodeClassNames> => ({
  Code: {
    '& pre, code': {
      fontFamily: theme.font.family.code,
      fontSize: '15px'
    },

    '& code': {
      border: 0,
      display: 'block',
      color: '#e5e6eb',
      background: theme.color.brand.grayDark,
      padding: [ theme.space(2), theme.space(3) ],
      overflowX: 'auto',
      maxWidth: '800px'
    }
  }
});

export { styles };
