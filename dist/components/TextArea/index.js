import _defineProperty from 'babel-runtime/helpers/defineProperty';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import classNames from 'classnames';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import React from 'react';

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
  _inherits(TextArea, _React$Component);

  function TextArea(props) {
    _classCallCheck(this, TextArea);

    var _this = _possibleConstructorReturn(this, (TextArea.__proto__ || _Object$getPrototypeOf(TextArea)).call(this, props));

    _this.handleFocusTimeout = _this.handleFocusTimeout.bind(_this);
    _this.handleRefChanged = _this.handleRefChanged.bind(_this);
    return _this;
  }

  _createClass(TextArea, [{
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


      var componentClasses = classNames(classes.TextArea, (_classNames = {}, _defineProperty(_classNames, classes.IsDisabled, disabled === true), _defineProperty(_classNames, classes.IsRequired, required === true), _defineProperty(_classNames, classes.SizeS, size === 's'), _defineProperty(_classNames, classes.SizeM, size === 'm'), _classNames), className);

      return React.createElement('textarea', {
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
}(React.Component);

TextArea.propTypes = {
  autoFocus: PropTypes.bool,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  size: PropTypes.oneOf(['s', 'm']),
  value: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func
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

export default injectSheet(styles)(TextArea);