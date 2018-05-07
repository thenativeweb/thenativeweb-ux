const styles = function (theme) {
  return {
    Button: {
      display: 'flex',
      'align-items': 'center',
      'justify-content': 'center',
      'background-color': theme.color.brand.dark,
      'border-color': theme.color.brand.dark,
      'border-width': '1px',
      'border-style': 'solid',
      color: theme.color.brand.white,
      'font-family': theme.font.family.default,
      cursor: 'pointer',
      'white-space': 'nowrap',
      overflow: 'hidden',
      'text-overflow': 'ellipsis',
      'border-radius': theme.components.borderRadius.default,
      outline: 'none',
      transition: 'background-color 300ms',
      'will-change': 'background-color',

      '&:focus': {
        'background-color': theme.color.brand.highlight,
        'border-color': theme.color.interaction.focus
      },

      '&:last-child': {
        'margin-right': 0
      }
    },

    IsPressed: {
      'background-color': 'theme.color.brand.dark',
      border: '1px solid theme.color.brand.dark',
      opacity: 0.9
    },

    AdjustFlex: {
      'flex-grow': 1,
      'flex-shrink': 1,
      'flex-basis': '100%'
    },

    AdjustAuto: {
      'flex-grow': 0,
      'flex-shrink': 0
    },

    SizeDefault: {
      padding: '7px 11px',
      margin: theme.grid.stepSize,
      'margin-left': 0,
      'font-size': theme.font.size.default
    },

    SizeS: {
      padding: '7px 11px',
      'font-size': theme.font.size.small,
      margin: 0,
      'margin-right': '6px'
    },

    TypePrimary: {
      'background-color': theme.color.brand.highlight,
      'border-color': theme.color.brand.highlight
    },

    TypeIcon: {
      display: 'flex',
      'align-items': 'center',
      'flex-direction': 'row',
      'line-height': 'normal'
    },

    TypeSubtle: {
      'background-color': 'transparent',
      'border-color': 'transparent',
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
        'border-color': 'transparent',
        color: theme.color.brand.highlight,

        '& $Icon': {
          fill: theme.color.brand.highlight
        }
      },

      '&$IsPressed': {
        color: theme.color.brand.dark,

        '& $Icon': {
          fill: `${theme.color.brand.dark} !important`
        }
      }
    },

    TypeIconOnly: {
      'border-color': 'transparent',
      display: 'flex',
      'align-items': 'center',
      'justify-content': 'center',
      margin: 0,
      padding: 0,
      background: 'transparent',

      '&:focus': {
        'border-color': 'transparent',
        'text-decoration': 'underline',
        background: 'none'
      },

      '& $Icon': {
        fill: theme.color.brand.dark,
        'margin-right': 0
      },

      '&:hover': {
        '& $Icon': {
          fill: theme.color.brand.highlight
        }
      },

      '&$IsPressed': {
        '& $Icon': {
          fill: `${theme.color.brand.dark} !important`,
          'margin-right': 0
        }
      }
    },

    Hint: {
      opacity: 0.5,
      'font-size': theme.font.size.small,
      'padding-left': '0.75em'
    },

    Icon: {
      'flex-grow': 0,
      'flex-shrink': 0,
      'flex-basis': 'auto',
      'margin-right': theme.grid.stepSize,
      color: theme.color.brand.white,
      fill: theme.color.brand.white
    }
  };
};

export default styles;
