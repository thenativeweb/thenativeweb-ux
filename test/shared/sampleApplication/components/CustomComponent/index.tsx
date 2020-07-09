import { CustomTheme } from '../../themes/CustomTheme';
import { classNames, createUseStyles } from '../../../../../lib';
import { CustomComponentClassNames, styles } from './styles';
import React, { FunctionComponent, ReactElement } from 'react';

const useStyles = createUseStyles<CustomComponentClassNames, CustomTheme>(styles);

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

export { CustomComponent };
