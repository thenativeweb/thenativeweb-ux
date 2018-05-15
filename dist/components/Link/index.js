'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(theme) {
  return {
    Link: {
      color: theme.color.brand.highlight,
      'text-decoration': 'none',
      'font-weight': 400,
      'font-family': theme.font.family.default,
      'font-size': 'inherit',

      '&:hover': {
        'text-decoration': 'none'
      }
    }
  };
};

var Link = function Link(_ref) {
  var classes = _ref.classes,
      className = _ref.className,
      children = _ref.children,
      isExternal = _ref.isExternal,
      href = _ref.href,
      onClick = _ref.onClick;

  var brandClassNames = (0, _classnames2.default)(classes.Link, className);

  if (isExternal === true) {
    return _react2.default.createElement(
      'a',
      { className: brandClassNames, href: href, onClick: onClick, rel: 'noopener noreferrer', target: '_blank' },
      children
    );
  }

  return _react2.default.createElement(
    'a',
    { className: brandClassNames, href: href, onClick: onClick },
    children
  );
};

Link.propTypes = {
  href: _propTypes2.default.string,
  isExternal: _propTypes2.default.bool,
  onClick: _propTypes2.default.func
};

Link.defaultProps = {
  isExternal: false,
  onClick: function onClick() {}
};

exports.default = (0, _reactJss2.default)(styles)(Link);