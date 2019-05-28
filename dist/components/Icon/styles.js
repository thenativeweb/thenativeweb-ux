"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var styles = function styles(theme) {
  return {
    Icon: {
      '& a': {
        fill: 'currentColor'
      }
    },
    ColorDefault: {
      fill: theme.color.brand.dark
    },
    ColorCurrent: {
      fill: 'currentColor'
    },
    ColorHighlight: {
      fill: theme.color.brand.highlight
    },
    ColorWhite: {
      fill: theme.color.brand.white
    },
    SizeXs: {
      width: theme.icon.size.xs,
      height: theme.icon.size.xs
    },
    SizeSm: {
      width: theme.icon.size.sm,
      height: theme.icon.size.sm
    },
    SizeMd: {
      width: theme.icon.size.md,
      height: theme.icon.size.md
    },
    SizeLg: {
      width: theme.icon.size.lg,
      height: theme.icon.size.lg
    },
    SizeXl: {
      width: theme.icon.size.xl,
      height: theme.icon.size.xl
    },
    SizeXxl: {
      width: theme.icon.size.xxl,
      height: theme.icon.size.xxl
    },
    TypeInline: {
      display: 'inline-block',
      verticalAlign: 'middle',
      marginBottom: '0.2em',
      marginLeft: '0.05em',
      marginRight: '0.05em'
    },
    TypeFlexAuto: {
      flexGrow: 0,
      flexShrink: 0,
      flexBasis: 'auto'
    }
  };
};

var _default = styles;
exports["default"] = _default;