import { ComponentPreview } from '../../../components/documentation/ComponentPreview';
import { Property } from '../../documentation/Property';
import { Headline, Paragraph, Product, ThemeProvider, themes } from '../../..';
import React, { ReactElement } from 'react';

const Documentation = (): ReactElement => (
  <React.Fragment>
    <Headline>Product</Headline>

    <Paragraph>
      The `Product` component displays a product&apos;s brand. To use it, provide the product&apos;s name using the `name` property. Additionally, you may set a `size` as explained previously.
    </Paragraph>

    <ComponentPreview background='dark' useAllThemes={ true }>
      <React.Fragment>
        <Product name='console' />

        <hr />

        <Property name='size' value='sm' />
        <Product name='console' size='sm' />

        <hr />

        <Property name='size' value='md' />
        <Product name='console' size='md' />

        <hr />

        <Property name='size' value='lg' />
        <Product name='console' size='lg' />
        <hr />

        <Property name='size' value='xl' />
        <Product name='console' size='xl' />
      </React.Fragment>
    </ComponentPreview>

    <Headline level='2'>wolkenkit</Headline>

    <ComponentPreview>
      <div>
        <ThemeProvider theme={ new themes.Wolkenkit() }>
          <div style={{ background: 'rgb(47, 51, 59)' }}>
            <Product name='wolkenkit' />
            <hr />
            <Product name='wolkenkit' size='lg' />
            <hr />
            <Product name='wolkenkit' size='xl' isAnimated={ true } />
            <hr />
            <Product name='wolkenkit' type='logo-only' />
            <hr />
            <Product name='wolkenkit' type='text-only' />
          </div>
        </ThemeProvider>
      </div>
    </ComponentPreview>
  </React.Fragment>
);

export { Documentation };
