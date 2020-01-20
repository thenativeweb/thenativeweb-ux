import { ComponentPreview } from '../../../components/documentation/ComponentPreview';
import { Property } from '../../../components/documentation/Property';
import { Headline, LogoTheNativeWeb } from '../../..';
import React, { ReactElement } from 'react';

const Documentation = (): ReactElement => (
  <React.Fragment>
    <Headline>LogoTheNativeWeb</Headline>

    <ComponentPreview>
      <React.Fragment>
        <LogoTheNativeWeb />

        <hr />

        <Property name='size' value='sm' />

        <LogoTheNativeWeb size='sm' />

        <hr />

        <Property name='size' value='md' />

        <LogoTheNativeWeb size='md' />

        <hr />

        <Property name='size' value='lg' />

        <LogoTheNativeWeb size='lg' />

        <hr />
      </React.Fragment>
    </ComponentPreview>
  </React.Fragment>
);

export { Documentation };
