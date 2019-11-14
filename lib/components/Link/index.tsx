import { Theme } from '../..';
import { classNames, createUseStyles } from '../../styles';
import { LinkClassNames, styles } from './styles';
import React, { FunctionComponent, MouseEvent, ReactElement, ReactNode } from 'react';

interface LinkProps {
  className?: string;
  isExternal?: boolean;
  href?: string;
  id?: string;
  onClick?: (event: MouseEvent) => void;
  children?: ReactNode;
}

const useStyles = createUseStyles<Theme, LinkClassNames>(styles);

const Link: FunctionComponent<LinkProps> = ({
  id,
  className,
  children,
  isExternal = false,
  href,
  onClick = (): void => {
    // Intentionally left blank.
  }
}): ReactElement => {
  const classes = useStyles();
  const brandClassNames = classNames(classes.Link, className);

  if (isExternal) {
    return (
      <a id={ id } className={ brandClassNames } href={ href } onClick={ onClick } rel='noopener noreferrer' target='_blank'>
        { children }
      </a>
    );
  }

  return (
    <a id={ id } className={ brandClassNames } href={ href } onClick={ onClick }>
      { children }
    </a>
  );
};

export { Link };
