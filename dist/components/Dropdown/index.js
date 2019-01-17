"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _styles = _interopRequireDefault(require("./styles.js"));

var _styles2 = require("../../styles");

var Dropdown =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2.default)(Dropdown, _React$PureComponent);

  function Dropdown(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Dropdown);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Dropdown).call(this, props));
    _this.handleChange = _this.handleChange.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    _this.handleFocus = _this.handleFocus.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    _this.handleBlur = _this.handleBlur.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    _this.state = {
      isFocused: false
    };
    return _this;
  }

  (0, _createClass2.default)(Dropdown, [{
    key: "handleChange",
    value: function handleChange(event) {
      this.props.onChange(event.target.value);
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
      var dropdownClassNames = (0, _styles2.classNames)(classes.Dropdown, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.SizeDefault, size === 'default'), (0, _defineProperty2.default)(_classNames, classes.SizeS, size === 's'), (0, _defineProperty2.default)(_classNames, classes.IsFocused, this.state.isFocused), _classNames));
      return _react.default.createElement("div", {
        id: id,
        className: dropdownClassNames,
        style: style
      }, _react.default.createElement("select", {
        key: "commands",
        value: value,
        onChange: this.handleChange,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur
      }, emptyLabel ? _react.default.createElement("option", {
        value: "",
        key: "empty-value"
      }, emptyLabel) : null, options.map(function (option) {
        return _react.default.createElement("option", {
          key: option.value,
          value: option.value
        }, option.label);
      })), _react.default.createElement(_Icon.default, {
        key: "icon",
        color: "white",
        className: classes.CollapseIcon,
        name: "expand"
      }));
    }
  }]);
  return Dropdown;
}(_react.default.PureComponent);

Dropdown.propTypes = {
  options: _propTypes.default.array.isRequired,
  value: _propTypes.default.string.isRequired,
  onChange: _propTypes.default.func.isRequired,
  size: _propTypes.default.oneOf(['default', 's'])
};
Dropdown.defaultProps = {
  size: 'default'
};

var _default = (0, _styles2.withStyles)(_styles.default)(Dropdown);

exports.default = _default;