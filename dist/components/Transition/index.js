"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactTransitionGroup = require("react-transition-group");

var _Group = _interopRequireDefault(require("./Group"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _types = _interopRequireDefault(require("./types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable react/destructuring-assignment */
var Transition = function Transition(props) {
  var TransitionType = _types["default"][props.type];
  return _react["default"].createElement(TransitionType, {
    "in": props["in"]
  }, props.children);
};
/* eslint-enable react/destructuring-assignment */


Transition.propTypes = {
  "in": _propTypes["default"].bool,
  type: _propTypes["default"].oneOf(Object.keys(_types["default"]))
};
Transition.defaultProps = {
  type: 'FadeInLeft'
};
Transition.Custom = _reactTransitionGroup.Transition;
Transition.Group = _Group["default"];
var _default = Transition;
exports["default"] = _default;