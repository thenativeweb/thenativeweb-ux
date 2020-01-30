import { Dialogs, Icons, Notifications } from '../../..';
import React, { Fragment, FunctionComponent, ReactElement } from 'react';

interface WebsiteProps {
  id?: string;
  useDialogs?: boolean;
  useNotifications?: boolean;
}
const Website: FunctionComponent<WebsiteProps> = ({
  children,
  id,
  useDialogs = false,
  useNotifications = false
}): ReactElement => (
  <Fragment>
    <span id={ id } suppressHydrationWarning={ true }>
      <Icons />
      { useDialogs ? <Dialogs /> : null }
      { useNotifications ? <Notifications /> : null }
    </span>

    { children }
  </Fragment>
);

export { Website };
