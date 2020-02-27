import { Theme } from '../../..';
import { classNames, createUseStyles } from '../../../styles';
import { LinkClassNames, styles } from './styles';
import React, { FunctionComponent, MouseEvent, ReactElement } from 'react';

interface LinkProps {
  className?: string;
  isExternal?: boolean;
  href?: string;
  id?: string;
  onClick?: (event: MouseEvent) => void;
}

const useStyles = createUseStyles<Theme, LinkClassNames>(styles);

const Link: FunctionComponent<LinkProps> = React.forwardRef(({
  id,
  className,
  children,
  isExternal = false,
  href,
  onClick = (): void => {
    // Intentionally left blank.
  }
}, ref): ReactElement => {
  const classes = useStyles();
  const brandClassNames = classNames(classes.Link, className);

  if (isExternal) {
    return (
      <a ref={ ref as any } id={ id } className={ brandClassNames } href={ href } onClick={ onClick } rel='noopener noreferrer' target='_blank'>
        { children }
      </a>
    );
  }

  return (
    <a ref={ ref as any } id={ id } className={ brandClassNames } href={ href } onClick={ onClick }>
      { children }
    </a>
  );
});

Link.displayName = 'Link';

export { Link };
