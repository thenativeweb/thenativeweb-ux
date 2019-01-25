"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var styles = function styles(theme) {
  return {
    '@global': {
      '.thenativeweb-modal--visible': {
        'pointer-events': 'none'
      }
    },
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
    Chrome: {
      position: 'fixed',
      display: 'flex',
      'flex-direction': 'column',
      margin: 0,
      height: '100%',
      'z-index': theme.zIndex.modal,
      background: theme.color.brand.white,
      opacity: 0,
      'pointer-events': 'all',
      'will-change': 'opacity, transform',
      'font-family': theme.font.family.default,
      'box-sizing': 'border-box'
    },
    ChromeSizeS: {
      width: '25vw'
    },
    ChromeSizeM: {
      width: '61vw'
    },
    ChromeSizeL: {
      width: '90vw'
    },
    ChromeSizeFullscreen: {
      width: '100vw'
    },
    ChromeAttachedSidebar: {
      left: theme.components.sidebar.width,
      top: 0
    },
    ChromeAttachedLeft: {
      left: 0,
      top: 0
    },
    ChromeAttachedRight: {
      right: 0,
      top: 0
    },
    ChromeAttachedCenter: {
      'max-width': theme.grid.stepSize * 46,
      width: 'auto',
      height: 'auto',
      top: 0
    },
    ChromePaddingNone: {
      padding: 0
    },
    Header: {
      flexBasis: 'auto',
      flexShrink: 0,
      display: 'flex',
      justifyContent: 'space-between',
      position: 'relative',
      padding: [theme.grid.stepSize * 2, theme.grid.stepSize * 3],
      'border-bottom': "1px solid ".concat(theme.color.content.border)
    },
    HeaderText: {
      'font-family': theme.font.family.default,
      opacity: 0.95,
      'font-size': theme.font.size.xlarge,
      'font-weight': 600,
      'text-align': 'center'
    },
    HeaderCloseButton: {},
    Content: {
      flexGrow: 1,
      flexShrink: 1,
      padding: [theme.grid.stepSize * 2, theme.grid.stepSize * 3],
      '-webkit-overflow-scrolling': 'touch',
      overflow: 'auto'
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

var _default = styles;
exports.default = _default;