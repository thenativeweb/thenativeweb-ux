import NextDocument from 'next/document';
import React from 'react';
import { StyleCollector } from 'thenativeweb-ux';

class CustomDocument extends NextDocument {
  static async getInitialProps (ctx) {
    const collection = StyleCollector.createCollection();
    const originalRenderPage = ctx.renderPage;

    /* eslint-disable no-param-reassign */
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => (
          <StyleCollector collection={ collection }>
            <App { ...props } />
          </StyleCollector>
        )
      });
    /* eslint-enable no-param-reassign */

    // Run the parent `getInitialProps` using `ctx` that now includes our custom `renderPage`
    const initialProps = await NextDocument.getInitialProps(ctx);

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
