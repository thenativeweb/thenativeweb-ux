'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _logos = require('./logos');

var _logos2 = _interopRequireDefault(_logos);

var _MadeBy = require('./MadeBy');

var _MadeBy2 = _interopRequireDefault(_MadeBy);

var _PoweredBy = require('./PoweredBy');

var _PoweredBy2 = _interopRequireDefault(_PoweredBy);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(theme) {
  return {
    Brand: {
      width: '100%',
      height: '100%',
      display: 'flex',
      'align-items': 'center',
      'justify-content': 'center',
      background: theme.color.brand.dark
    }
  };
};

var Brand = function Brand(_ref) {
  var color = _ref.color,
      classes = _ref.classes,
      size = _ref.size,
      type = _ref.type,
      isInteractive = _ref.isInteractive;

  var Logo = _logos2.default[type];

  return _react2.default.createElement(
    'div',
    { className: classes.Brand },
    _react2.default.createElement(Logo, { color: color, size: size, isInteractive: isInteractive })
  );
};

Brand.MadeBy = _MadeBy2.default;
Brand.PoweredBy = _PoweredBy2.default;

Brand.propTypes = {
  color: _propTypes2.default.oneOf(['default', 'monochrome']),
  isInteractive: _propTypes2.default.bool,
  size: _propTypes2.default.oneOf(['s', 'm', 'l']),
  type: _propTypes2.default.oneOf(['full', 'minimal'])
};

Brand.defaultProps = {
  size: 'm',
  type: 'full'
};

exports.default = (0, _reactJss2.default)(styles)(Brand);