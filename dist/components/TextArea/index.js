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

var _classnames = _interopRequireDefault(require("classnames"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var styles = function styles(theme) {
  return {
    TextArea: {
      padding: '9px 12px',
      'font-size': theme.font.size.default,
      'font-family': theme.font.family.default,
      width: '100%',
      'box-sizing': 'border-box',
      border: "1px solid",
      'border-color': theme.color.content.border,
      '&:focus': {
        outline: 'none',
        'border-color': theme.color.interaction.focus
      },
      '&::placeholder': {
        color: theme.color.brand.darkGrey,
        'font-family': theme.font.family.default,
        'font-size': 'inherit',
        'font-weight': 400,
        opacity: 0.5
      }
    },
    IsDisabled: {
      color: theme.color.brand.darkGrey,
      background: theme.color.brand.lightGrey
    },
    SizeS: {
      height: theme.grid.stepSize * 8
    },
    SizeM: {
      height: theme.grid.stepSize * 14
    }
  };
};

var TextArea =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(TextArea, _React$Component);

  function TextArea(props) {
    var _this;

    (0, _classCallCheck2.default)(this, TextArea);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(TextArea).call(this, props));
    _this.handleFocusTimeout = _this.handleFocusTimeout.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    _this.handleRefChanged = _this.handleRefChanged.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    return _this;
  }

  (0, _createClass2.default)(TextArea, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          autoFocus = _this$props.autoFocus,
          focusDelay = _this$props.focusDelay;

      if (!autoFocus) {
        return;
      }

      if (this.element) {
        this.focusTimeout = setTimeout(this.handleFocusTimeout, focusDelay);
      } else {
        clearTimeout(this.focusTimeout);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.focusTimeout);
    }
  }, {
    key: "handleFocusTimeout",
    value: function handleFocusTimeout() {
      if (this.element) {
        this.element.focus();
      }
    }
  }, {
    key: "handleRefChanged",
    value: function handleRefChanged(ref) {
      this.element = ref;
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props2 = this.props,
          classes = _this$props2.classes,
          className = _this$props2.className,
          disabled = _this$props2.disabled,
          id = _this$props2.id,
          name = _this$props2.name,
          value = _this$props2.value,
          onBlur = _this$props2.onBlur,
          onChange = _this$props2.onChange,
          onFocus = _this$props2.onFocus,
          placeholder = _this$props2.placeholder,
          required = _this$props2.required,
          style = _this$props2.style,
          size = _this$props2.size;
      var componentClasses = (0, _classnames.default)(classes.TextArea, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.IsDisabled, disabled === true), (0, _defineProperty2.default)(_classNames, classes.IsRequired, required === true), (0, _defineProperty2.default)(_classNames, classes.SizeS, size === 's'), (0, _defineProperty2.default)(_classNames, classes.SizeM, size === 'm'), _classNames), className);
      return _react.default.createElement("textarea", {
        id: id,
        ref: this.handleRefChanged,
        className: componentClasses,
        disable: disabled ? 'disabled' : null,
        name: name,
        value: value,
        onBlur: onBlur,
        onChange: onChange,
        onFocus: onFocus,
        placeholder: placeholder,
        required: required,
        style: style
      });
    }
  }]);
  return TextArea;
}(_react.default.Component);

TextArea.propTypes = {
  autoFocus: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  id: _propTypes.default.string,
  name: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  required: _propTypes.default.bool,
  size: _propTypes.default.oneOf(['s', 'm']),
  value: _propTypes.default.string,
  onBlur: _propTypes.default.func,
  onChange: _propTypes.default.func,
  onFocus: _propTypes.default.func
};
TextArea.defaultProps = {
  autoFocus: false,
  disabled: false,
  focusDelay: 0,
  required: false,
  size: 's',
  onBlur: function onBlur() {},
  onChange: function onChange() {},
  onFocus: function onFocus() {}
};

var _default = (0, _reactJss.default)(styles)(TextArea);

exports.default = _default;