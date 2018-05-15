const portals = [];

const getPortalRootNode = function (options = {}) {
  const id = options.id || 'thenativeweb-ux-portal',
        tag = options.tag || 'span';

  let portal = portals[id];

  if (!portal) {
    portal = document.createElement(tag);

    portal.setAttribute('id', id);
    document.body.appendChild(portal);

    portals[id] = portal;
  }

  return portal;
};

export default getPortalRootNode;
