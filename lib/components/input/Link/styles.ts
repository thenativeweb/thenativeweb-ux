import { Styles } from 'jss';
import { Theme } from '../../..';

export type LinkClassNames = 'Link';

const styles = (theme: Theme): Styles => ({
  Link: {
    color: theme.color.brand.highlight,
    textDecoration: 'none',
    fontWeight: 400,
    fontFamily: theme.font.family.default,
    fontSize: 'inherit',

    '&:hover': {
      textDecoration: 'none'
    }
  }
});

export default styles;
