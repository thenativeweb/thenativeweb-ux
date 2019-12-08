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
      a <code>light</code> background.
    </Paragraph>

    <ComponentPreview useAllThemes={ true }>
      <React.Fragment>
        <div style={{ background: 'black' }}>
          <MadeBy />
          <MadeBy size='md' />
          <MadeBy size='lg' />
        </div>

        <MadeBy color='light' />
        <MadeBy color='light' size='md' />
        <MadeBy color='light' size='lg' />
      </React.Fragment>
    </ComponentPreview>

    <Headline level='2'>Resizing the brand</Headline>

    <Paragraph>
      Optionally, you may provide a partner using the <code>partner</code> property.
    </Paragraph>

    <ComponentPreview useAllThemes={ true }>
      <React.Fragment>
        <div style={{ background: 'black' }}>
          <MadeBy
            partner={{ name: 'Intuity', href: 'https://www.intuity.de' }}
          />
        </div>
        <MadeBy
          partner={{ name: 'Intuity', href: 'https://www.intuity.de' }}
          color='light'
        />
      </React.Fragment>
    </ComponentPreview>
  </React.Fragment>
);

export { Documentation };
