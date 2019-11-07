import { createUseStyles } from '../../../styles';
import { Theme } from '../../../themes';
import React, { FunctionComponent, ReactElement } from 'react';
import styles, { SidebarClassNames } from './styles';

interface SidebarProps {
  id?: string;
}

const useStyles = createUseStyles<Theme, SidebarClassNames>(styles);

const Sidebar: FunctionComponent<SidebarProps> = ({ children, id }): ReactElement => {
  const classes = useStyles();

  return (
    <div id={ id } className={ classes.Sidebar }>
      { children }
    </div>
  );
};

export default Sidebar;
