"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dialogs = _interopRequireDefault(require("./dialogs"));

var _getPortalRootNode = _interopRequireDefault(require("./getPortalRootNode"));

var _notifications = _interopRequireDefault(require("./notifications"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  dialogs: _dialogs["default"],
  getPortalRootNode: _getPortalRootNode["default"],
  notifications: _notifications["default"]
};
exports["default"] = _default;