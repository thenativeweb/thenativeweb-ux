import {
  Application,
  Button,
  services
} from '../../../../../../lib';
import React, { ReactElement } from 'react';

const log = function (msg: any): void {
  /* eslint-disable no-console */
  console.log(msg);
  /* eslint-enable no-console */
};

const handleShowConfirmClicked = async function (): Promise<void> {
  const action = await services.dialogs.confirm({
    title: 'Blah',
    actions: {
      cancel: 'Cancel',
      confirm: 'Confirm!'
    }
  });

  log(`confirm::action::${action}::clicked`);
};

export default (): ReactElement => (
  <Application>
    <div id='sidebar' />
    <div>
      <Button id='show-confirm' onClick={ handleShowConfirmClicked }>Show confirm</Button>
    </div>
  </Application>
);
