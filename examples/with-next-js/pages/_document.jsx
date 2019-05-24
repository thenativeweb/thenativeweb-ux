import NextDocument from 'next/document';
import React from 'react';
import { StyleCollector } from 'thenativeweb-ux';

class CustomDocument extends NextDocument {
  static async getInitialProps (originalContext) {
    const collection = StyleCollector.createCollection();

    const customContext = {
      ...originalContext,
      renderPage: () => (
        originalContext.renderPage({
          enhanceApp: App => props => (
            <StyleCollector collection={ collection }>
              <App { ...props } />
            </StyleCollector>
          )
        })
      )
    };

    const initialProps = await NextDocument.getInitialProps(customContext);

    return {
      ...initialProps,
      styles: (
        <React.Fragment>
          { initialProps.styles }
          { collection.generateStyleTag() }
        </React.Fragment>
      )
    };
  }
}

export default CustomDocument;
