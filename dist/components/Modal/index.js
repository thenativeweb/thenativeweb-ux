"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Button = _interopRequireDefault(require("../Button"));

var _exenv = _interopRequireDefault(require("exenv"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _Row = _interopRequireDefault(require("./Row"));

var _services = _interopRequireDefault(require("../../services"));

var _styles = _interopRequireDefault(require("./styles"));

var _Transition = _interopRequireDefault(require("../Transition"));

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

var KEY = {
  ENTER: 13,
  ESCAPE: 27
};

var Modal =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Modal, _React$PureComponent);

  function Modal(props) {
    var _this;

    _classCallCheck(this, Modal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Modal).call(this, props));
    _this.handleBackDropClicked = _this.handleBackDropClicked.bind(_assertThisInitialized(_this));
    _this.handleKeyDown = _this.handleKeyDown.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var isVisible = this.props.isVisible;
      this.handleVisibility(isVisible);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var isVisible = this.props.isVisible;
      this.handleVisibility(isVisible);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.handleVisibility(false);
    }
  }, {
    key: "handleVisibility",
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
    key: "handleKeyDown",
    value: function handleKeyDown(event) {
      var _this$props = this.props,
          onCancel = _this$props.onCancel,
          onKeyDown = _this$props.onKeyDown;

      switch (event.keyCode) {
        case KEY.ESCAPE:
          if (onCancel) {
            onCancel();
          }

          break;

        case KEY.ENTER:
          break;

        default:
          break;
      }

      onKeyDown(event.keyCode, event);
    }
  }, {
    key: "handleBackDropClicked",
    value: function handleBackDropClicked() {
      var onCancel = this.props.onCancel;

      if (onCancel) {
        onCancel();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames2;

      var _this$props2 = this.props,
          attach = _this$props2.attach,
          classes = _this$props2.classes,
          className = _this$props2.className,
          children = _this$props2.children,
          header = _this$props2.header,
          isVisible = _this$props2.isVisible,
          showHeader = _this$props2.showHeader,
          size = _this$props2.size,
          padding = _this$props2.padding;
      var backdropClasses = (0, _styles2.classNames)(classes.Backdrop, _defineProperty({}, classes.IsVisible, isVisible));
      var chromeClasses = (0, _styles2.classNames)(classes.Chrome, (_classNames2 = {}, _defineProperty(_classNames2, classes.ChromeSizeSm, size === 'sm'), _defineProperty(_classNames2, classes.ChromeSizeMd, size === 'md'), _defineProperty(_classNames2, classes.ChromeSizeLg, size === 'lg'), _defineProperty(_classNames2, classes.ChromeSizeFullscreen, size === 'fullscreen'), _defineProperty(_classNames2, classes.ChromeAttachedSidebar, attach === 'sidebar'), _defineProperty(_classNames2, classes.ChromeAttachedLeft, attach === 'left'), _defineProperty(_classNames2, classes.ChromeAttachedRight, attach === 'right'), _defineProperty(_classNames2, classes.ChromeAttachedCenter, attach === 'center'), _defineProperty(_classNames2, classes.ChromePaddingNone, padding === 'none'), _classNames2), className);
      var transitionType;

      switch (attach) {
        case 'left':
        case 'sidebar':
          transitionType = 'FadeInRight';
          break;

        case 'right':
          transitionType = 'FadeInLeft';
          break;

        default:
          transitionType = 'Zoom';
      }

      if (!_exenv["default"].canUseDOM) {
        return null;
      }

      return _reactDom["default"].createPortal(_react["default"].createElement("div", {
        className: classes.Modal
      }, _react["default"].createElement("div", {
        className: backdropClasses,
        onClick: this.handleBackDropClicked
      }), _react["default"].createElement(_Transition["default"], {
        type: transitionType,
        "in": isVisible
      }, _react["default"].createElement("div", {
        className: chromeClasses,
        role: "dialog"
      }, showHeader ? _react["default"].createElement("div", {
        className: classes.Header
      }, _react["default"].createElement("div", {
        className: classes.HeaderText
      }, header), _react["default"].createElement(_Button["default"], {
        className: classes.HeaderCloseButton,
        isSubtle: true,
        icon: "close",
        onClick: this.handleBackDropClicked
      })) : null, _react["default"].createElement("div", {
        className: classes.Content
      }, children)))), _services["default"].getPortalRootNode());
    }
  }]);

  return Modal;
}(_react["default"].PureComponent);

Modal.Row = _Row["default"];
Modal.propTypes = {
  isVisible: _propTypes["default"].bool.isRequired,
  onCancel: _propTypes["default"].func.isRequired,
  attach: _propTypes["default"].oneOf(['left', 'right', 'sidebar', 'center']),
  header: _propTypes["default"].node,
  showHeader: _propTypes["default"].bool,
  size: _propTypes["default"].oneOf(['sm', 'md', 'lg', 'fullscreen']),
  onKeyDown: _propTypes["default"].func
};
Modal.defaultProps = {
  attach: 'left',
  isVisible: false,
  showHeader: true,
  size: 'sm',
  onCancel: function onCancel() {// Intentionally left blank
  },
  onKeyDown: function onKeyDown() {// Intentionally left blank
  }
};

var _default = (0, _styles2.withStyles)(_styles["default"])(Modal);

exports["default"] = _default;