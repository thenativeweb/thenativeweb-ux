import React from 'react';

const isReactElement = function (element: any): boolean {
  return React.isValidElement(element);
};

export { isReactElement };
