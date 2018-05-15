'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dialogs = require('./dialogs');

var _dialogs2 = _interopRequireDefault(_dialogs);

var _getPortalRootNode = require('./getPortalRootNode');

var _getPortalRootNode2 = _interopRequireDefault(_getPortalRootNode);

var _notifications = require('./notifications');

var _notifications2 = _interopRequireDefault(_notifications);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  dialogs: _dialogs2.default,
  getPortalRootNode: _getPortalRootNode2.default,
  notifications: _notifications2.default
};