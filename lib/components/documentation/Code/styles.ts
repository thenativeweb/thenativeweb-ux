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
      marginTop: theme.space(3),
      marginBottom: theme.space(6),
      border: 0,
      display: 'block',
      color: '#abb2bf',
      background: '#282c34',
      padding: [ theme.space(2), theme.space(3) ],
      overflowX: 'auto'
    }
  }
});

export { styles };
