import { Styles } from 'jss';
import Theme from '../../themes/Theme';

const styles: Styles = (theme: Theme): Styles => ({
  Text: {
    display: 'block',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    color: 'inherit',
    fontFamily: theme.font.family.default
  },

  AdjustAuto: {
  },

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

export default styles;
