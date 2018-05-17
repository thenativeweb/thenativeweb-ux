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

var _exenv = require('exenv');

var _exenv2 = _interopRequireDefault(_exenv);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Row = require('./Row');

var _Row2 = _interopRequireDefault(_Row);

var _services = require('../../services');

var _services2 = _interopRequireDefault(_services);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var _transitions = require('../transitions');

var _transitions2 = _interopRequireDefault(_transitions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var KEY = {
  ENTER: 13,
  ESCAPE: 27
};

var Modal = function (_React$PureComponent) {
  (0, _inherits3.default)(Modal, _React$PureComponent);

  function Modal(props) {
    (0, _classCallCheck3.default)(this, Modal);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Modal.__proto__ || (0, _getPrototypeOf2.default)(Modal)).call(this, props));

    _this.handleBackDropClicked = _this.handleBackDropClicked.bind(_this);
    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Modal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.handleVisibility(this.props.isVisible);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.handleVisibility(this.props.isVisible);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.handleVisibility(false);
    }
  }, {
    key: 'handleVisibility',
    value: function handleVisibility(isVisible) {
      if (isVisible) {
        document.addEventListener('keydown', this.handleKeyDown);
        document.querySelector('body').classList.add('thenativeweb-modal--visible');
      } else {
        document.removeEventListener('keydown', this.handleKeyDown);
        document.querySelector('body').classList.remove('thenativeweb-modal--visible');
      }
    }
  }, {
    key: 'handleKeyDown',
    value: function handleKeyDown(event) {
      switch (event.keyCode) {
        case KEY.ESCAPE:
          if (this.props.onCancel) {
            this.props.onCancel();
          }
          break;
        case KEY.ENTER:
          break;
        default:
          break;
      }

      this.props.onKeyDown(event.keyCode, event);
    }
  }, {
    key: 'handleBackDropClicked',
    value: function handleBackDropClicked() {
      if (this.props.onCancel) {
        this.props.onCancel();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames2;

      var _props = this.props,
          attach = _props.attach,
          classes = _props.classes,
          className = _props.className,
          children = _props.children,
          isVisible = _props.isVisible,
          size = _props.size;


      var backdropClasses = (0, _classnames2.default)(classes.Backdrop, (0, _defineProperty3.default)({}, classes.IsVisible, isVisible));

      var contentClasses = (0, _classnames2.default)(classes.Content, (_classNames2 = {}, (0, _defineProperty3.default)(_classNames2, classes.ContentSizeS, size === 's'), (0, _defineProperty3.default)(_classNames2, classes.ContentSizeM, size === 'm'), (0, _defineProperty3.default)(_classNames2, classes.ContentSizeL, size === 'l'), (0, _defineProperty3.default)(_classNames2, classes.ContentAttachedSidebar, attach === 'sidebar'), (0, _defineProperty3.default)(_classNames2, classes.ContentAttachedLeft, attach === 'left'), (0, _defineProperty3.default)(_classNames2, classes.ContentAttachedRight, attach === 'right'), (0, _defineProperty3.default)(_classNames2, classes.ContentAttachedCenter, attach === 'center'), _classNames2), className);

      var Transition = void 0;

      switch (attach) {
        case 'left':
        case 'sidebar':
          Transition = _transitions2.default.FadeInRight;
          break;
        case 'right':
          Transition = _transitions2.default.FadeInLeft;
          break;
        default:
          Transition = _transitions2.default.Zoom;
      }

      if (!_exenv2.default.canUseDOM) {
        return null;
      }

      return _reactDom2.default.createPortal(_react2.default.createElement(
        'div',
        { className: classes.Modal },
        _react2.default.createElement('div', { className: backdropClasses, onClick: this.handleBackDropClicked }),
        _react2.default.createElement(
          Transition,
          { 'in': isVisible },
          _react2.default.createElement(
            'div',
            { className: contentClasses, role: 'dialog' },
            children
          )
        )
      ), _services2.default.getPortalRootNode());
    }
  }]);
  return Modal;
}(_react2.default.PureComponent);

Modal.Row = _Row2.default;

Modal.propTypes = {
  isVisible: _propTypes2.default.bool.isRequired,
  onCancel: _propTypes2.default.func.isRequired,
  attach: _propTypes2.default.oneOf(['left', 'right', 'sidebar', 'center']),
  size: _propTypes2.default.oneOf(['s', 'm', 'l']),
  onKeyDown: _propTypes2.default.func
};

Modal.defaultProps = {
  attach: 'left',
  isVisible: false,
  size: 's',
  onCancel: function onCancel() {},
  onKeyDown: function onKeyDown() {}
};

exports.default = (0, _reactJss2.default)(_styles2.default)(Modal);