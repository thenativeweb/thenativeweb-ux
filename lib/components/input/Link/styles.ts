import { ComponentClassNames, Theme } from '../../..';

export type LinkClassNames = 'Link';

const styles = (theme: Theme): ComponentClassNames<LinkClassNames> => ({
  Link: {
    color: theme.color.brand.highlight,
    fontSize: 'inherit',
    textDecoration: 'none',

    '&:hover': {
      textDecoration: 'none'
    }
  }
});

export { styles };
