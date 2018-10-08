"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _Button = _interopRequireDefault(require("../Button"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _react = _interopRequireDefault(require("react"));

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
  return _react.default.createElement(_Button.default, {
    className: isSelected ? classes.ActiveButton : classes.Button,
    onClick: function onClick() {
      return changeValue(value);
    },
    key: value
  }, value);
};

var Toggle =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2.default)(Toggle, _React$PureComponent);

  function Toggle(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Toggle);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Toggle).call(this, props));
    _this.handleChangeValue = _this.handleChangeValue.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    return _this;
  }

  (0, _createClass2.default)(Toggle, [{
    key: "handleChangeValue",
    value: function handleChangeValue(newValue) {
      this.props.onChange(newValue);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          id = _this$props.id,
          classes = _this$props.classes,
          className = _this$props.className,
          selectedValue = _this$props.selectedValue,
          values = _this$props.values,
          style = _this$props.style;
      var componentClasses = (0, _classnames.default)(classes.Toggle, className);
      return _react.default.createElement("div", {
        id: id,
        className: componentClasses,
        style: style
      }, values.map(function (value) {
        return _this2.props.children({
          value: value,
          isSelected: selectedValue === value,
          changeValue: _this2.handleChangeValue,
          classes: classes
        });
      }));
    }
  }]);
  return Toggle;
}(_react.default.PureComponent);

Toggle.defaultProps = {
  values: ['yellow', 'red', 'green'],
  selectedValue: 'yellow',
  onChange: function onChange() {},
  children: renderDefaultToggle
};

var _default = (0, _reactJss.default)(styles)(Toggle);

exports.default = _default;