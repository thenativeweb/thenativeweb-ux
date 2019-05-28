"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Icon = _interopRequireDefault(require("../Icon"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _styles = _interopRequireDefault(require("./styles.js"));

var _styles2 = require("../../styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Dropdown =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Dropdown, _React$PureComponent);

  function Dropdown(props) {
    var _this;

    _classCallCheck(this, Dropdown);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Dropdown).call(this, props));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.handleFocus = _this.handleFocus.bind(_assertThisInitialized(_this));
    _this.handleBlur = _this.handleBlur.bind(_assertThisInitialized(_this));
    _this.state = {
      isFocused: false
    };
    return _this;
  }

  _createClass(Dropdown, [{
    key: "handleChange",
    value: function handleChange(event) {
      var onChange = this.props.onChange;
      onChange(event.target.value);
    }
  }, {
    key: "handleFocus",
    value: function handleFocus() {
      this.setState({
        isFocused: true
      });
    }
  }, {
    key: "handleBlur",
    value: function handleBlur() {
      this.setState({
        isFocused: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props = this.props,
          classes = _this$props.classes,
          emptyLabel = _this$props.emptyLabel,
          id = _this$props.id,
          options = _this$props.options,
          size = _this$props.size,
          style = _this$props.style,
          value = _this$props.value;
      var isFocused = this.state.isFocused;
      var dropdownClassNames = (0, _styles2.classNames)(classes.Dropdown, (_classNames = {}, _defineProperty(_classNames, classes.SizeSm, size === 'sm'), _defineProperty(_classNames, classes.SizeMd, size === 'md'), _defineProperty(_classNames, classes.IsFocused, isFocused), _classNames));
      return _react["default"].createElement("div", {
        id: id,
        className: dropdownClassNames,
        style: style
      }, _react["default"].createElement("select", {
        key: "commands",
        value: value,
        onChange: this.handleChange,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur
      }, emptyLabel ? _react["default"].createElement("option", {
        value: "",
        key: "empty-value"
      }, emptyLabel) : null, options.map(function (option) {
        return _react["default"].createElement("option", {
          key: option.value,
          value: option.value
        }, option.label);
      })), _react["default"].createElement(_Icon["default"], {
        key: "icon",
        color: "white",
        className: classes.CollapseIcon,
        name: "expand"
      }));
    }
  }]);

  return Dropdown;
}(_react["default"].PureComponent);

Dropdown.propTypes = {
  options: _propTypes["default"].array.isRequired,
  value: _propTypes["default"].string.isRequired,
  onChange: _propTypes["default"].func.isRequired,
  size: _propTypes["default"].oneOf(['sm', 'md'])
};
Dropdown.defaultProps = {
  size: 'md'
};

var _default = (0, _styles2.withStyles)(_styles["default"])(Dropdown);

exports["default"] = _default;