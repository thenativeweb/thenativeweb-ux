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

var _events = _interopRequireDefault(require("events"));

var defaultState = {
  confirm: {
    isVisible: false,
    title: '',
    actions: {
      cancel: '',
      confirm: ''
    },
    onCancel: function onCancel() {},
    onConfirm: function onConfirm() {}
  }
};

var DialogsService =
/*#__PURE__*/
function (_EventEmitter) {
  (0, _inherits2.default)(DialogsService, _EventEmitter);

  function DialogsService() {
    var _this;

    (0, _classCallCheck2.default)(this, DialogsService);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(DialogsService).call(this));
    _this.state = defaultState;
    return _this;
  }

  (0, _createClass2.default)(DialogsService, [{
    key: "hideConfirm",
    value: function hideConfirm() {
      this.state = defaultState;
      this.emit('changed');
    }
  }, {
    key: "confirm",
    value: function confirm(options) {
      var _this2 = this;

      return new Promise(function (resolve) {
        if (!options) {
          throw new Error('Options are missing.');
        }

        if (!options.title) {
          throw new Error('Title is missing.');
        }

        if (!options.actions) {
          throw new Error('Actions are missing.');
        }

        if (!options.actions.cancel) {
          throw new Error('Cancel is missing.');
        }

        if (!options.actions.confirm) {
          throw new Error('Confirm is missing.');
        }

        var title = options.title,
            actions = options.actions;
        _this2.state = {
          confirm: {
            isVisible: true,
            title: title,
            actions: actions,
            onConfirm: function onConfirm() {
              _this2.hideConfirm();

              resolve('confirm');
            },
            onCancel: function onCancel() {
              _this2.hideConfirm();

              resolve('cancel');
            }
          }
        }; // Delay the rendering for keyboard events not to conflict.

        setTimeout(function () {
          _this2.emit('changed');
        }, 100);
      });
    }
  }]);
  return DialogsService;
}(_events.default);

var _default = new DialogsService();

exports.default = _default;