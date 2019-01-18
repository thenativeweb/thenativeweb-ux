"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _Button = _interopRequireDefault(require("../Button"));

var _Headline = _interopRequireDefault(require("../Headline"));

var _Modal = _interopRequireDefault(require("../Modal"));

var _react = _interopRequireDefault(require("react"));

var _services = _interopRequireDefault(require("../../services"));

var _styles = require("../../styles");

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
  (0, _inherits2.default)(Dialogs, _React$PureComponent);

  function Dialogs() {
    var _this;

    (0, _classCallCheck2.default)(this, Dialogs);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Dialogs).call(this));
    _this.state = {
      isVisible: false
    };
    _this.handleServiceChanged = _this.handleServiceChanged.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    _this.handleConfirm = _this.handleConfirm.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    _this.handleCancel = _this.handleCancel.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    _this.handleKeyDown = _this.handleKeyDown.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    return _this;
  }

  (0, _createClass2.default)(Dialogs, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _services.default.dialogs.on('changed', this.handleServiceChanged);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      _services.default.dialogs.removeListener('changed', this.handleServiceChanged);
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
      _services.default.dialogs.state.confirm.onCancel();
    }
  }, {
    key: "handleConfirm",
    value: function handleConfirm() {
      _services.default.dialogs.state.confirm.onConfirm();
    }
  }, {
    key: "handleKeyDown",
    value: function handleKeyDown(key) {
      switch (key) {
        case KEY.ESCAPE:
          _services.default.dialogs.state.confirm.onCancel();

          break;

        case KEY.ENTER:
          _services.default.dialogs.state.confirm.onConfirm();

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
      return _react.default.createElement(_Modal.default, {
        attach: "center",
        isVisible: _services.default.dialogs.state.confirm.isVisible,
        className: classes.Dialogs,
        onKeyDown: this.handleKeyDown
      }, _react.default.createElement(_Headline.default, null, _services.default.dialogs.state.confirm.title), _react.default.createElement("div", {
        className: classes.Actions
      }, _react.default.createElement(_Button.default, {
        adjust: "auto",
        onClick: this.handleCancel
      }, _services.default.dialogs.state.confirm.actions.cancel), _react.default.createElement(_Button.default, {
        adjust: "flex",
        onClick: this.handleConfirm,
        isPrimary: true,
        autoFocus: true
      }, _services.default.dialogs.state.confirm.actions.confirm)));
    }
  }]);
  return Dialogs;
}(_react.default.PureComponent);

var _default = (0, _styles.withStyles)(styles)(Dialogs);

exports.default = _default;