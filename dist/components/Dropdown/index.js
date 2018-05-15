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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles.js');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Dropdown = function (_React$PureComponent) {
  (0, _inherits3.default)(Dropdown, _React$PureComponent);

  function Dropdown(props) {
    (0, _classCallCheck3.default)(this, Dropdown);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Dropdown.__proto__ || (0, _getPrototypeOf2.default)(Dropdown)).call(this, props));

    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleFocus = _this.handleFocus.bind(_this);
    _this.handleBlur = _this.handleBlur.bind(_this);

    _this.state = {
      isFocused: false
    };
    return _this;
  }

  (0, _createClass3.default)(Dropdown, [{
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


      var dropdownClassNames = (0, _classnames2.default)(classes.Dropdown, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.SizeDefault, size === 'default'), (0, _defineProperty3.default)(_classNames, classes.SizeS, size === 's'), (0, _defineProperty3.default)(_classNames, classes.IsFocused, this.state.isFocused), _classNames));

      return _react2.default.createElement(
        'div',
        { className: dropdownClassNames },
        _react2.default.createElement(
          'select',
          { key: 'commands', value: value, onChange: this.handleChange, onFocus: this.handleFocus, onBlur: this.handleBlur },
          emptyLabel ? _react2.default.createElement(
            'option',
            { value: '', key: 'empty-value' },
            emptyLabel
          ) : null,
          options.map(function (option) {
            return _react2.default.createElement(
              'option',
              {
                key: option.value,
                value: option.value
              },
              option.label
            );
          })
        ),
        _react2.default.createElement(_Icon2.default, { key: 'icon', color: 'white', className: classes.CollapseIcon, name: 'expand' })
      );
    }
  }]);
  return Dropdown;
}(_react2.default.PureComponent);

Dropdown.propTypes = {
  options: _propTypes2.default.array.isRequired,
  value: _propTypes2.default.string.isRequired,
  onChange: _propTypes2.default.func.isRequired,
  size: _propTypes2.default.oneOf(['default', 's'])
};

Dropdown.defaultProps = {
  size: 'default'
};

exports.default = (0, _reactJss2.default)(_styles2.default)(Dropdown);