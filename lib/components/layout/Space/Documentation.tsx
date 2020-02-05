import { ComponentPreview } from '../../../components/documentation/ComponentPreview';
import { Headline, Paragraph, Space } from '../../..';
import React, { Fragment, ReactElement } from 'react';

const Documentation = (): ReactElement => (
  <React.Fragment>
    <Headline>Space</Headline>

    <Paragraph>
      A <code>Space</code> component can be used to add padding around
      other components.
    </Paragraph>

    <ComponentPreview previewPadding={ false }>
      <Fragment>
        <Space padding='1'>
          <div style={{ background: 'deeppink' }}>padding: 1</div>
        </Space>
        <Space padding='2'>
          <div style={{ background: 'deeppink' }}>padding: 2</div>
        </Space>
        <Space padding='3'>
          <div style={{ background: 'deeppink' }}>padding: 3</div>
        </Space>
        <Space padding='15'>
          <div style={{ background: 'deeppink' }}>padding: 15</div>
        </Space>
      </Fragment>
    </ComponentPreview>

    <Headline level='2'>Setting specific spacings</Headline>

    <Paragraph>
      Instead of the default, you can also set specific paddings.
    </Paragraph>

    <ComponentPreview previewPadding={ false }>
      <Fragment>
        <Space paddingTop='1'>
          <div style={{ background: 'deeppink' }}>paddingTop: 3</div>
        </Space>
        <Space paddingBottom='1'>
          <div style={{ background: 'deeppink' }}>paddingBottom: 3</div>
        </Space>
        <Space paddingLeft='1'>
          <div style={{ background: 'deeppink' }}>paddingLeft: 1</div>
        </Space>
        <Space paddingRight='1'>
          <div style={{ background: 'deeppink' }}>paddingRight: 1</div>
        </Space>
      </Fragment>
    </ComponentPreview>

    <Headline level='2'>Using horizontal and vertical shortuts</Headline>

    <Paragraph>
      As you often need to set both horizontal or vertical paddings
      the <code>Space</code> components provides two shortcut
      properties <code>paddingX</code> and <code>paddingY</code>.
    </Paragraph>

    <ComponentPreview previewPadding={ false }>
      <Fragment>
        <Space paddingY='1'>
          <div style={{ background: 'deeppink' }}>paddingY: 3</div>
        </Space>
        <Space paddingX='1'>
          <div style={{ background: 'deeppink' }}>paddingX: 3</div>
        </Space>
      </Fragment>
    </ComponentPreview>

    <Headline level='2'>Using responsive values</Headline>

    <Paragraph>
      All properties can be set depending on the size of the viewport:
    </Paragraph>

    <ComponentPreview previewPadding={ false }>
      <Space padding={{ xs: 1, sm: 2, md: 4, lg: 6, xl: 8 }}>
        <div style={{ background: 'deeppink' }}>{ `padding: { xs: 1, sm: 2, md: 4, lg: 6, xl: 8 }` }</div>
      </Space>
    </ComponentPreview>
  </React.Fragment>
);

export { Documentation };
