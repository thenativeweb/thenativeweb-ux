import { ComponentPreview } from '../../../components/documentation/ComponentPreview';
import { Property } from '../../../components/documentation/Property';
import { Headline, LogoFull } from '../../..';
import React, { ReactElement } from 'react';

const Documentation = (): ReactElement => (
  <React.Fragment>
    <Headline>LogoFull</Headline>

    <ComponentPreview>
      <React.Fragment>
        <LogoFull />

        <hr />

        <Property name='size' value='sm' />

        <LogoFull size='sm' />

        <hr />

        <Property name='size' value='md' />

        <LogoFull size='md' />

        <hr />

        <Property name='size' value='lg' />

        <LogoFull size='lg' />

        <hr />
      </React.Fragment>
    </ComponentPreview>
  </React.Fragment>
);

export { Documentation };
