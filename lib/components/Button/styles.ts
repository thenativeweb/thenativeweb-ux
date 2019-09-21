const styles = function (theme) {
  return {
    Button: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.color.brand.dark,
      borderColor: theme.color.brand.dark,
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

      '&:focus': {
        'background-color': theme.color.brand.highlight,
        borderColor: theme.color.interaction.focus
      },

      '&:active': {
        'background-color': theme.color.brand.dark,
        opacity: 0.9
      },

      '&:last-child': {
        marginRight: 0
      }
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
      lineHeight: 'normal'
    },

    TypeSubtle: {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      color: theme.color.brand.dark,

      '& $Icon': {
        fill: theme.color.brand.dark
      },

      '&:hover': {
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

      '&:active': {
        color: theme.color.brand.dark,

        '& $Icon': {
          fill: `${theme.color.brand.dark} !important`
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
        fill: theme.color.brand.dark,
        marginRight: 0
      },

      '&:hover': {
        '& $Icon': {
          fill: theme.color.brand.highlight
        }
      },

      '&:active': {
        '& $Icon': {
          fill: `${theme.color.brand.dark} !important`,
          marginRight: 0
        }
      }
    },

    Hint: {
      opacity: 0.5,
      fontSize: theme.font.size.sm,
      paddingLeft: '0.75em'
    },

    Icon: {
      flexGrow: 0,
      flexShrink: 0,
      flexBasis: 'auto',
      marginRight: theme.space(1),
      color: theme.color.brand.white,
      fill: theme.color.brand.white
    }
  };
};

export default styles;
