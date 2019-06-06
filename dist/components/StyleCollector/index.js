"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactJss = require("react-jss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StyleCollector = function StyleCollector(_ref) {
  var children = _ref.children,
      collection = _ref.collection;

  if (!collection) {
    throw new Error('Configuration is missing.');
  }

  var registry = collection.registry,
      generateId = collection.generateId;

  if (!registry || !generateId) {
    throw new Error('Invalid configuration.');
  }

  return _react["default"].createElement(_reactJss.JssProvider, {
    registry: registry,
    generateId: generateId
  }, children);
};

StyleCollector.createCollection = function () {
  var registry = new _reactJss.SheetsRegistry();
  var generateId = (0, _reactJss.createGenerateId)();
  var collector = {
    registry: registry,
    generateId: generateId,
    generateStyleTag: function generateStyleTag() {
      return _react["default"].createElement("style", {
        id: "server-side-styles",
        dangerouslySetInnerHTML: {
          __html: registry.toString()
        }
      });
    }
  };
  return collector;
};

var _default = StyleCollector;
exports["default"] = _default;