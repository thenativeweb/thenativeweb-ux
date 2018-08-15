'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
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

    SizeXS: {
      width: theme.icon.size.xsmall,
      height: theme.icon.size.xsmall
    },

    SizeS: {
      width: theme.icon.size.small,
      height: theme.icon.size.small
    },

    SizeM: {
      width: theme.icon.size.medium,
      height: theme.icon.size.medium
    },

    SizeL: {
      width: theme.icon.size.large,
      height: theme.icon.size.large
    },

    SizeXL: {
      width: theme.icon.size.xlarge,
      height: theme.icon.size.xlarge
    },

    SizeXXL: {
      width: theme.icon.size.xxlarge,
      height: theme.icon.size.xxlarge
    },

    TypeInline: {
      display: 'inline-block',
      'vertical-align': 'middle',
      'margin-bottom': '0.2em',
      'margin-left': '0.05em',
      'margin-right': '0.05em'
    },

    TypeFlexAuto: {
      'flex-grow': 0,
      'flex-shrink': 0,
      'flex-basis': 'auto'
    }
  };
};

exports.default = styles;