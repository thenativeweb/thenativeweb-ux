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

var KEY = {
  ENTER: 13,
  ESCAPE: 27
};

var Modal =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2.default)(Modal, _React$PureComponent);

  function Modal(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Modal);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Modal).call(this, props));
    _this.handleBackDropClicked = _this.handleBackDropClicked.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    _this.handleKeyDown = _this.handleKeyDown.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    return _this;
  }

  (0, _createClass2.default)(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.handleVisibility(this.props.isVisible);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.handleVisibility(this.props.isVisible);
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
    key: "handleBackDropClicked",
    value: function handleBackDropClicked() {
      if (this.props.onCancel) {
        this.props.onCancel();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames2;

      var _this$props = this.props,
          attach = _this$props.attach,
          classes = _this$props.classes,
          className = _this$props.className,
          children = _this$props.children,
          header = _this$props.header,
          isVisible = _this$props.isVisible,
          showHeader = _this$props.showHeader,
          size = _this$props.size,
          padding = _this$props.padding;
      var backdropClasses = (0, _styles2.classNames)(classes.Backdrop, (0, _defineProperty2.default)({}, classes.IsVisible, isVisible));
      var chromeClasses = (0, _styles2.classNames)(classes.Chrome, (_classNames2 = {}, (0, _defineProperty2.default)(_classNames2, classes.ChromeSizeS, size === 's'), (0, _defineProperty2.default)(_classNames2, classes.ChromeSizeM, size === 'm'), (0, _defineProperty2.default)(_classNames2, classes.ChromeSizeL, size === 'l'), (0, _defineProperty2.default)(_classNames2, classes.ChromeSizeFullscreen, size === 'fullscreen'), (0, _defineProperty2.default)(_classNames2, classes.ChromeAttachedSidebar, attach === 'sidebar'), (0, _defineProperty2.default)(_classNames2, classes.ChromeAttachedLeft, attach === 'left'), (0, _defineProperty2.default)(_classNames2, classes.ChromeAttachedRight, attach === 'right'), (0, _defineProperty2.default)(_classNames2, classes.ChromeAttachedCenter, attach === 'center'), (0, _defineProperty2.default)(_classNames2, classes.ChromePaddingNone, padding === 'none'), _classNames2), className);
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

      if (!_exenv.default.canUseDOM) {
        return null;
      }

      return _reactDom.default.createPortal(_react.default.createElement("div", {
        className: classes.Modal
      }, _react.default.createElement("div", {
        className: backdropClasses,
        onClick: this.handleBackDropClicked
      }), _react.default.createElement(_Transition.default, {
        type: transitionType,
        in: isVisible
      }, _react.default.createElement("div", {
        className: chromeClasses,
        role: "dialog"
      }, showHeader ? _react.default.createElement("div", {
        className: classes.Header
      }, _react.default.createElement("div", {
        className: classes.HeaderText
      }, header), _react.default.createElement(_Button.default, {
        className: classes.HeaderCloseButton,
        isSubtle: true,
        icon: "close",
        onClick: this.handleBackDropClicked
      })) : null, _react.default.createElement("div", {
        className: classes.Content
      }, children)))), _services.default.getPortalRootNode());
    }
  }]);
  return Modal;
}(_react.default.PureComponent);

Modal.Row = _Row.default;
Modal.propTypes = {
  isVisible: _propTypes.default.bool.isRequired,
  onCancel: _propTypes.default.func.isRequired,
  attach: _propTypes.default.oneOf(['left', 'right', 'sidebar', 'center']),
  header: _propTypes.default.node,
  showHeader: _propTypes.default.bool,
  size: _propTypes.default.oneOf(['s', 'm', 'l', 'fullscreen']),
  onKeyDown: _propTypes.default.func
};
Modal.defaultProps = {
  attach: 'left',
  isVisible: false,
  showHeader: true,
  size: 's',
  onCancel: function onCancel() {},
  onKeyDown: function onKeyDown() {}
};

var _default = (0, _styles2.withStyles)(_styles.default)(Modal);

exports.default = _default;