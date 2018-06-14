'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(theme) {
  return {
    Toggle: {
      display: 'flex'
    },

    ActiveButton: {
      'margin-right': 0,
      background: theme.color.brand.highlight,

      '&:first-child': {
        'border-top-right-radius': 0,
        'border-bottom-right-radius': 0
      },

      '&:last-child': {
        'border-top-left-radius': 0,
        'border-bottom-left-radius': 0
      }
    },

    Button: {
      'margin-right': 0,

      '&:first-child': {
        'border-top-right-radius': 0,
        'border-bottom-right-radius': 0
      },

      '&:last-child': {
        'border-top-left-radius': 0,
        'border-bottom-left-radius': 0
      }
    }
  };
};

var renderDefaultToggle = function renderDefaultToggle(_ref) {
  var value = _ref.value,
      isSelected = _ref.isSelected,
      changeValue = _ref.changeValue,
      classes = _ref.classes;
  return _react2.default.createElement(
    _Button2.default,
    {
      className: isSelected ? classes.ActiveButton : classes.Button,
      onClick: function onClick() {
        return changeValue(value);
      },
      key: value
    },
    value
  );
};

var Toggle = function (_React$PureComponent) {
  (0, _inherits3.default)(Toggle, _React$PureComponent);

  function Toggle(props) {
    (0, _classCallCheck3.default)(this, Toggle);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Toggle.__proto__ || (0, _getPrototypeOf2.default)(Toggle)).call(this, props));

    _this.handleChangeValue = _this.handleChangeValue.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Toggle, [{
    key: 'handleChangeValue',
    value: function handleChangeValue(newValue) {
      this.props.onChange(newValue);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          id = _props.id,
          classes = _props.classes,
          className = _props.className,
          selectedValue = _props.selectedValue,
          values = _props.values,
          style = _props.style;


      var componentClasses = (0, _classnames2.default)(classes.Toggle, className);

      return _react2.default.createElement(
        'div',
        { id: id, className: componentClasses, style: style },
        values.map(function (value) {
          return _this2.props.children({
            value: value,
            isSelected: selectedValue === value,
            changeValue: _this2.handleChangeValue,
            classes: classes
          });
        })
      );
    }
  }]);
  return Toggle;
}(_react2.default.PureComponent);

Toggle.defaultProps = {
  values: ['yellow', 'red', 'green'],
  selectedValue: 'yellow',
  onChange: function onChange() {},

  children: renderDefaultToggle
};

exports.default = (0, _reactJss2.default)(styles)(Toggle);