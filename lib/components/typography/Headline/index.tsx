import { slugify } from '../../..';
import { classNames, createUseStyles } from '../../../styles';
import { HeadlineClassNames, styles } from './styles';
import React, { CSSProperties, FunctionComponent, ReactElement } from 'react';

interface HeadlineProps {
  id?: string;
  level?: '1' | '2' | '3' | '4' | '5';
  children: string;
  style?: CSSProperties;
  textAlign?: 'left' | 'center';
  withPermalink?: boolean;
}

const useStyles = createUseStyles<HeadlineClassNames>(styles);

const Headline: FunctionComponent<HeadlineProps> = ({
  children,
  id,
  level = '1',
  style,
  textAlign = 'left',
  withPermalink = true
}): ReactElement => {
  const classes = useStyles();

  const componentClasses = classNames(classes.Headline, {
    [classes.Level1]: level === '1',
    [classes.Level2]: level === '2',
    [classes.Level3]: level === '3',
    [classes.Level4]: level === '4',
    [classes.Level5]: level === '5',
    [classes.TextAlignLeft]: textAlign === 'left',
    [classes.TextAlignCenter]: textAlign === 'center'
  });

  const slug = slugify(children);

  return React.createElement(
    `h${level}`,
    {
      className: componentClasses,
      id: id ?? slug,
      style
    },
    [
      withPermalink ?
        React.createElement(
          `a`,
          {
            className: classes.Permalink,
            'aria-hidden': true,
            href: `#${id ?? slug}`,
            key: 'permalink'
          },
          '#'
        ) :
        null,
      children
    ]
  );
};

Headline.displayName = 'Headline';

export { Headline };
