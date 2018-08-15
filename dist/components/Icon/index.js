'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Icon = function Icon(_ref) {
  var _classNames;

  var classes = _ref.classes,
      className = _ref.className,
      color = _ref.color,
      name = _ref.name,
      size = _ref.size,
      style = _ref.style,
      type = _ref.type;

  var iconClassNames = (0, _classnames2.default)(classes.Icon, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.ColorDefault, color === 'default'), (0, _defineProperty3.default)(_classNames, classes.ColorCurrent, color === 'current'), (0, _defineProperty3.default)(_classNames, classes.ColorHighlight, color === 'highlight'), (0, _defineProperty3.default)(_classNames, classes.ColorWhite, color === 'white'), (0, _defineProperty3.default)(_classNames, classes.TypeInline, type === 'inline'), (0, _defineProperty3.default)(_classNames, classes.TypeFlexAuto, type === 'flex-auto'), (0, _defineProperty3.default)(_classNames, classes.SizeXS, size === 'xs'), (0, _defineProperty3.default)(_classNames, classes.SizeS, size === 's'), (0, _defineProperty3.default)(_classNames, classes.SizeM, size === 'm'), (0, _defineProperty3.default)(_classNames, classes.SizeL, size === 'l'), (0, _defineProperty3.default)(_classNames, classes.SizeXL, size === 'xl'), (0, _defineProperty3.default)(_classNames, classes.SizeXXL, size === 'xxl'), _classNames), className);

  return _react2.default.createElement(
    'svg',
    { xmlns: 'http://www.w3.org/2000/svg', className: iconClassNames, role: 'presentational', style: style },
    _react2.default.createElement('use', { xlinkHref: '#icon-' + name })
  );
};

Icon.propTypes = {
  name: _propTypes2.default.string.isRequired,
  color: _propTypes2.default.oneOf(['default', 'current', 'highlight', 'white']),
  size: _propTypes2.default.oneOf(['xs', 's', 'm', 'l', 'xl', 'xxl']),
  style: _propTypes2.default.object,
  type: _propTypes2.default.oneOf(['default', 'inline', 'flex-auto'])
};

Icon.defaultProps = {
  size: 's',
  color: 'default',
  type: 'default'
};

exports.default = (0, _reactJss2.default)(_styles2.default)(Icon);