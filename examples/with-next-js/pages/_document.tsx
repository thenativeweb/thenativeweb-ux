import { RenderPageResult } from 'next/dist/next-server/lib/utils';
import NextDocument, { DocumentContext, DocumentInitialProps } from 'next/document';
import React, { ReactElement } from 'react';
import { ServerSideStyles, StyleCollector } from '../../../lib';

class CustomDocument extends NextDocument {
  public static async getInitialProps (originalContext: DocumentContext): Promise<DocumentInitialProps> {
    const serverSideStyles = new ServerSideStyles();

    const customContext = {
      ...originalContext,
      async renderPage (): Promise<RenderPageResult> {
        return await originalContext.renderPage({
          enhanceApp (App): (props: any) => ReactElement {
            return (props): ReactElement => (
              <StyleCollector serverSideStyles={ serverSideStyles }>
                <App { ...props } />
              </StyleCollector>
            );
          }
        });
      }
    };

    const initialProps = await NextDocument.getInitialProps(customContext);

    return {
      ...initialProps,
      styles: (
        <React.Fragment>
          { initialProps.styles }
          { serverSideStyles.generateStyleTag() }
        </React.Fragment>
      )
    };
  }
}

export default CustomDocument;
