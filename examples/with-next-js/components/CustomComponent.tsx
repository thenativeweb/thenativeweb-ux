import { Styles } from 'jss';
import { classNames, createUseStyles, Theme } from '../../../lib';
import React, { FunctionComponent, ReactElement } from 'react';

const useStyles = createUseStyles<Theme, 'CustomComponent' | 'SizeLg'>((theme: Theme): Styles => ({
  CustomComponent: {
    width: theme.custom.components.CustomComponent.width
  },

  SizeLg: {
    fontSize: '24px'
  }
}));

interface CustomComponentProps {
  className?: string;
  id: string;
  size?: 'lg';
}

const CustomComponent: FunctionComponent<CustomComponentProps> = ({
  className,
  children,
  id,
  size
}): ReactElement => {
  const classes = useStyles();
  const componentClasses = classNames(
    classes.CustomComponent,
    {
      [classes.SizeLg]: size === 'lg'
    },
    className
  );

  return (
    <div id={ id } className={ componentClasses }>
      { children }
    </div>
  );
};

export default CustomComponent;
