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

var _Headline = require('../Headline');

var _Headline2 = _interopRequireDefault(_Headline);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _Modal = require('../Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _services = require('../../services');

var _services2 = _interopRequireDefault(_services);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var KEY = {
  ENTER: 13,
  ESCAPE: 27
};

var styles = {
  Dialogs: {},

  Actions: {
    display: 'flex',
    'flex-direction': 'row',
    'justify-content': 'center',

    '& *': {
      'flex-grow': 0,
      'max-width': '200px'
    }
  }
};

var Dialogs = function (_React$PureComponent) {
  (0, _inherits3.default)(Dialogs, _React$PureComponent);

  function Dialogs() {
    (0, _classCallCheck3.default)(this, Dialogs);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Dialogs.__proto__ || (0, _getPrototypeOf2.default)(Dialogs)).call(this));

    _this.state = {
      isVisible: false
    };

    _this.handleServiceChanged = _this.handleServiceChanged.bind(_this);
    _this.handleConfirm = _this.handleConfirm.bind(_this);
    _this.handleCancel = _this.handleCancel.bind(_this);
    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Dialogs, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _services2.default.dialogs.on('changed', this.handleServiceChanged);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _services2.default.dialogs.removeListener('changed', this.handleServiceChanged);
    }
  }, {
    key: 'handleServiceChanged',
    value: function handleServiceChanged() {
      this.forceUpdate();
    }

    /* eslint-disable class-methods-use-this */

  }, {
    key: 'handleCancel',
    value: function handleCancel() {
      _services2.default.dialogs.state.confirm.onCancel();
    }
  }, {
    key: 'handleConfirm',
    value: function handleConfirm() {
      _services2.default.dialogs.state.confirm.onConfirm();
    }
  }, {
    key: 'handleKeyDown',
    value: function handleKeyDown(key) {
      switch (key) {
        case KEY.ESCAPE:
          _services2.default.dialogs.state.confirm.onCancel();
          break;
        case KEY.ENTER:
          _services2.default.dialogs.state.confirm.onConfirm();
          break;
        default:
          break;
      }
    }
    /* eslint-enable class-methods-use-this */

  }, {
    key: 'render',
    value: function render() {
      var classes = this.props.classes;


      return _react2.default.createElement(
        _Modal2.default,
        {
          attach: 'center',
          isVisible: _services2.default.dialogs.state.confirm.isVisible,
          className: classes.Dialogs,
          onKeyDown: this.handleKeyDown
        },
        _react2.default.createElement(
          _Headline2.default,
          null,
          _services2.default.dialogs.state.confirm.title
        ),
        _react2.default.createElement(
          'div',
          { className: classes.Actions },
          _react2.default.createElement(
            _Button2.default,
            { adjust: 'auto', onClick: this.handleCancel },
            _services2.default.dialogs.state.confirm.actions.cancel
          ),
          _react2.default.createElement(
            _Button2.default,
            { adjust: 'flex', onClick: this.handleConfirm, isPrimary: true, autoFocus: true },
            _services2.default.dialogs.state.confirm.actions.confirm
          )
        )
      );
    }
  }]);
  return Dialogs;
}(_react2.default.PureComponent);

exports.default = (0, _reactJss2.default)(styles)(Dialogs);