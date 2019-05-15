"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Button = _interopRequireDefault(require("../Button"));

var _react = _interopRequireDefault(require("react"));

var _styles = require("../../styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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
  return _react["default"].createElement(_Button["default"], {
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
  _inherits(Toggle, _React$PureComponent);

  function Toggle(props) {
    var _this;

    _classCallCheck(this, Toggle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Toggle).call(this, props));
    _this.handleChangeValue = _this.handleChangeValue.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Toggle, [{
    key: "handleChangeValue",
    value: function handleChangeValue(newValue) {
      var onChange = this.props.onChange;
      onChange(newValue);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          id = _this$props.id,
          classes = _this$props.classes,
          className = _this$props.className,
          children = _this$props.children,
          selectedValue = _this$props.selectedValue,
          values = _this$props.values,
          style = _this$props.style;
      var componentClasses = (0, _styles.classNames)(classes.Toggle, className);
      return _react["default"].createElement("div", {
        id: id,
        className: componentClasses,
        style: style
      }, values.map(function (value) {
        return children({
          value: value,
          isSelected: selectedValue === value,
          changeValue: _this2.handleChangeValue,
          classes: classes
        });
      }));
    }
  }]);

  return Toggle;
}(_react["default"].PureComponent);

Toggle.defaultProps = {
  values: ['yellow', 'red', 'green'],
  selectedValue: 'yellow',
  onChange: function onChange() {// Intentionally left blank
  },
  children: renderDefaultToggle
};

var _default = (0, _styles.withStyles)(styles)(Toggle);

exports["default"] = _default;