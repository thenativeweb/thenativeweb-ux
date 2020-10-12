import NextLink from 'next/link';
import { scrollToAnchor } from '../../../utils/scrollToAnchor';
import { classNames, createUseStyles } from '../../../styles';
import { LinkClassNames, styles } from './styles';
import React, { CSSProperties, FunctionComponent, MouseEvent, ReactElement } from 'react';

interface LinkProps {
  className?: string;
  href: string;
  id?: string;
  style?: CSSProperties;
  tabIndex?: number;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
  onMouseOver?: (event: MouseEvent<HTMLAnchorElement>) => void;
}

const useStyles = createUseStyles<LinkClassNames>(styles);

const Link: FunctionComponent<LinkProps> = React.forwardRef(({
  id,
  className,
  children,
  href,
  style,
  tabIndex,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onClick,
  onMouseOver
}, ref): ReactElement => {
  const classes = useStyles();
  const linkClasses = classNames(classes.Link, className);

  let rel: string | undefined,
      target: string | undefined;

  const isAnchorLink = href.startsWith('#'),
        isExternalLink = href.startsWith('https://') || href.startsWith('http://'),
        isMailToLink = href.startsWith('mailto:');

  const anchorProps = {
    id,
    style,
    tabIndex,
    href,
    className: linkClasses,
    target,
    rel,
    ref,
    onClick,
    onMouseOver
  };

  if (isAnchorLink || isExternalLink || isMailToLink) {
    if (isExternalLink) {
      anchorProps.target = '_blank';
      anchorProps.rel = 'noopener noreferrer';
    }

    if (isAnchorLink && !onClick) {
      anchorProps.onClick = scrollToAnchor;
    }

    return React.createElement(
      'a',
      anchorProps,
      children
    );
  }

  return (
    <NextLink href={ href }>
      {
        React.createElement(
          'a',
          anchorProps,
          children
        )
      }
    </NextLink>
  );
});

Link.displayName = 'Link';

export { Link };
