import { Styles } from 'jss';
import { Theme } from '../../..';

export type PoweredByClassNames = 'PoweredBy' | 'Intro';

const styles = (theme: Theme): Styles<PoweredByClassNames> => ({
  PoweredBy: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: theme.font.family.default,
    fontSize: theme.font.size.sm,
    textAlign: 'center',
    paddingTop: theme.space(0.5),
    paddingBottom: theme.space(0.5)
  },

  Intro: {
    marginTop: theme.space(1),
    marginBottom: theme.space(1),
    color: theme.color.brand.grayLight
  }
});

export { styles };
