import {
  Application,
  Button,
  notifications
} from '../../../../../../lib';
import React, { ReactElement } from 'react';

export default (): ReactElement => (
  <Application>
    <div id='sidebar' />
    <div>
      <Button
        id='show-notification-error'
        onClick={ (): void => {
          notifications.show({ type: 'error', text: 'This is a notification of type error!' });
        } }
      >
        Show notification (error)
      </Button>
      <Button
        id='show-notification-success'
        onClick={ (): void => {
          notifications.show({ type: 'success', text: 'This is a notification of type success!' });
        } }
      >
        Show notification (success)
      </Button>
    </div>
  </Application>
);
