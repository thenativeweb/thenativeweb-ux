import Document from 'next/document';
import React from 'react';
import { StyleCollector } from '../../../dist/index';

export default class AppDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const decoratePage = Page => props => (
      <StyleCollector>
        <Page { ...props } />
      </StyleCollector>
    );

    const renderedPage = renderPage(decoratePage);

    const styles = (
      <style type='text/css' data-meta='jss-ssr' dangerouslySetInnerHTML={{ __html: StyleCollector.getStyles() }} />
    );

    return { ...renderedPage, styles };
  }
}
