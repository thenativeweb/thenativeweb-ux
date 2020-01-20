import { Styles } from 'jss';
import { Theme } from '../../..';

export type TagsClassNames =
  'Tags' |
  'Tag';

const styles = (theme: Theme): Styles => ({
  Tags: {
    fontSize: theme.font.size.sm,
    fontWeight: 600
  },

  Tag: {
    display: 'inline-block',
    background: theme.color.brand.grayLight,
    borderRadius: theme.space(2),
    padding: [ theme.space(0.25), theme.space(1) ],
    marginRight: theme.space(1),
    color: theme.color.brand.grayDark
  }
});

export { styles };
