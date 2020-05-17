import { ComponentClassNames } from '../../..';
import { Theme } from '../../../themes/Theme';

export type ButtonClassNames =
  'Button' |
  'AdjustFlex' |
  'AdjustAuto' |
  'SizeMd' |
  'SizeSm' |
  'TypePrimary' |
  'TypeIcon' |
  'TypeSubtle' |
  'TypeIconOnly' |
  'Icon';

const getStyles = (theme: Theme): ComponentClassNames<ButtonClassNames> => {
  const styles: ComponentClassNames<ButtonClassNames> = {
    Button: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.color.brand.grayDark,
      borderColor: theme.color.brand.grayDark,
      borderWidth: '1px',
      borderStyle: 'solid',
      color: theme.color.brand.white,
      fontFamily: theme.font.family.default,
      cursor: 'pointer',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      borderRadius: theme.components.borderRadius.default,
      outline: 'none',
      transition: 'background-color 300ms cubic-bezier(0.190, 1.000, 0.220, 1.000)',
      willChange: 'background-color',

      '&:disabled': {
        cursor: 'not-allowed',
        opacity: 0.3
      },

      '&:focus': {
        'background-color': theme.color.brand.highlight,
        borderColor: theme.color.interaction.focus
      },

      '&:active:enabled': {
        'background-color': theme.color.brand.grayDark,
        opacity: 0.9
      },

      '&:last-child': {
        marginRight: 0
      }
    },

    Icon: {
      flexGrow: 0,
      flexShrink: 0,
      flexBasis: 'auto',
      marginRight: theme.space(1)
    },

    AdjustFlex: {
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: '100%'
    },

    AdjustAuto: {
      flexGrow: 0,
      flexShrink: 0
    },

    SizeMd: {
      padding: `${theme.space(1)}px ${theme.space(1.5)}px`,
      margin: `${theme.space(1)}px`,
      marginLeft: 0,
      fontSize: theme.font.size.md
    },

    SizeSm: {
      padding: `${theme.space(1)}px ${theme.space(1.5)}px`,
      fontSize: theme.font.size.sm,
      margin: 0,
      marginRight: `${theme.space(1)}px`
    },

    TypePrimary: {
      backgroundColor: theme.color.brand.highlight,
      borderColor: theme.color.brand.highlight
    },

    TypeIcon: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      lineHeight: 'normal',

      // The fill color is applied as nested rule which increases specificity of
      // the selector. It therefore overrides the default fill color of the icon.
      '& $Icon': {
        fill: theme.color.brand.white
      }
    },

    TypeSubtle: {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      color: theme.color.brand.grayDark,

      '& $Icon': {
        fill: theme.color.brand.grayDark
      },

      '&:hover:enabled': {
        color: theme.color.brand.highlight,

        '& $Icon': {
          fill: theme.color.brand.highlight
        }
      },

      '&:focus': {
        background: 'transparent',
        color: theme.color.brand.highlight,
        border: `1px dotted ${theme.color.interaction.focus} !important`,
        borderRadius: '2px',

        '& $Icon': {
          fill: theme.color.brand.highlight
        }
      },

      '&:active:enabled': {
        color: theme.color.brand.grayDark,

        '& $Icon': {
          fill: `${theme.color.brand.grayDark} !important`
        }
      }
    },

    TypeIconOnly: {
      borderColor: 'transparent',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 0,
      padding: 0,
      background: 'transparent',

      '&:focus': {
        borderColor: 'transparent',
        textDecoration: 'underline',
        background: 'none',
        border: `1px dotted ${theme.color.interaction.focus} !important`,
        borderRadius: '2px',

        '& $Icon': {
          fill: theme.color.brand.highlight
        }
      },

      '& $Icon': {
        fill: theme.color.brand.grayDark,
        marginRight: 0
      },

      '&:hover:enabled': {
        '& $Icon': {
          fill: theme.color.brand.highlight
        }
      },

      '&:active:enabled': {
        '& $Icon': {
          fill: `${theme.color.brand.grayDark} !important`,
          marginRight: 0
        }
      }
    }
  };

  return styles;
};

export { getStyles as styles };
