'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _flatten = require('lodash/flatten');

var _flatten2 = _interopRequireDefault(_flatten);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _Link = require('../Link');

var _Link2 = _interopRequireDefault(_Link);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(theme) {
  return {
    MadeBy: {
      overflow: 'hidden',
      'font-family': theme.font.family.default,
      'font-size': theme.font.size.small,
      'text-align': 'center',
      'padding-top': theme.grid.stepSize / 2,
      'padding-bottom': theme.grid.stepSize / 2,
      color: theme.color.brand.lightGrey
    },

    SizeL: {},
    SizeM: {}
  };
};

var MadeBy = function MadeBy(_ref) {
  var _classNames;

  var classes = _ref.classes,
      _ref$partner = _ref.partner,
      partner = _ref$partner === undefined ? [] : _ref$partner,
      size = _ref.size;

  var componentClasses = (0, _classnames2.default)(classes.MadeBy, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.SizeM, size === 'm'), (0, _defineProperty3.default)(_classNames, classes.SizeL, size === 'l'), _classNames));

  partner = (0, _flatten2.default)([partner]);

  return _react2.default.createElement(
    'div',
    { className: componentClasses },
    _react2.default.createElement(
      'span',
      { className: classes.Intro },
      'Made with ',
      _react2.default.createElement(_Icon2.default, { name: 'heart', color: 'highlight', type: 'inline' }),
      ' by'
    ),
    ' ',
    _react2.default.createElement(
      _Link2.default,
      { href: 'https://www.thenativeweb.io', isExternal: true },
      'the native web'
    ),
    partner.length > 0 ? ' and ' : null,
    partner.map(function (item) {
      return _react2.default.createElement(
        _Link2.default,
        { key: item.name, href: item.href, isExternal: true },
        item.name
      );
    })
  );
};

MadeBy.propTypes = {
  partner: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.object]),
  size: _propTypes2.default.oneOf(['m', 'l'])
};

MadeBy.defaultProps = {
  size: 'm',
  name: undefined
};

exports.default = (0, _reactJss2.default)(styles)(MadeBy);