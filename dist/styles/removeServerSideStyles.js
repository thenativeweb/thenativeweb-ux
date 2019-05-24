"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var removeServerSideStyles = function removeServerSideStyles() {
  var style = document.getElementById('server-side-styles');

  if (style) {
    style.parentNode.removeChild(style);
  }
};

var _default = removeServerSideStyles;
exports["default"] = _default;