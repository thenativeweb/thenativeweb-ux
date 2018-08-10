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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  Logo: {
    /* Left blank intentionally */
  },

  SizeM: {
    width: '56px',
    height: '56px'
  },

  SizeL: {
    width: '120px',
    height: '120px'
  },

  SizeXL: {
    width: '200px',
    height: '200px'
  }
};

var Logo = function Logo(_ref) {
  var _classNames;

  var classes = _ref.classes,
      isVisible = _ref.isVisible,
      size = _ref.size;

  if (!isVisible) {
    return null;
  }

  var componentClasses = (0, _classnames2.default)(classes.Logo, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.SizeM, size === 'm'), (0, _defineProperty3.default)(_classNames, classes.SizeL, size === 'l'), (0, _defineProperty3.default)(_classNames, classes.SizeXL, size === 'xl'), _classNames));

  return _react2.default.createElement(
    'div',
    { className: componentClasses, role: 'presentational' },
    _react2.default.createElement(
      'svg',
      { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 112 112' },
      _react2.default.createElement(
        'g',
        null,
        _react2.default.createElement('path', { fill: '#FFFFFF', d: 'M99,80.9l-43.1,24.9L12.8,80.9V31.1L55.9,6.2L99,31.1V80.9z' }),
        _react2.default.createElement(
          'g',
          null,
          _react2.default.createElement('path', {
            fill: '#FF0099',
            d: 'M55.9,78.5c0-2.9-0.2-5.4-0.6-7.4s-1-3.7-1.9-5c-0.9-1.3-2-2.2-3.5-2.8s-3.3-0.9-5.4-0.9 c-1.6,0-3.2,0.1-5,0.3c-1.7,0.2-3,0.4-3.8,0.5v30.9l20.1,11.6l0,0L55.9,78.5L55.9,78.5z'
          }),
          _react2.default.createElement('path', {
            fill: '#FF0099',
            d: 'M55.9,6.2L12.8,31.1v49.8L23.3,87V54.7c2.4-0.7,5.5-1.3,9.4-2c3.9-0.6,8.1-0.9,12.8-0.9 c4.4,0,8.1,0.6,11.1,1.8s5.3,2.9,7.1,5.1c1.8,2.2,3,4.8,3.7,7.9c0.7,3.1,1.1,6.4,1.1,10.1v22L99.2,81V31.1L55.9,6.2z'
          })
        )
      )
    )
  );
};

Logo.propTypes = {
  isVisible: _propTypes2.default.bool,
  size: _propTypes2.default.oneOf(['m', 'l', 'xl'])
};

Logo.defaultProps = {
  isVisible: true,
  size: 'm'
};

exports.default = (0, _reactJss2.default)(styles)(Logo);