var styles = function styles(theme) {
  return {
    Dropdown: {
      position: 'relative',
      display: 'flex',
      'align-items': 'center',
      'justify-content': 'center',
      overflow: 'hidden',
      background: theme.color.brand.dark,
      border: theme.color.brand.dark,
      'font-family': theme.font.family.default,

      '& select': {
        'flex-grow': 1,
        'flex-shrink': 1,
        'flex-basis': '100%',
        background: 'inherit',
        'font-size': 'inherit',
        'font-weight': 'inherit',
        border: 0,
        color: theme.color.brand.white,
        cursor: 'pointer',
        outline: 'none',
        appearance: 'none',
        'white-space': 'nowrap',
        overflow: 'hidden',
        'text-overflow': 'ellipsis',
        'border-radius': theme.components.borderRadius.default,
        'font-family': 'inherit',

        '&:focus': {
          outline: 'none'
        }
      },

      '&:last-child': {
        '& select': {
          'margin-right': 0
        }
      }
    },

    SizeDefault: {
      margin: '16px',
      'margin-left': 0,
      'font-size': theme.font.size.default,

      '& select': {
        padding: '7px 40px 7px 11px'
      }
    },

    SizeS: {
      'font-size': theme.font.size.small,
      margin: 0,
      'margin-right': '6px',

      '& select': {
        padding: '7px 40px 7px 11px'
      }
    },

    IsFocused: {
      background: theme.color.brand.highlight
    },

    CollapseIcon: {
      'flex-grow': 0,
      'flex-shrink': 0,
      'flex-basis': 'auto',
      transform: 'rotate(90deg)',
      'pointer-events': 'none',
      position: 'absolute',
      right: '7px',
      top: '50%',
      'margin-top': '-8px'
    }
  };
};

export default styles;