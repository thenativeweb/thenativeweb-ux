import { ComponentPreview } from '../../../components/documentation/ComponentPreview';
import { Brand, Headline, Paragraph } from '../../..';
import React, { ReactElement } from 'react';

const Documentation = (): ReactElement => (
  <React.Fragment>
    <Headline>Brand</Headline>

    <Paragraph>
      The <code>Brand</code> component displays the <em>the native web</em> brand.
    </Paragraph>

    <ComponentPreview>
      <div>
        <Brand />
      </div>
    </ComponentPreview>

    <Headline level='2'>Resizing the brand</Headline>

    <Paragraph>
      The <code>Brand</code> is available in different
      sizes, <code>sm</code>, <code>md</code>, and <code>lg</code>. If you
      don&apos;t specify a size, it defaults to <code>md</code>.
    </Paragraph>

    <ComponentPreview>
      <div>
        <Brand size='sm' />
        <hr />
        <Brand size='md' />
        <hr />
        <Brand size='lg' />
      </div>
    </ComponentPreview>

    <Headline level='2'>Minimizing the brand</Headline>

    <Paragraph>
      The <code>Brand</code> is available in a minimized version. To use it,
      set its <code>type</code> property to <code>minimal</code>.
    </Paragraph>

    <ComponentPreview>
      <div>
        <Brand size='sm' type='minimal' />
        <hr />
        <Brand size='md' type='minimal' />
        <hr />
        <Brand size='lg' type='minimal' />
      </div>
    </ComponentPreview>

    <Headline level='2'>Grayscaling the brand</Headline>

    <Paragraph>
      The <code>Brand</code> is available in a grayscaled version. To use it,
      set its <code>color</code> property to <code>monochrome</code>. The
      grayscaled version is only available for the minimized <code>Brand</code>.
    </Paragraph>

    <ComponentPreview>
      <div>
        <Brand size='sm' type='minimal' color='monochrome' />
        <hr />
        <Brand size='md' type='minimal' color='monochrome' />
        <hr />
        <Brand size='lg' type='minimal' color='monochrome' />
      </div>
    </ComponentPreview>

    <Headline level='2'>Making the brand interactive</Headline>

    <Paragraph>
      The <code>Brand</code> is available as an interactive element. To make it
      interactive, set its <code>isInteractive</code> property
      to <code>true</code>. The interactive version is only available for the
      minimized <code>Brand</code>.
    </Paragraph>

    <ComponentPreview>
      <div>
        <Brand size='sm' type='minimal' isInteractive={ true } />
        <hr />
        <Brand size='md' type='minimal' isInteractive={ true } />
        <hr />
        <Brand size='lg' type='minimal' isInteractive={ true } />
        <hr />
        <Brand size='sm' type='minimal' color='monochrome' isInteractive={ true } />
        <hr />
        <Brand size='md' type='minimal' color='monochrome' isInteractive={ true } />
        <hr />
        <Brand size='lg' type='minimal' color='monochrome' isInteractive={ true } />
      </div>
    </ComponentPreview>
  </React.Fragment>
);

export { Documentation };
