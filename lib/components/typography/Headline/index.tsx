import { Theme } from '../../..';
import { classNames, createUseStyles } from '../../../styles';
import React, { CSSProperties, FunctionComponent, ReactElement } from 'react';
import styles, { HeadlineClassNames } from './styles';

interface HeadlineProps {
  id?: string;
  level?: '1' | '2';
  style?: CSSProperties;
}

const useStyles = createUseStyles<Theme, HeadlineClassNames>(styles);

const Headline: FunctionComponent<HeadlineProps> = ({
  children,
  id,
  level = '1',
  style
}): ReactElement => {
  const classes = useStyles();

  const componentClasses = classNames(classes.Headline, {
    [classes.Level1]: level === '1',
    [classes.Level2]: level === '2'
  });

  return (
    <div id={ id } className={ componentClasses } style={ style }>
      { children }
    </div>
  );
};

export default Headline;
