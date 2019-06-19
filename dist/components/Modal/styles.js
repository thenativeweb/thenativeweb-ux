"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var styles = function styles(theme) {
  return {
    '@global': {
      '.thenativeweb-modal--visible': {
        pointerEvents: 'none'
      }
    },
    Modal: {
      position: 'fixed',
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      pointerEvents: 'none',
      zIndex: theme.zIndices.modal,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    Backdrop: {
      background: theme.color.backdrop,
      position: 'fixed',
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      overflow: 'hidden',
      zIndex: theme.zIndices.modal - 1,
      pointerEvents: 'none',
      opacity: 0,
      transition: 'opacity 300ms',
      willChange: 'opacity'
    },
    IsVisible: {
      pointerEvents: 'all',
      opacity: 1
    },
    Chrome: {
      position: 'fixed',
      display: 'flex',
      flexDirection: 'column',
      margin: 0,
      height: '100%',
      zIndex: theme.zIndices.modal,
      background: theme.color.brand.white,
      opacity: 0,
      pointerEvents: 'all',
      willChange: 'opacity, transform',
      fontFamily: theme.font.family["default"],
      boxSizing: 'border-box'
    },
    ChromeSizeSm: {
      width: '25vw'
    },
    ChromeSizeMd: {
      width: '61vw'
    },
    ChromeSizeLg: {
      width: '90vw'
    },
    ChromeSizeFullscreen: {
      width: '100vw'
    },
    ChromeAttachedSidebar: {
      left: theme.components.Sidebar.width,
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
      maxWidth: "".concat(theme.space(56), "px"),
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
      padding: "".concat(theme.space(2), "px ").concat(theme.space(4), "px"),
      borderBottom: "1px solid ".concat(theme.color.content.border)
    },
    HeaderText: {
      fontFamily: theme.font.family["default"],
      fontSize: theme.font.size.xl,
      opacity: 0.95,
      fontWeight: 600,
      textAlign: 'center'
    },
    HeaderCloseButton: {},
    Content: {
      flexGrow: 1,
      flexShrink: 1,
      padding: "".concat(theme.space(2), "px ").concat(theme.space(4), "px"),
      '-webkit-overflow-scrolling': 'touch',
      overflow: 'auto'
    },
    Title: {
      textAlign: 'center',
      padding: 0,
      margin: 0,
      fontWeight: 600,
      '&::after': {
        content: '',
        display: 'block',
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: 'auto',
        width: '100%',
        height: '1px',
        background: theme.color.brand.dark,
        opacity: 0.1,
        marginTop: "".concat(theme.space(3), "px"),
        marginBottom: "".concat(theme.space(3), "px"),
        border: 'none'
      }
    }
  };
};

var _default = styles;
exports["default"] = _default;