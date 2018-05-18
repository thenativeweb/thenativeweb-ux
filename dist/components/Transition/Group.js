'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTransitionGroup = require('react-transition-group');

var _types = require('./types');

var _types2 = _interopRequireDefault(_types);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Group = function Group(_ref) {
  var children = _ref.children,
      type = _ref.type;

  var Transition = _types2.default[type];

  return _react2.default.createElement(
    _reactTransitionGroup.TransitionGroup,
    null,
    _react2.default.Children.map(children, function (child) {
      return _react2.default.createElement(
        Transition,
        null,
        child
      );
    })
  );
};

Group.propTypes = {
  type: _propTypes2.default.oneOf((0, _keys2.default)(_types2.default))
};

Group.defaultProps = {
  type: 'FadeInLeft'
};

exports.default = Group;