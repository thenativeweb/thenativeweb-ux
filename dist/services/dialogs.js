"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _events = _interopRequireDefault(require("events"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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
  _inherits(DialogsService, _EventEmitter);

  function DialogsService() {
    var _this;

    _classCallCheck(this, DialogsService);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DialogsService).call(this));
    _this.state = defaultState;
    return _this;
  }

  _createClass(DialogsService, [{
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
}(_events["default"]);

var _default = new DialogsService();

exports["default"] = _default;