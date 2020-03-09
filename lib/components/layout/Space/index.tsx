import { getSpaceDependentClassNamesFromProps } from '../../../styles/utils';
import { ResponsiveSpaceProp } from '../../../types/ResponsiveSpaceProp';
import { Theme } from '../../../themes';
import { classNames, createUseStyles } from '../../../styles';
import React, { FunctionComponent, ReactElement } from 'react';
import { spaceDependentProperties, styles } from './styles';

interface SpaceProps {
  between?: ResponsiveSpaceProp;
  className?: string;
  id?: string;
  padding?: ResponsiveSpaceProp;
  paddingLeft?: ResponsiveSpaceProp;
  paddingRight?: ResponsiveSpaceProp;
  paddingTop?: ResponsiveSpaceProp;
  paddingBottom?: ResponsiveSpaceProp;
  paddingX?: ResponsiveSpaceProp;
  paddingY?: ResponsiveSpaceProp;
}

const useStyles = createUseStyles<Theme, 'Space'>(styles);

const Space: FunctionComponent<SpaceProps> = ({ id, className, children, ...props }): ReactElement => {
  const classes = useStyles();
  const spaceDependentClassNames = getSpaceDependentClassNamesFromProps({
    props: props as Partial<{ [key: string]: ResponsiveSpaceProp }>,
    classes,
    definitions: spaceDependentProperties
  });

  const componentClasses = classNames(classes.Space, spaceDependentClassNames, className);

  return (
    <div id={ id } className={ componentClasses }>
      { children }
    </div>
  );
};

Space.displayName = 'Space';

export { Space };
