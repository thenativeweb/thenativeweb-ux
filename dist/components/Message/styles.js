"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var styles = function styles(theme) {
  return {
    Message: {
      padding: "".concat(theme.space(1.5), "px ").concat(theme.space(2), "px"),
      marginBottom: "".concat(theme.space(1), "px"),
      fontFamily: theme.font.family["default"]
    },
    TypeError: {
      background: theme.color.state.error,
      color: theme.color.brand.white,
      '& $Icon': {
        fill: theme.color.brand.white
      }
    },
    TypeInfo: {
      background: theme.color.brand.lightGrey
    },
    WithIcon: {
      display: 'flex',
      '& $IconContainer': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 0,
        flexBasis: 'auto',
        marginRight: "".concat(theme.space(1.5), "px")
      },
      '&. $Content': {
        flexGrow: 1,
        flexBasis: '100%'
      }
    },
    IconContainer: {},
    Icon: {},
    Content: {}
  };
};

var _default = styles;
exports["default"] = _default;