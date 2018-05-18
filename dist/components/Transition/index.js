'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _reactTransitionGroup = require('react-transition-group');

var _Group = require('./Group');

var _Group2 = _interopRequireDefault(_Group);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _types = require('./types');

var _types2 = _interopRequireDefault(_types);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Transition = function Transition(props) {
  var TransitionType = _types2.default[props.type];

  return _react2.default.createElement(
    TransitionType,
    { 'in': props.in },
    props.children
  );
};

Transition.propTypes = {
  in: _propTypes2.default.bool,
  type: _propTypes2.default.oneOf((0, _keys2.default)(_types2.default))
};

Transition.defaultProps = {
  type: 'FadeInLeft'
};

Transition.Custom = _reactTransitionGroup.Transition;
Transition.Group = _Group2.default;

exports.default = Transition;