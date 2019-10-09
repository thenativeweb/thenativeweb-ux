import { JssProvider } from 'react-jss';
import React, { FunctionComponent, ReactElement } from 'react';

interface StyleCollectorProps {
  collection: any;
  createCollection: () => ReactElement;
}

const StyleCollector: FunctionComponent<StyleCollectorProps> = ({ children, collection }): ReactElement => {
  if (!collection) {
    throw new Error('Configuration is missing.');
  }

  const { registry, generateId } = collection;

  if (!registry || !generateId) {
    throw new Error('Invalid configuration.');
  }

  return (
    <JssProvider registry={ registry } generateId={ generateId }>{ children }</JssProvider>
  );
};

export default StyleCollector;
