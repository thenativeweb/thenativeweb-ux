import { ComponentPreview } from '../../../components/documentation/ComponentPreview';
import { Headline, Paragraph, Space } from '../../..';
import React, { Fragment, ReactElement } from 'react';

const Documentation = (): ReactElement => (
  <React.Fragment>
    <Headline>Space</Headline>

    <Paragraph>
      A <code>Space</code> component can be used to add padding around components.
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

    <Headline level='2'>Specific paddings</Headline>

    <Paragraph>
      Instead of the default padding, you can also set specific paddings,
      e.g. <code>paddingTop</code>.
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

    <Headline level='2'>Horizontal and vertical shortcuts</Headline>

    <Paragraph>
      As you often need to set both horizontal or both vertical paddings,
      the <code>Space</code> components provides two shortcut
      properties: <code>paddingX</code> and <code>paddingY</code>.
    </Paragraph>

    <ComponentPreview previewPadding={ false }>
      <Fragment>
        <Space paddingX='3'>
          <div style={{ background: 'deeppink' }}>paddingX: 3</div>
        </Space>
        <Space paddingY='3'>
          <div style={{ background: 'deeppink' }}>paddingY: 3</div>
        </Space>
      </Fragment>
    </ComponentPreview>

    <Headline level='2'>Defining space between children</Headline>

    <Paragraph>
      To specify the space between child elements use
      the <code>between</code> property:
    </Paragraph>

    <ComponentPreview>
      <Space between='3'>
        <div style={{ background: 'deeppink' }}>First</div>
        <div style={{ background: 'deeppink' }}>Second</div>
        <div style={{ background: 'deeppink' }}>Last</div>
      </Space>
    </ComponentPreview>

    <Headline level='2'>Using responsive values</Headline>

    <Paragraph>
      All properties can also be set depending on the size of the viewport:
    </Paragraph>

    <ComponentPreview previewPadding={ false }>
      <Space
        between={{ xs: 1, sm: 2, md: 4, lg: 6, xl: 8 }}
        padding={{ xs: 1, sm: 2, md: 4, lg: 6, xl: 8 }}
      >
        <div style={{ background: 'deeppink' }}>
          The padding of this div will change with the size of the viewport. <br />
          { `{ xs: 1, sm: 2, md: 4, lg: 6, xl: 8 }` }
        </div>
        <div style={{ background: 'deeppink' }}>
          The padding of this div will change with the size of the viewport. <br />
          { `{ xs: 1, sm: 2, md: 4, lg: 6, xl: 8 }` }
        </div>
      </Space>
    </ComponentPreview>
  </React.Fragment>
);

export { Documentation };
