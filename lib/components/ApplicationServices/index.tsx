import Dialogs from '../Dialogs';
import Icons from '../Icons';
import Notifications from '../Notifications';
import React, { FunctionComponent, ReactElement } from 'react';

const ApplicationServices: FunctionComponent = (): ReactElement => (
  <span suppressHydrationWarning={ true }>
    <Icons />
    <Dialogs />
    <Notifications />
  </span>
);

export default ApplicationServices;
