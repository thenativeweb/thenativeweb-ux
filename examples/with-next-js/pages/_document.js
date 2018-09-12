import Document from 'next/document';
import React from 'react';
import { StyleCollector } from '../../../dist/index';

export default class AppDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const renderedPage = renderPage(Page => props => (
      <StyleCollector>
        <Page { ...props } />
      </StyleCollector>
    ));

    const styles = (
      <style type='text/css' data-meta='jss-ssr' dangerouslySetInnerHTML={{ __html: StyleCollector.getStyles() }} />
    );

    return { ...renderedPage, styles };
  }
}
