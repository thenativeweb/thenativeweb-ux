import act from '../../shared/act';
import assert from 'assertthat';
import { click } from '../../shared/eventDispatchers';
import getPortalRootNode from '../../../lib/services/getPortalRootNode';
import React from 'react';
import ReactDOM from 'react-dom';
import toArray from '../../shared/toArray';
import { Modal, ThemeProvider } from '../../../lib';

suite('Modal', (): void => {
  let container: Element;

  setup((): void => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  teardown((): void => {
    document.body.removeChild(container);
  });

  test('renders with only required properties.', async (): Promise<void> => {
    let canceled = false;

    const onCancel = (): void => {
      canceled = true;
    };

    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Modal className='Modal-for-testing-1' isVisible={ true } onCancel={ onCancel } />
        </ThemeProvider>,
        container
      );
    });

    const modal = getPortalRootNode().querySelector<HTMLElement>('.Modal-for-testing-1');
    const backdrop = getPortalRootNode().querySelector<HTMLElement>('[class^=Backdrop]');

    assert.that(modal).is.not.null();

    act((): void => {
      click(backdrop!);
    });

    assert.that(canceled).is.true();
  });

  test('returns null if isVisible is set to false.', async (): Promise<void> => {
    const onCancel = (): void => {};

    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Modal className='Modal-for-testing-2' isVisible={ false } onCancel={ onCancel } />
        </ThemeProvider>,
        container
      );
    });

    const modal = getPortalRootNode().querySelector<HTMLElement>('.Modal-for-testing-2');

    assert.that(modal).is.null();
  });

  test('sets classes for defined property attach.', async (): Promise<void> => {
    const onCancel = (): void => {};

    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Modal className='Modal-for-testing-3' isVisible={ true } onCancel={ onCancel } attach='left' />
          <Modal className='Modal-for-testing-3' isVisible={ true } onCancel={ onCancel } attach='right' />
          <Modal className='Modal-for-testing-3' isVisible={ true } onCancel={ onCancel } attach='sidebar' />
          <Modal className='Modal-for-testing-3' isVisible={ true } onCancel={ onCancel } attach='center' />
        </ThemeProvider>,
        container
      );
    });

    const modal = toArray(getPortalRootNode().querySelectorAll<HTMLElement>('.Modal-for-testing-3'));
    const [ left, right, sidebar, center ] = modal;

    assert.that(left.className).is.containing('ChromeAttachedLeft');
    assert.that(right.className).is.containing('ChromeAttachedRight');
    assert.that(sidebar.className).is.containing('ChromeAttachedSidebar');
    assert.that(center.className).is.containing('ChromeAttachedCenter');
  });

  test('sets classes for defined property size.', async (): Promise<void> => {
    const onCancel = (): void => {};

    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Modal className='Modal-for-testing-4' isVisible={ true } onCancel={ onCancel } size='sm' />
          <Modal className='Modal-for-testing-4' isVisible={ true } onCancel={ onCancel } size='md' />
          <Modal className='Modal-for-testing-4' isVisible={ true } onCancel={ onCancel } size='lg' />
          <Modal className='Modal-for-testing-4' isVisible={ true } onCancel={ onCancel } size='fullscreen' />
        </ThemeProvider>,
        container
      );
    });

    const modal = toArray(getPortalRootNode().querySelectorAll<HTMLElement>('.Modal-for-testing-4'));
    const [ small, medium, large, fullscreen ] = modal;

    assert.that(small.className).is.containing('ChromeSizeSm');
    assert.that(medium.className).is.containing('ChromeSizeMd');
    assert.that(large.className).is.containing('ChromeSizeLg');
    assert.that(fullscreen.className).is.containing('ChromeSizeFullscreen');
  });

  test('sets classes for defined property padding.', async (): Promise<void> => {
    const onCancel = (): void => {};

    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Modal className='Modal-for-testing-5' isVisible={ true } onCancel={ onCancel } padding='default' />
          <Modal className='Modal-for-testing-5' isVisible={ true } onCancel={ onCancel } padding='none' />
        </ThemeProvider>,
        container
      );
    });

    const [ standard, none ] = toArray(getPortalRootNode().querySelectorAll<HTMLElement>('.Modal-for-testing-5'));

    assert.that(standard.className).is.not.containing('ChromePaddingNone');
    assert.that(none.className).is.containing('ChromePaddingNone');
  });

  test('inserts defined text for header if property showHeader is set to true.', async (): Promise<void> => {
    const onCancel = (): void => {};

    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Modal className='Modal-for-testing-6' isVisible={ true } onCancel={ onCancel } showHeader={ true } header='Hello, this is a Header.' />
          <Modal className='Modal-for-testing-7' isVisible={ true } onCancel={ onCancel } showHeader={ false } />
        </ThemeProvider>,
        container
      );
    });

    const show = getPortalRootNode().querySelector<HTMLElement>('.Modal-for-testing-6 [class^=HeaderText]');

    assert.that(show!.textContent).is.equalTo('Hello, this is a Header.');

    const hide = getPortalRootNode().querySelector<HTMLElement>('.Modal-for-testing-7 [class^=Header]');

    assert.that(hide).is.null();
  });

  test('inserts defined children as content.', async (): Promise<void> => {
    const onCancel = (): void => {};

    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Modal className='Modal-for-testing-8' isVisible={ true } onCancel={ onCancel }>
            I am a modal.
          </Modal>
        </ThemeProvider>,
        container
      );
    });

    const show = getPortalRootNode().querySelector<HTMLElement>('.Modal-for-testing-8');

    assert.that(show!.textContent).is.equalTo('I am a modal.');
  });
});
