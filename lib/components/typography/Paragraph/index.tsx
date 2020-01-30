import { Theme } from '../../..';
import { classNames, createUseStyles } from '../../../styles';
import { ParagraphClassNames, styles } from './styles';
import React, { CSSProperties, FunctionComponent, ReactElement } from 'react';

interface ParagraphProps {
  className?: string;
  id?: string;
  style?: CSSProperties;
}

const useStyles = createUseStyles<Theme, ParagraphClassNames>(styles);

const Paragraph: FunctionComponent<ParagraphProps> = ({
  className,
  children,
  id,
  style
}): ReactElement => {
  const classes = useStyles();
  const componentClasses = classNames(
    classes.Paragraph,
    className
  );

  return (
    <p id={ id } className={ componentClasses } style={ style }>
      { children }
    </p>
  );
};

export { Paragraph };
