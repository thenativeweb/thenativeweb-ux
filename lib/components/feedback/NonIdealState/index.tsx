import { classNames, createUseStyles } from '../../../styles';
import { Container, Theme } from '../../..';
import { NonIdealStateClassNames, styles } from './styles';
import React, { FunctionComponent, ReactElement } from 'react';

interface NonIdealStateProps {
  className?: string;
  cause?: string;
}

const useStyles = createUseStyles<Theme, NonIdealStateClassNames>(styles);

const NonIdealState: FunctionComponent<NonIdealStateProps> = ({
  className,
  cause,
  children
}): ReactElement => {
  const classes = useStyles();

  return (
    <Container>
      <div className={ classNames(classes.NonIdealState, className) }>
        <div className={ classes.Cause }>{ cause }</div>
        <div className={ classes.Help }>
          { children }
        </div>
      </div>
    </Container>
  );
};

export { NonIdealState };
