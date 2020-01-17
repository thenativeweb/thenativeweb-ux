import { classNames, createUseStyles } from '../../../styles';
import { Container, Theme } from '../../..';
import { NonIdealStateClassNames, styles } from './styles';
import React, { FunctionComponent, ReactElement } from 'react';

interface NonIdealStateProps {
  id?: string;
  className?: string;
  cause: string;
}

const useStyles = createUseStyles<Theme, NonIdealStateClassNames>(styles);

const NonIdealState: FunctionComponent<NonIdealStateProps> = ({
  id,
  className,
  cause,
  children
}): ReactElement => {
  const classes = useStyles();

  return (
    <Container>
      <div id={ id } className={ classNames(classes.NonIdealState, className) }>
        <div className={ classes.Cause }>{ cause }</div>
        <div className={ classes.Help }>
          { children }
        </div>
      </div>
    </Container>
  );
};

export { NonIdealState };
