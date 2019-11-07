import React, { ReactNode } from 'react';

const isDomNode = function (node: ReactNode): boolean {
  return React.isValidElement(node) && typeof node.type === 'string';
};

export { isDomNode };
