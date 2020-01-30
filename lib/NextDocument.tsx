import { RenderPageResult } from 'next/dist/next-server/lib/utils';
import Document, { DocumentContext, DocumentInitialProps } from 'next/document';
import React, { ReactElement } from 'react';
import { ServerSideStyles, StaticGlobalStyles, StyleCollector, Theme } from '.';

class NextDocument extends Document {
  public static async getInitialPropsWithTheme (originalContext: DocumentContext, theme: Theme): Promise<DocumentInitialProps> {
    const serverSideStyles = new ServerSideStyles();
    const staticGlobalStyles = new StaticGlobalStyles({ theme });

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
          { staticGlobalStyles.generateStyleTag() }
        </React.Fragment>
      )
    };
  }
}

export { NextDocument };
