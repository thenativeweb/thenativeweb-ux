import { Styles } from 'jss';
import { Theme } from '../../..';

export type TagsClassNames =
  'Tags' |
  'Tag';

const getStyles = (theme: Theme): Styles => {
  const styles: Styles = {
    Tags: {
      fontSize: theme.font.size.sm,
      fontWeight: 600
    },

    Tag: {
      display: 'inline-block',
      background: theme.color.brand.grayLight,
      borderRadius: theme.space(2),
      padding: `${theme.space(0.25)}px ${theme.space(1)}px`,
      marginRight: theme.space(1),
      color: theme.color.brand.grayDark
    }
  };

  return styles;
};

export { getStyles as styles };
