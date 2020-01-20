import { ComponentPreview } from '../../../components/documentation/ComponentPreview';
import { Property } from '../../../components/documentation/Property';
import { Headline, Icon, Paragraph } from '../../..';
import React, { ReactElement } from 'react';

const Documentation = (): ReactElement => (
  <React.Fragment>
    <Headline>Icon</Headline>

    <Paragraph>
      Use the <code>Icon</code> component to apply consistent Icons to
      your <code>Application</code> or <code>Website</code>.
    </Paragraph>

    <ComponentPreview>
      <Icon name='heart' />
    </ComponentPreview>

    <Paragraph>
      <i>Please note:</i> The <code>Icon</code> component uses SVG symbols under
      the hood. SVG symbols are paths that can be defined only once in DOM tree
      but can be referenced over and over again inside this without duplicating
      the SVG code. In order to make this work, these symbols need to be present
      inside the DOM tree. That&apos;s why the <code>Icon</code> component will
      only work properly when being wrapped in one of the root components,
      e.g. <code>Application</code> or <code>Website</code>. Root components
      ensure that the SVG symbols are present inside the DOM tree.
    </Paragraph>

    <Headline level='2'>Sizes</Headline>

    <ComponentPreview>
      <React.Fragment>
        <Property value='xs' />

        <Icon name='heart' size='xs' />

        <hr />

        <Property value='sm' />

        <Icon name='heart' size='sm' />

        <hr />

        <Property value='md' />

        <Icon name='heart' size='md' />

        <hr />

        <Property value='lg' />

        <Icon name='heart' size='lg' />
      </React.Fragment>
    </ComponentPreview>

    <Headline level='2'>Color</Headline>

    <ComponentPreview>
      <React.Fragment>
        <Property value='default' />

        <Icon name='heart' color='default' />

        <hr />

        <Property value='highlight' />

        <Icon name='heart' color='highlight' />

        <hr />

        <Property value='white' />

        <div style={{ background: 'black', display: 'inline-flex' }}>
          <Icon name='heart' color='white' />
        </div>

        <hr />

        <Property value='current' description='Applies the current color of the parent element' />

        <div style={{ color: 'green' }}>
          <Icon name='heart' color='current' />
        </div>
      </React.Fragment>
    </ComponentPreview>

    <Headline level='2'>Inlining in long running texts</Headline>

    <ComponentPreview>
      <React.Fragment>
        <Property name='type' value='inline' description='Should be used when icons are placed within a long running text' />
        <Paragraph style={{ fontSize: 20 }}>
          This is an icon embedded in a text <Icon name='heart' type='inline' /> it should align with the typo.
        </Paragraph>
        <Paragraph style={{ fontSize: 30 }}>
          This is an icon embedded in a text <Icon name='heart' type='inline' /> it should align with the typo.
        </Paragraph>
      </React.Fragment>
    </ComponentPreview>

    <Headline level='2'>Preserving the size inside flexbox container</Headline>

    <Paragraph>
      Sometimes you use an <code>Icon</code> inside a flex container and need
      have to ensure that the icon will use its original size.
    </Paragraph>

    <ComponentPreview>
      <React.Fragment>
        <Property name='type' value='flex-auto' />

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex', background: 'gray', width: 200, height: 100 }}>
          <p style={{ flexGrow: 1 }}>Some Text</p>
          <Icon name='heart' type='flex-auto' />
        </div>
      </React.Fragment>
    </ComponentPreview>

    <Headline level='2'>All icons</Headline>

    <Paragraph><Icon name='arrow-wide-west' type='inline' size='md' /> arrow-wide-west</Paragraph>
    <Paragraph><Icon name='checkmark' type='inline' size='md' /> checkmark</Paragraph>
    <Paragraph><Icon name='chevron' type='inline' size='md' /> chevron</Paragraph>
    <Paragraph><Icon name='close' type='inline' size='md' /> close</Paragraph>
    <Paragraph><Icon name='error' type='inline' size='md' /> error</Paragraph>
    <Paragraph><Icon name='expand' type='inline' size='md' /> expand</Paragraph>
    <Paragraph><Icon name='github' type='inline' size='md' /> github</Paragraph>
    <Paragraph><Icon name='heart' type='inline' size='md' /> heart</Paragraph>
    <Paragraph><Icon name='info' type='inline' size='md' /> info</Paragraph>
    <Paragraph><Icon name='menu' type='inline' size='md' /> menu</Paragraph>
    <Paragraph><Icon name='nav' type='inline' size='md' /> nav</Paragraph>
    <Paragraph><Icon name='stackoverflow' type='inline' size='md' /> stackoverflow</Paragraph>
    <Paragraph><Icon name='slack' type='inline' size='md' /> slack</Paragraph>
    <Paragraph><Icon name='twitter' type='inline' size='md' /> twitter</Paragraph>

    <Paragraph><Icon name='cloud-medium' type='inline' size='lg' /> cloud-medium</Paragraph>
    <Paragraph><Icon name='cqrs-medium' type='inline' size='lg' /> cqrs-medium</Paragraph>
    <Paragraph><Icon name='event-sourcing-medium' type='inline' size='lg' /> event-sourcing-medium</Paragraph>
    <Paragraph><Icon name='notebook-medium' type='inline' size='lg' /> notebook-medium</Paragraph>
    <Paragraph><Icon name='open-source-medium' type='inline' size='lg' /> open-source-medium</Paragraph>
    <Paragraph><Icon name='server-medium' type='inline' size='lg' /> server-medium</Paragraph>
    <Paragraph><Icon name='phone-medium' type='inline' size='lg' /> phone-medium</Paragraph>
    <Paragraph><Icon name='plus-medium' type='inline' size='lg' /> plus-medium</Paragraph>
    <Paragraph><Icon name='stackoverflow-medium' type='inline' size='lg' /> stackoverflow-medium</Paragraph>
  </React.Fragment>
);

export { Documentation };
