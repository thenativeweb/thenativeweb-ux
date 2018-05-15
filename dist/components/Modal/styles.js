'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var styles = function styles(theme) {
  return {
    Modal: {
      position: 'fixed',
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      'pointer-events': 'none',
      'z-index': theme.zIndex.modal,
      display: 'flex',
      'justify-content': 'center',
      'align-items': 'center'
    },

    Backdrop: {
      background: theme.color.backdrop,
      position: 'fixed',
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      overflow: 'hidden',
      'z-index': theme.zIndex.modal - 1,
      'pointer-events': 'none',
      opacity: 0,
      transition: 'opacity 300ms',
      'will-change': 'opacity'
    },

    IsVisible: {
      'pointer-events': 'all',
      opacity: 1
    },

    Content: {
      position: 'fixed',
      display: 'flex',
      'flex-direction': 'column',
      margin: 0,
      height: '100%',
      'z-index': theme.zIndex.modal,
      background: theme.color.brand.white,
      opacity: 0,
      padding: theme.grid.stepSize * 2 + 'px ' + theme.grid.stepSize * 3 + 'px',
      'pointer-events': 'all',
      'will-change': 'opacity, transform',
      'font-family': theme.font.family.default,
      'box-sizing': 'border-box'
    },

    ContentSizeS: {
      'min-width': theme.grid.stepSize * 30,
      'max-width': '100vw'
    },

    ContentSizeM: {
      'min-width': '61vw',
      'max-width': '100vw'
    },

    ContentSizeL: {
      'min-width': '90vw',
      'max-width': '100vw'
    },

    ContentAttachedSidebar: {
      left: theme.components.sidebar.width,
      top: 0
    },

    ContentAttachedLeft: {
      left: 0,
      top: 0
    },

    ContentAttachedRight: {
      right: 0,
      top: 0
    },

    ContentAttachedCenter: {
      'max-width': theme.grid.stepSize * 46,
      width: 'auto',
      height: 'auto',
      top: 0
    },

    Title: {
      'text-align': 'center',
      padding: 0,
      margin: 0,
      'font-weight': 600,

      '&::after': {
        content: '',
        display: 'block',
        'flex-grow': 0,
        'flex-shrink': 0,
        'flex-basis': 'auto',
        width: '100%',
        height: '1px',
        background: theme.color.brand.dark,
        opacity: 0.1,
        'margin-top': theme.grid.stepSize * 2,
        'margin-bottom': theme.grid.stepSize * 2,
        border: 'none'
      }
    }
  };
};

exports.default = styles;