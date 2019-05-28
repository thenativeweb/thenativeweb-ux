"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var styles = function styles(theme) {
  return {
    Dropdown: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      background: theme.color.brand.dark,
      border: theme.color.brand.dark,
      fontFamily: theme.font.family["default"],
      '& select': {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: '100%',
        background: 'inherit',
        fontSize: 'inherit',
        fontWeight: 'inherit',
        border: 0,
        color: theme.color.brand.white,
        cursor: 'pointer',
        outline: 'none',
        appearance: 'none',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        borderRadius: theme.components.borderRadius["default"],
        fontFamily: 'inherit',
        '&:focus': {
          outline: 'none'
        }
      },
      '&:last-child': {
        '& select': {
          marginRight: 0
        }
      }
    },
    SizeSm: {
      fontSize: theme.font.size.sm,
      margin: 0,
      marginRight: '6px',
      '& select': {
        padding: '7px 40px 7px 11px'
      }
    },
    SizeMd: {
      margin: '16px',
      marginLeft: 0,
      fontSize: theme.font.size.md,
      '& select': {
        padding: '7px 40px 7px 11px'
      }
    },
    IsFocused: {
      background: theme.color.brand.highlight
    },
    CollapseIcon: {
      flexGrow: 0,
      flexShrink: 0,
      flexBasis: 'auto',
      transform: 'rotate(90deg)',
      pointerEvents: 'none',
      position: 'absolute',
      right: '7px',
      top: '50%',
      marginTop: '-8px'
    }
  };
};

var _default = styles;
exports["default"] = _default;