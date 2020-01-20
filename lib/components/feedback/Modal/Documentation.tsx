import { ComponentPreview } from '../../../components/documentation/ComponentPreview';
import { Button, ControlGroup, ControlGroupItem, Dropdown, Headline, Modal, Paragraph } from '../../..';
import React, { Fragment, ReactElement, useState } from 'react';

const Documentation = (): ReactElement => {
  const [ isFirstModalVisible, setIsFirstModalVisible ] = useState(false);
  const [ isSecondModalVisible, setIsSecondModalVisible ] = useState(false);

  const [ isThirdModalVisible, setIsThirdModalVisible ] = useState(false);
  const [ attach, setAttach ] = useState('right');
  const [ size, setSize ] = useState('sm');

  return (
    <React.Fragment>
      <Headline>Modal</Headline>

      <Paragraph>
        The <code>Modal</code> component is used display a temporary layer above
        the default content layer. It can be used gather feedback or present
        additional information that does not fit or belong inside the default
        content layer.
      </Paragraph>
      <Paragraph>
        It is blocking access to the default content layer, so this component
        will interrupt the current workflow of the user. Make sure to use it
        wisely.
      </Paragraph>
      <Paragraph>
        The <code>Modal</code> is a controlled component that can be shown
        by setting <code>isVisible</code> to <code>true</code>.
        Pressing the <code>Escape</code> key, pressing the close button in
        the header, or clicking on the dark backdrop element that darkens the
        underlying content layer will trigger the <code>onCancel</code>.
        Make sure to react to it and to update your state accordingly.
      </Paragraph>

      <ComponentPreview>
        <Fragment>
          <Button onClick={ (): void => setIsFirstModalVisible(true) }>Open modal</Button>
          <Modal
            header='This is the header'
            isVisible={ isFirstModalVisible }
            onCancel={ (): void => setIsFirstModalVisible(false) }
          >
            Here goes the content…
          </Modal>
        </Fragment>
      </ComponentPreview>

      <Headline level='2'>Hiding the header</Headline>

      <Paragraph>
        if you need more control of the buttons that should close the header,
        it is possible to remove the header by
        setting <code>showHeader</code> to <code>false</code>.
      </Paragraph>

      <ComponentPreview>
        <Fragment>
          <Button onClick={ (): void => setIsSecondModalVisible(true) }>Open modal without a header</Button>
          <Modal
            showHeader={ false }
            isVisible={ isSecondModalVisible }
            onCancel={ (): void => setIsSecondModalVisible(false) }
          >
            <div>Here goes the content…</div>
          </Modal>
        </Fragment>
      </ComponentPreview>

      <Headline level='2'>Positioning and sizing</Headline>
      <ComponentPreview>
        <Fragment>
          <ControlGroup>
            <ControlGroupItem label='attach'>
              <Dropdown
                options={
                  [
                    { value: 'right', label: 'right' },
                    { value: 'left', label: 'left' },
                    { value: 'center', label: 'center' }
                  ]
                }
                value={ attach }
                onChange={ (value): void => setAttach(value) }
              />
            </ControlGroupItem>
            <ControlGroupItem label='size'>
              <Dropdown
                options={
                  [
                    { value: 'sm', label: 'sm' },
                    { value: 'md', label: 'md' },
                    { value: 'lg', label: 'lg' },
                    { value: 'fullscreen', label: 'fullscreen' }
                  ]
                }
                value={ attach }
                onChange={ (value): void => setSize(value) }
              />
            </ControlGroupItem>
          </ControlGroup>

          <Button onClick={ (): void => setIsThirdModalVisible(true) }>Open modal</Button>
          <Modal
            attach={ attach as any }
            size={ size as any }
            isVisible={ isThirdModalVisible }
            onCancel={ (): void => setIsThirdModalVisible(false) }
          >
            This is a modal attached to { attach }.
          </Modal>
        </Fragment>
      </ComponentPreview>
    </React.Fragment>
  );
};

export { Documentation };
