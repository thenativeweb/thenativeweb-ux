import color from 'color';
import { Styles } from 'jss';
import { Theme } from '../../..';

// We explicitly don't set a return type here since the component is then able
// automatically to extract the classnames from the styles object.
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const getStyles = (theme: Theme) => {
  const styles: Styles = {
    Breadcrumbs: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center'
    },

    Separator: {
      display: 'inline-flex'
    },

    Breadcrumb: {
      display: 'inline'
    },

    ColorLight: {
      color: color(theme.color.brand.grayDark).lighten(2).rgb().toString()
    },

    ColorDark: {
      color: color(theme.color.brand.grayDark).lighten(1).rgb().toString()
    },

    SizeSm: {
      fontSize: theme.font.size.sm,

      '& $Separator': {
        marginLeft: '2px'
      }
    },

    SizeMd: {
      fontSize: theme.font.size.md,

      '& $Separator': {
        marginLeft: theme.space(1),
        marginRight: theme.space(0.5)
      }
    }
  };

  return styles;
};

export { getStyles };
