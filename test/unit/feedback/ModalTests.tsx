import act from '../../shared/act';
import assert from 'assertthat';
import { click } from '../../shared/eventDispatchers';
import React from 'react';
import ReactDOM from 'react-dom';
import { Modal, ThemeProvider } from '../../../lib';
import getPortalRootNode from '../../../lib/services/getPortalRootNode';

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
          <Modal isVisible={ true } onCancel={ onCancel } />
        </ThemeProvider>,
        container
      );
    });

    const modal = getPortalRootNode().querySelector<HTMLElement>('[class^=Modal]');
    const backdrop = modal!.querySelector<HTMLElement>('[class^=Backdrop]');

    assert.that(modal).is.not.null();

    act((): void => {
      click(backdrop!);
    });

    assert.that(canceled).is.true();
  });
});
