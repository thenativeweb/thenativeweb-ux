import act from '../../shared/act';
import assert from 'assertthat';
import { click } from '../../shared/eventDispatchers';
import getPortalRootNode from '../../../lib/services/getPortalRootNode';
import React from 'react';
import ReactDOM from 'react-dom';
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
});
