import { ComponentPreview } from '../../../components/documentation/ComponentPreview';
import { Property } from '../../../components/documentation/Property';
import { Container, Headline, LogoWolkenkit } from '../../..';
import React, { ReactElement } from 'react';

const Documentation = (): ReactElement => (
  <React.Fragment>
    <Headline>LogoWolkenkit</Headline>

    <ComponentPreview>
      <React.Fragment>
        <Container style={{ height: 100 }} background='dark'><LogoWolkenkit /></Container>

        <hr />

        <Property name='size' value='sm' />

        <Container style={{ height: 100 }} background='dark'><LogoWolkenkit size='sm' /></Container>

        <hr />

        <Property name='size' value='md' />

        <Container style={{ height: 100 }} background='dark'><LogoWolkenkit size='md' /></Container>

        <hr />

        <Property name='size' value='lg' />

        <Container style={{ height: 180 }} background='dark'><LogoWolkenkit size='lg' /></Container>

        <hr />
      </React.Fragment>
    </ComponentPreview>
  </React.Fragment>
);

export { Documentation };
