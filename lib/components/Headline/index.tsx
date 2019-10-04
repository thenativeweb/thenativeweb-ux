import { Classes } from 'jss';
import styles from './styles';
import { classNames, withStyles } from '../../styles';
import React, { CSSProperties, FunctionComponent, ReactElement } from 'react';

interface HeadlineProps {
  classes: Classes;
  id?: 'string';
  level?: '1' | '2';
  style?: CSSProperties;
}

const Headline: FunctionComponent<HeadlineProps> = ({
  classes,
  children,
  id,
  level = '1',
  style
}): ReactElement => {
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

export default withStyles(styles)(Headline);
