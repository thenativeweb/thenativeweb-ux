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

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(theme) {
  return {
    TextArea: {
      padding: '9px 12px',
      'font-size': theme.font.size.default,
      'font-family': theme.font.family.default,
      width: '100%',
      'box-sizing': 'border-box',
      border: '1px solid',
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

var TextArea = function (_React$Component) {
  (0, _inherits3.default)(TextArea, _React$Component);

  function TextArea(props) {
    (0, _classCallCheck3.default)(this, TextArea);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TextArea.__proto__ || (0, _getPrototypeOf2.default)(TextArea)).call(this, props));

    _this.handleFocusTimeout = _this.handleFocusTimeout.bind(_this);
    _this.handleRefChanged = _this.handleRefChanged.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(TextArea, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          autoFocus = _props.autoFocus,
          focusDelay = _props.focusDelay;


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
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.focusTimeout);
    }
  }, {
    key: 'handleFocusTimeout',
    value: function handleFocusTimeout() {
      if (this.element) {
        this.element.focus();
      }
    }
  }, {
    key: 'handleRefChanged',
    value: function handleRefChanged(ref) {
      this.element = ref;
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames;

      var _props2 = this.props,
          classes = _props2.classes,
          className = _props2.className,
          disabled = _props2.disabled,
          id = _props2.id,
          name = _props2.name,
          value = _props2.value,
          onBlur = _props2.onBlur,
          onChange = _props2.onChange,
          onFocus = _props2.onFocus,
          placeholder = _props2.placeholder,
          required = _props2.required,
          size = _props2.size;


      var componentClasses = (0, _classnames2.default)(classes.TextArea, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.IsDisabled, disabled === true), (0, _defineProperty3.default)(_classNames, classes.IsRequired, required === true), (0, _defineProperty3.default)(_classNames, classes.SizeS, size === 's'), (0, _defineProperty3.default)(_classNames, classes.SizeM, size === 'm'), _classNames), className);

      return _react2.default.createElement('textarea', {
        id: id,
        ref: this.handleRefChanged,
        className: componentClasses,
        name: name,
        value: value,
        onBlur: onBlur,
        onChange: onChange,
        onFocus: onFocus,
        placeholder: placeholder,
        required: required,
        disable: disabled ? 'disabled' : null
      });
    }
  }]);
  return TextArea;
}(_react2.default.Component);

TextArea.propTypes = {
  autoFocus: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  id: _propTypes2.default.string,
  name: _propTypes2.default.string,
  placeholder: _propTypes2.default.string,
  required: _propTypes2.default.bool,
  size: _propTypes2.default.oneOf(['s', 'm']),
  value: _propTypes2.default.string,
  onBlur: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  onFocus: _propTypes2.default.func
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

exports.default = (0, _reactJss2.default)(styles)(TextArea);