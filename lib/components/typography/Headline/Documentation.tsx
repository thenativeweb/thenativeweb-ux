import { ComponentPreview } from '../../../components/documentation/ComponentPreview';
import { Headline, Paragraph } from '../../..';
import React, { ReactElement } from 'react';

const Documentation = (): ReactElement => (
  <React.Fragment>
    <Headline>Headline</Headline>

    <Paragraph>
      Use the <code>Headline</code> component and
      its <code>level</code> (ranging from 1 to 5) property to structure long
      textual content. If possible, stick to a maximum level of 3.
    </Paragraph>

    <Paragraph>
      By default every <code>Headline</code> renders a permalink that appears
      when you hover hover it. It can be used to link to a specific headline.
    </Paragraph>

    <ComponentPreview>
      <div style={{ paddingLeft: 20 }}>
        <Headline level='1'>Level 1</Headline>
        <Headline level='2'>Level 2</Headline>
        <Headline level='3'>Level 3</Headline>
        <Headline level='4'>Level 4</Headline>
        <Headline level='5'>Level 5</Headline>
      </div>
    </ComponentPreview>
  </React.Fragment>
);

export { Documentation };
