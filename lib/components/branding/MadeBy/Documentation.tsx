import { ComponentPreview } from '../../../components/documentation/ComponentPreview';
import { Headline, MadeBy, Paragraph } from '../../..';
import React, { ReactElement } from 'react';

const Documentation = (): ReactElement => (
  <React.Fragment>
    <Headline>MadeBy</Headline>

    <Paragraph>
      The <code>MadeBy</code> component displays whom the application was
      developed by. Switch the <code>color</code> property
      to <code>light</code> if you would like to place it on
      a <code>dark</code> background.
    </Paragraph>

    <ComponentPreview useAllThemes={ true }>
      <React.Fragment>
        <MadeBy />
        <MadeBy size='md' />
        <MadeBy size='lg' />

        <div style={{ background: 'black' }}>
          <MadeBy size='sm' color='light' />
          <MadeBy size='md' color='light' />
          <MadeBy size='lg' color='light' />
        </div>
      </React.Fragment>
    </ComponentPreview>

    <Headline level='2'>Resizing the brand</Headline>

    <Paragraph>
      Optionally, you may provide a partner using the <code>partner</code> property.
    </Paragraph>

    <ComponentPreview useAllThemes={ true }>
      <React.Fragment>
        <MadeBy
          partner={{ name: 'Intuity', href: 'https://www.intuity.de' }}
        />
        <div style={{ background: 'black' }}>
          <MadeBy
            partner={{ name: 'Intuity', href: 'https://www.intuity.de' }}
            color='light'
          />
        </div>
      </React.Fragment>
    </ComponentPreview>
  </React.Fragment>
);

export { Documentation };
