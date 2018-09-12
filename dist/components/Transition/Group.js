"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactTransitionGroup = require("react-transition-group");

var _types = _interopRequireDefault(require("./types"));

var Group = function Group(_ref) {
  var children = _ref.children,
      type = _ref.type;
  var Transition = _types.default[type];
  return _react.default.createElement(_reactTransitionGroup.TransitionGroup, null, _react.default.Children.map(children, function (child) {
    return _react.default.createElement(Transition, null, child);
  }));
};

Group.propTypes = {
  type: _propTypes.default.oneOf(Object.keys(_types.default))
};
Group.defaultProps = {
  type: 'FadeInLeft'
};
var _default = Group;
exports.default = _default;