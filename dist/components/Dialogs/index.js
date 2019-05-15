"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Button = _interopRequireDefault(require("../Button"));

var _Headline = _interopRequireDefault(require("../Headline"));

var _Modal = _interopRequireDefault(require("../Modal"));

var _react = _interopRequireDefault(require("react"));

var _services = _interopRequireDefault(require("../../services"));

var _styles = require("../../styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var Dialogs =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Dialogs, _React$PureComponent);

  function Dialogs() {
    var _this;

    _classCallCheck(this, Dialogs);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Dialogs).call(this));
    _this.handleServiceChanged = _this.handleServiceChanged.bind(_assertThisInitialized(_this));
    _this.handleConfirm = _this.handleConfirm.bind(_assertThisInitialized(_this));
    _this.handleCancel = _this.handleCancel.bind(_assertThisInitialized(_this));
    _this.handleKeyDown = _this.handleKeyDown.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Dialogs, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _services["default"].dialogs.on('changed', this.handleServiceChanged);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      _services["default"].dialogs.removeListener('changed', this.handleServiceChanged);
    }
  }, {
    key: "handleServiceChanged",
    value: function handleServiceChanged() {
      this.forceUpdate();
    }
    /* eslint-disable class-methods-use-this */

  }, {
    key: "handleCancel",
    value: function handleCancel() {
      _services["default"].dialogs.state.confirm.onCancel();
    }
  }, {
    key: "handleConfirm",
    value: function handleConfirm() {
      _services["default"].dialogs.state.confirm.onConfirm();
    }
  }, {
    key: "handleKeyDown",
    value: function handleKeyDown(key) {
      switch (key) {
        case KEY.ESCAPE:
          _services["default"].dialogs.state.confirm.onCancel();

          break;

        case KEY.ENTER:
          _services["default"].dialogs.state.confirm.onConfirm();

          break;

        default:
          break;
      }
    }
    /* eslint-enable class-methods-use-this */

  }, {
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      return _react["default"].createElement(_Modal["default"], {
        attach: "center",
        showHeader: false,
        isVisible: _services["default"].dialogs.state.confirm.isVisible,
        className: classes.Dialogs,
        onKeyDown: this.handleKeyDown
      }, _react["default"].createElement(_Headline["default"], null, _services["default"].dialogs.state.confirm.title), _react["default"].createElement("div", {
        className: classes.Actions
      }, _react["default"].createElement(_Button["default"], {
        adjust: "auto",
        onClick: this.handleCancel
      }, _services["default"].dialogs.state.confirm.actions.cancel), _react["default"].createElement(_Button["default"], {
        adjust: "flex",
        onClick: this.handleConfirm,
        isPrimary: true,
        autoFocus: true
      }, _services["default"].dialogs.state.confirm.actions.confirm)));
    }
  }]);

  return Dialogs;
}(_react["default"].PureComponent);

var _default = (0, _styles.withStyles)(styles)(Dialogs);

exports["default"] = _default;