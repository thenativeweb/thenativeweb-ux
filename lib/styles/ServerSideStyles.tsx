import { GenerateId } from 'jss';
import { minifyCss } from './minifyCss';
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
    const styles = this.registry.toString();

    const minifiedStyles = minifyCss(styles);

    return (
      <style id='server-side-styles' dangerouslySetInnerHTML={{ __html: minifiedStyles }} />
    );
  }
}

export { ServerSideStyles };
