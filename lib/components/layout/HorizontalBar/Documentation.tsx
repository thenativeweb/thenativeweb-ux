import { ComponentPreview } from '../../../components/documentation/ComponentPreview';
import { Headline, HorizontalBar, Paragraph } from '../../..';
import React, { ReactElement } from 'react';

const Documentation = (): ReactElement => (
  <React.Fragment>
    <Headline>HorizontalBar</Headline>

    <Paragraph>
      The <code>HorizontalBar</code> can be used for building all kinds
      of bars, e.g. a header or footer for a content panel. By default,
      a <code>HorizontalBar</code> is optically separated by a lower border.
    </Paragraph>

    <ComponentPreview previewPadding={ false }>
      <div>
        <HorizontalBar>
          This is a bar
        </HorizontalBar>
        <HorizontalBar>
          <div style={{ flexGrow: 1 }}>Growing element</div>
          <div style={{ flexGrow: 0 }}>Element with fix width</div>
        </HorizontalBar>
      </div>
    </ComponentPreview>

    <Headline level='2'>Setting the background</Headline>

    <ComponentPreview previewPadding={ false }>
      <div>
        <HorizontalBar background='dark' borderBottom={ true }>
          This is dark bar
        </HorizontalBar>
        <HorizontalBar background='dark' borderBottom={ true }>
          This is dark bar
        </HorizontalBar>
      </div>
    </ComponentPreview>

    <Headline level='2'>Sizing elements</Headline>

    <ComponentPreview previewPadding={ false }>
      <div>
        <HorizontalBar borderBottom={ true }>
          <div style={{ flexGrow: 1, background: 'deeppink' }}>Growing element</div>
          <div style={{ flexGrow: 0, background: 'gray' }}>Fixed width</div>
        </HorizontalBar>
      </div>
    </ComponentPreview>

    <Headline level='2'>Aligning elements</Headline>

    <ComponentPreview previewPadding={ false }>
      <div>
        <HorizontalBar borderBottom={ true } align='left'>
          <div style={{ background: 'deeppink' }}>1</div>
          <div style={{ background: 'gray' }}>2</div>
        </HorizontalBar>
        <HorizontalBar borderBottom={ true } align='center'>
          <div style={{ background: 'deeppink' }}>1</div>
          <div style={{ background: 'gray' }}>2</div>
        </HorizontalBar>
        <HorizontalBar borderBottom={ true } align='right'>
          <div style={{ background: 'deeppink' }}>1</div>
          <div style={{ background: 'gray' }}>2</div>
        </HorizontalBar>
        <HorizontalBar borderBottom={ true } align='space-between'>
          <div style={{ background: 'deeppink' }}>1</div>
          <div style={{ background: 'gray' }}>2</div>
        </HorizontalBar>
      </div>
    </ComponentPreview>
  </React.Fragment>
);

export { Documentation };
