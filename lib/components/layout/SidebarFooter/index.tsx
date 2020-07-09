import { createUseStyles } from '../../../styles';
import React, { FunctionComponent, ReactElement } from 'react';
import { SidebarFooterClassNames, styles } from './styles';

const useStyles = createUseStyles<SidebarFooterClassNames>(styles);

const SidebarFooter: FunctionComponent = ({ children }): ReactElement => {
  const classes = useStyles();

  return (
    <div className={ classes.SidebarFooter }>
      { children }
    </div>
  );
};

SidebarFooter.displayName = 'SidebarFooter';

export { SidebarFooter };
