import { ComponentClassNames, Theme } from '../../..';

export type LinkClassNames = 'Link';

const styles = (theme: Theme): ComponentClassNames<LinkClassNames> => ({
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

export { styles };
