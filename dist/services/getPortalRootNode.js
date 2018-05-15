'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var portals = [];

var getPortalRootNode = function getPortalRootNode() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var id = options.id || 'thenativeweb-ux-portal',
      tag = options.tag || 'span';

  var portal = portals[id];

  if (!portal) {
    portal = document.createElement(tag);

    portal.setAttribute('id', id);
    document.body.appendChild(portal);

    portals[id] = portal;
  }

  return portal;
};

exports.default = getPortalRootNode;