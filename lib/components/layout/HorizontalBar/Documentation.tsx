import { ComponentPreview } from '../../../components/documentation/ComponentPreview';
import { Headline, HorizontalBar, Paragraph } from '../../..';
import React, { ReactElement, Fragment } from 'react';
import { Property } from '../../documentation/Property';

const Documentation = (): ReactElement => (
  <React.Fragment>
    <Headline>HorizontalBar</Headline>

    <Paragraph>
      The <code>HorizontalBar</code> can be used for building all kinds
      of bars, e.g. a header or footer element.
    </Paragraph>

    <ComponentPreview previewPadding={ false }>
      <HorizontalBar>
        This is a bar
      </HorizontalBar>
    </ComponentPreview>

    <Headline level='2'>Setting the borders</Headline>

    <Paragraph>
      By default, a <code>HorizontalBar</code> is visually separated by a lower
      border. Use the property <code>borderBottom</code> and <code>borderTop</code> to
      adjust this behaviour.
    </Paragraph>

    <ComponentPreview>
      <Fragment>
        <Property name='borderBottom' value={ false } />
        <HorizontalBar borderBottom={ false }>
          This bar has no border
        </HorizontalBar>
        <Property name='borderTop' value={ true } />
        <HorizontalBar borderTop={ true }>
          This bar has a border top as well as bottom
        </HorizontalBar>
      </Fragment>
    </ComponentPreview>

    <Headline level='2'>Setting the background</Headline>

    <ComponentPreview previewPadding={ false }>
      <HorizontalBar background='dark'>
        This is a dark bar
      </HorizontalBar>
    </ComponentPreview>

    <Headline level='2'>Sizing elements</Headline>

    <Paragraph>
      The children of a <code>HorizontalBar</code> will be rendered from left to
      right, using only the minimum available horizontal space. By
      setting the <code>flexGrow</code> style property, you can enable children
      to occupy all the available horizontal space.
    </Paragraph>

    <ComponentPreview previewPadding={ false }>
      <Fragment>
        <HorizontalBar>
          <div style={{ background: 'deeppink' }}>Element with auto width</div>
          <div style={{ background: 'gray' }}>Another element with auto width</div>
        </HorizontalBar>
        <HorizontalBar>
          <div style={{ flexGrow: 1, background: 'deeppink' }}>Growing element</div>
          <div style={{ flexGrow: 0, background: 'gray' }}>Fixed width</div>
        </HorizontalBar>
      </Fragment>
    </ComponentPreview>

    <Headline level='2'>Aligning elements</Headline>

    <Paragraph>
      The children of a <code>HorizontalBar</code> will be rendered from left
      to right. Use the <code>align</code> property, to adjust this behaviour.
    </Paragraph>

    <ComponentPreview previewPadding={ false }>
      <Fragment>
        <HorizontalBar align='left'>
          <div>1</div>
          <div>2</div>
        </HorizontalBar>

        <HorizontalBar align='center'>
          <div>1</div>
          <div>2</div>
        </HorizontalBar>

        <HorizontalBar align='right'>
          <div>1</div>
          <div>2</div>
        </HorizontalBar>

        <HorizontalBar align='space-between'>
          <div>1</div>
          <div>2</div>
        </HorizontalBar>
      </Fragment>
    </ComponentPreview>
  </React.Fragment>
);

export { Documentation };
