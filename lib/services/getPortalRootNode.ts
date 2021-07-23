const portals: Record<string, HTMLElement | undefined> = {};

const getPortalRootNode = function (
  id = 'thenativeweb-ux-portal',
  tag = 'span'
): HTMLElement {
  let portal = portals[id];

  if (!portal) {
    portal = document.createElement(tag);

    portal.setAttribute('id', id);
    document.body.appendChild(portal);

    portals[id] = portal;
  }

  return portal;
};

export { getPortalRootNode };
