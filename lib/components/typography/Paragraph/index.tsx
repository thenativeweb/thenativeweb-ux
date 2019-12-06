import { Styles } from 'jss';
import { classNames, createUseStyles } from '../../../styles';
import { ParagraphClassNames, styles } from './styles';
import React, { FunctionComponent, ReactElement } from 'react';
import { Text, Theme } from '../../..';

interface ParagraphProps {
  className?: string;
  id?: string;
  style?: Styles;
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
    <Text id={ id } className={ componentClasses } style={ style } breakLines={ true }>
      { children }
    </Text>
  );
};

export { Paragraph };
