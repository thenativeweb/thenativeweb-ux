import { GenerateId } from 'jss';
import { createGenerateId, SheetsRegistry } from 'react-jss';
import React, { FunctionComponent, ReactElement } from 'react';

interface CollectionCreatorProps {
  registry: SheetsRegistry;
  generateId: GenerateId;
  generateStyleTag: ReactElement;
}

const CollectionCreator: FunctionComponent<CollectionCreatorProps> = (): any => {
  const registry = new SheetsRegistry();
  const generateId = createGenerateId();

  const collector = {
    registry,
    generateId,
    generateStyleTag (): ReactElement {
      return (<style id='server-side-stysles' dangerouslySetInnerHTML={{ __html: registry.toString() }} />);
    }
  };

  return collector;
};

export default CollectionCreator;
