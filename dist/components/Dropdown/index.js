import _defineProperty from 'babel-runtime/helpers/defineProperty';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import classNames from 'classnames';
import Icon from '../Icon';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.js';

var Dropdown = function (_React$PureComponent) {
  _inherits(Dropdown, _React$PureComponent);

  function Dropdown(props) {
    _classCallCheck(this, Dropdown);

    var _this = _possibleConstructorReturn(this, (Dropdown.__proto__ || _Object$getPrototypeOf(Dropdown)).call(this, props));

    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleFocus = _this.handleFocus.bind(_this);
    _this.handleBlur = _this.handleBlur.bind(_this);

    _this.state = {
      isFocused: false
    };
    return _this;
  }

  _createClass(Dropdown, [{
    key: 'handleChange',
    value: function handleChange(event) {
      this.props.onChange(event.target.value);
    }
  }, {
    key: 'handleFocus',
    value: function handleFocus() {
      this.setState({
        isFocused: true
      });
    }
  }, {
    key: 'handleBlur',
    value: function handleBlur() {
      this.setState({
        isFocused: false
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props,
          classes = _props.classes,
          emptyLabel = _props.emptyLabel,
          options = _props.options,
          size = _props.size,
          value = _props.value;


      var dropdownClassNames = classNames(classes.Dropdown, (_classNames = {}, _defineProperty(_classNames, classes.SizeDefault, size === 'default'), _defineProperty(_classNames, classes.SizeS, size === 's'), _defineProperty(_classNames, classes.IsFocused, this.state.isFocused), _classNames));

      return React.createElement(
        'div',
        { className: dropdownClassNames },
        React.createElement(
          'select',
          { key: 'commands', value: value, onChange: this.handleChange, onFocus: this.handleFocus, onBlur: this.handleBlur },
          emptyLabel ? React.createElement(
            'option',
            { value: '', key: 'empty-value' },
            emptyLabel
          ) : null,
          options.map(function (option) {
            return React.createElement(
              'option',
              {
                key: option.value,
                value: option.value
              },
              option.label
            );
          })
        ),
        React.createElement(Icon, { key: 'icon', color: 'white', className: classes.CollapseIcon, name: 'expand' })
      );
    }
  }]);

  return Dropdown;
}(React.PureComponent);

Dropdown.propTypes = {
  options: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  size: PropTypes.oneOf(['default', 's'])
};

Dropdown.defaultProps = {
  size: 'default'
};

export default injectSheet(styles)(Dropdown);