import React from 'react';
import { createGenerateId, JssProvider, SheetsRegistry } from 'react-jss';

const StyleCollector = ({ children, collection }) => {
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

StyleCollector.createCollection = function () {
  const registry = new SheetsRegistry();
  const generateId = createGenerateId();

  const collector = {
    registry,
    generateId,
    generateStyleTag () {
      return (<style id='server-side-styles'>{registry.toString()}</style>);
    }
  };

  return collector;
};

export default StyleCollector;
