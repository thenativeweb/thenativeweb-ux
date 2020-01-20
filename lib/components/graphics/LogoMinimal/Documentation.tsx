import { ComponentPreview } from '../../../components/documentation/ComponentPreview';
import { Property } from '../../../components/documentation/Property';
import { Headline, LogoMinimal } from '../../..';
import React, { ReactElement } from 'react';

const Documentation = (): ReactElement => (
  <React.Fragment>
    <Headline>LogoMinimal</Headline>

    <ComponentPreview>
      <React.Fragment>
        <LogoMinimal />

        <hr />

        <Property name='size' value='sm' />

        <LogoMinimal size='sm' />

        <hr />

        <Property name='size' value='md' />

        <LogoMinimal size='md' />

        <hr />

        <Property name='size' value='lg' />

        <LogoMinimal size='lg' />

        <hr />
      </React.Fragment>
    </ComponentPreview>
  </React.Fragment>
);

export { Documentation };
