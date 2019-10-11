import { GenerateId } from 'jss';
import { createGenerateId, SheetsRegistry } from 'react-jss';
import React, { ReactElement } from 'react';

class ServerSideStyles {
  public registry: SheetsRegistry;

  public generateId: GenerateId;

  public constructor () {
    this.registry = new SheetsRegistry();
    this.generateId = createGenerateId();
  }

  public generateStyleTag (): ReactElement {
    return (
      <style id='server-side-styles' dangerouslySetInnerHTML={{ __html: this.registry.toString() }} />
    );
  }
}

export default ServerSideStyles;
