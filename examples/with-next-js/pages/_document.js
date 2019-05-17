import NextDocument from 'next/document';
import React from 'react';
import { StyleCollector } from '../../../dist';

class CustomDocument extends NextDocument {
  static async getInitialProps (originalContext) {
    const collection = StyleCollector.createCollection();

    const customContext = {
      ...originalContext,
      renderPage () {
        originalContext.renderPage({
          enhanceApp: App => props => (
            <StyleCollector collection={ collection }>
              <App { ...props } />
            </StyleCollector>
          )
        });
      }
    };

    const initialProps = await NextDocument.getInitialProps(customContext);

    return {
      ...initialProps,
      styles: (
        <React.Fragment>
          { initialProps.styles }
          <style type='text/css' id='server-side-styles' dangerouslySetInnerHTML={{ __html: collection.toString() }} />
        </React.Fragment>
      )
    };
  }
}

export default CustomDocument;
