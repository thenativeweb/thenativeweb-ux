import Theme from '../../themes/Theme';
import { Classes, Styles } from 'jss';
import { classNames, withStyles } from '../../styles';
import React, { FunctionComponent, MouseEvent, ReactElement, ReactNode } from 'react';

const styles = (theme: Theme): Styles => ({
  Link: {
    color: theme.color.brand.highlight,
    textDecoration: 'none',
    fontWeight: 400,
    fontFamily: theme.font.family.default,
    fontSize: 'inherit',

    '&:hover': {
      textDecoration: 'none'
    }
  }
});

interface LinkProps {
  classes: Classes;
  className?: string;
  isExternal?: boolean;
  href?: string;
  id?: string;
  onClick?: (event: MouseEvent) => void;
  children?: ReactNode;
}

const Link: FunctionComponent<LinkProps> = ({
  classes,
  id,
  className,
  children,
  isExternal = false,
  href,
  onClick = (): void => {
    // Intentionally left blank.
  }
}): ReactElement => {
  const brandClassNames = classNames(classes.Link, className);

  if (isExternal === true) {
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

export default withStyles(styles)(Link);
