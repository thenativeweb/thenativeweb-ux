import { createUseStyles } from '../../../styles';
import { Theme } from '../../../themes';
import React, { FunctionComponent, ReactElement } from 'react';
import styles, { SidebarFooterClassNames } from './styles';

const useStyles = createUseStyles<Theme, SidebarFooterClassNames>(styles);

const SidebarFooter: FunctionComponent = ({ children }): ReactElement => {
  const classes = useStyles();

  return (
    <div className={ classes.SidebarFooter }>
      { children }
    </div>
  );
};

export default SidebarFooter;
