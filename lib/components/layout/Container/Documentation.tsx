import { ComponentPreview } from '../../../components/documentation/ComponentPreview';
import { Container, ControlGroup, ControlGroupItem, Dropdown, Headline, Paragraph } from '../../..';
import React, { ReactElement, useState } from 'react';

const Documentation = (): ReactElement => {
  const [ horizontal, setHorizontal ] = useState('center');
  const [ vertical, setVertical ] = useState('center');

  return (
    <React.Fragment>
      <Headline>Container</Headline>

      <Paragraph>
      A <code>Container</code> can be used to position a single child
        component on a horizontal and vertical axis. The most common use case
        this component is to center a child both horizontally and vertically
        which is the default option.
      </Paragraph>

      <ComponentPreview>
        <Container style={{ height: '100%' }}>
          <div style={{ background: 'deeppink' }}>Centered child.</div>
        </Container>
      </ComponentPreview>

      <Headline level='2'>Setting vertical and horizontal</Headline>

      <Paragraph>
        The position of the child can be controlled
        using <code>vertical</code> and <code>horizontal</code>.
      </Paragraph>

      <ComponentPreview>
        <React.Fragment>
          <ControlGroup>
            <ControlGroupItem label='vertical'>
              <Dropdown
                options={
                  [
                    { value: 'top', label: 'top' },
                    { value: 'center', label: 'center' },
                    { value: 'bottom', label: 'bottom' },
                    { value: 'stretch', label: 'stretch' }
                  ]
                }
                value={ vertical }
                onChange={ (value): void => setVertical(value) }
              />
            </ControlGroupItem>
            <ControlGroupItem label='horizontal'>
              <Dropdown
                options={
                  [
                    { value: 'left', label: 'left' },
                    { value: 'center', label: 'center' },
                    { value: 'right', label: 'right' },
                    { value: 'stretch', label: 'stretch' }
                  ]
                }
                value={ horizontal }
                onChange={ (value): void => setHorizontal(value) }
              />
            </ControlGroupItem>
          </ControlGroup>
          <Container
            background='dark'
            vertical={ vertical as any }
            horizontal={ horizontal as any }
            style={{ height: 100 }}
          >
            <div style={{ background: 'deeppink' }}>
              I&apos;m a child with vertical set to { vertical } and
              horizontal set to { horizontal}.
            </div>
          </Container>
        </React.Fragment>
      </ComponentPreview>

      <Headline level='2'>Setting the background color</Headline>

      <ComponentPreview>
        <React.Fragment>
          <Container background='dark' style={{ height: 100 }}>
            <div>Child on dark background.</div>
          </Container>
          <Container background='light' style={{ height: 100 }}>
            <div>Child on light background.</div>
          </Container>
          <Container background='none' style={{ height: 100 }}>
            <div>Child on a transparent background.</div>
          </Container>
        </React.Fragment>
      </ComponentPreview>

      <Headline level='2'>Making a Container scrollable</Headline>

      <ComponentPreview>
        <Container background='dark' style={{ height: 200 }} isScrollable={ true }>
          <div style={{ background: 'deeppink', width: 400 }}>
            I am very large so my parent is scrollable.
            <div style={{ height: 400 }} />
            This is the end.
          </div>
        </Container>
      </ComponentPreview>
    </React.Fragment>
  );
};

export { Documentation };
