import { JssProvider } from 'react-jss';
import { ServerSideStyles } from '../../../styles';
import React, { FunctionComponent, ReactElement } from 'react';

interface StyleCollectorProps {
  serverSideStyles: ServerSideStyles;
}

const StyleCollector: FunctionComponent<StyleCollectorProps> = ({ children, serverSideStyles }): ReactElement => {
  const { registry, generateId } = serverSideStyles;

  return (
    <JssProvider registry={ registry } generateId={ generateId }>{ children }</JssProvider>
  );
};

StyleCollector.displayName = 'StyleCollector';

export { StyleCollector };
