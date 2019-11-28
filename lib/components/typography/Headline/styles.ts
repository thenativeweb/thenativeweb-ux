import { Styles } from 'jss';
import { Theme } from '../../..';

export type HeadlineClassNames = 'Headline' | 'Level1' | 'Level2';

const styles = (theme: Theme): Styles<HeadlineClassNames> => ({
  Headline: {
    fontFamily: theme.font.family.default,
    opacity: 0.95,
    padding: 0,
    margin: 0
  },

  Level1: {
    fontSize: theme.font.size.xl,
    fontWeight: 600,
    borderBottom: `1px solid ${theme.color.content.border}`,
    padding: `${theme.space(4)}px 0 ${theme.space(2)}px 0`,
    marginBottom: `${theme.space(2)}px`,

    '&:first-child': {
      paddingTop: 0
    }
  },

  Level2: {
    fontSize: theme.font.size.lg,
    fontWeight: 600,
    textAlign: 'left',
    padding: `${theme.space(4)}px 0 ${theme.space(1)}px 0`,
    marginBottom: `${theme.space(2)}px`
  }
});

export { styles };
