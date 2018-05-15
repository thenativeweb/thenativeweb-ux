'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _Label = require('../Label');

var _Label2 = _interopRequireDefault(_Label);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles.js');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Hint = function Hint(_ref) {
  var children = _ref.children,
      classes = _ref.classes;
  return _react2.default.createElement(
    'span',
    { className: classes.Hint },
    children
  );
};

var Button = function (_React$PureComponent) {
  (0, _inherits3.default)(Button, _React$PureComponent);

  function Button(props) {
    (0, _classCallCheck3.default)(this, Button);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Button.__proto__ || (0, _getPrototypeOf2.default)(Button)).call(this, props));

    _this.handlePointerDown = _this.handlePointerDown.bind(_this);
    _this.handlePointerUp = _this.handlePointerUp.bind(_this);

    _this.state = {
      isPressed: false
    };
    return _this;
  }

  (0, _createClass3.default)(Button, [{
    key: 'handlePointerDown',
    value: function handlePointerDown() {
      this.setState({
        isPressed: true
      });
    }
  }, {
    key: 'handlePointerUp',
    value: function handlePointerUp() {
      this.setState({
        isPressed: false
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props,
          autoFocus = _props.autoFocus,
          adjust = _props.adjust,
          children = _props.children,
          classes = _props.classes,
          className = _props.className,
          id = _props.id,
          icon = _props.icon,
          iconSize = _props.iconSize,
          onClick = _props.onClick,
          isPrimary = _props.isPrimary,
          isSubtle = _props.isSubtle,
          size = _props.size,
          type = _props.type;
      var isPressed = this.state.isPressed;


      var buttonClassNames = (0, _classnames2.default)(classes.Button, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.AdjustFlex, adjust === 'flex'), (0, _defineProperty3.default)(_classNames, classes.AdjustAuto, adjust === 'auto'), (0, _defineProperty3.default)(_classNames, classes.SizeDefault, size === 'default'), (0, _defineProperty3.default)(_classNames, classes.SizeS, size === 's'), (0, _defineProperty3.default)(_classNames, classes.SizeM, size === 'm'), (0, _defineProperty3.default)(_classNames, classes.SizeL, size === 'l'), (0, _defineProperty3.default)(_classNames, classes.TypeSubtle, isSubtle === true), (0, _defineProperty3.default)(_classNames, classes.TypePrimary, isPrimary === true), (0, _defineProperty3.default)(_classNames, classes.TypeIcon, icon), (0, _defineProperty3.default)(_classNames, classes.TypeIconOnly, icon && !children), (0, _defineProperty3.default)(_classNames, classes.IsPressed, isPressed === true), _classNames), className);

      var buttonType = type || (isPrimary ? 'submit' : 'button');

      return _react2.default.createElement(
        'button',
        {
          autoFocus: autoFocus,
          id: id,
          type: buttonType,
          className: buttonClassNames,
          onClick: onClick,
          onMouseDown: this.handlePointerDown,
          onMouseUp: this.handlePointerUp
        },
        icon ? _react2.default.createElement(_Icon2.default, { className: classes.Icon, name: icon, size: iconSize }) : null,
        children ? _react2.default.createElement(
          _Label2.default,
          { className: classes.Label },
          children
        ) : null
      );
    }
  }]);
  return Button;
}(_react2.default.PureComponent);

Button.propTypes = {
  adjust: _propTypes2.default.oneOf(['flex', 'auto']),
  autoFocus: _propTypes2.default.bool,
  icon: _propTypes2.default.string,
  iconSize: _propTypes2.default.oneOf(['default', 'xs', 's', 'm', 'l']),
  isPrimary: _propTypes2.default.bool,
  isSubtle: _propTypes2.default.bool,
  size: _propTypes2.default.oneOf(['default', 's', 'm', 'l']),
  type: _propTypes2.default.oneOf(['button', 'submit', 'reset']),
  onClick: _propTypes2.default.func
};

Button.defaultProps = {
  adjust: undefined,
  autoFocus: false,
  isPrimary: false,
  size: 'default',
  type: undefined,
  onClick: function onClick() {}
};

Button.Hint = (0, _reactJss2.default)({
  Hint: {
    opacity: 0.5,
    'padding-left': '0.5em'
  }
})(Hint);

exports.default = (0, _reactJss2.default)(_styles2.default)(Button);