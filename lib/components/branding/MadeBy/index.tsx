import { classNames, createUseStyles } from '../../../styles';
import { Icon, Link, Space, Theme } from '../../..';
import { MadeByClassNames, styles } from './styles';
import React, { FunctionComponent, ReactElement } from 'react';

interface Partner {
  href: string;
  name: string;
}

interface MadeByProps {
  color?: 'dark' | 'light';
  partner?: Partner | Partner [];
  size?: 'sm' | 'md' | 'lg';
}

const useStyles = createUseStyles<Theme, MadeByClassNames>(styles);

const MadeBy: FunctionComponent<MadeByProps> = ({
  color = 'dark',
  partner = [],
  size = 'sm'
}): ReactElement => {
  const classes = useStyles();
  const componentClasses = classNames(classes.MadeBy, {
    [classes.ColorDark]: color === 'dark',
    [classes.ColorLight]: color === 'light',
    [classes.SizeSm]: size === 'sm',
    [classes.SizeMd]: size === 'md',
    [classes.SizeLg]: size === 'lg'
  });

  const partners: Partner [] = Array.isArray(partner) ? partner : [ partner ];

  return (
    <div className={ componentClasses }>
      <Space paddingY='1'>
        <span>
          Made with <Icon name='heart' color='highlight' type='inline' /> by
        </span>

        &nbsp;

        <Link href='https://www.thenativeweb.io'>the native web</Link>

        { partners.map((item, index): ReactElement => (
          <React.Fragment key={ item.name }>
            { index === partners.length - 1 ? ' and ' : ', ' }
            <Link href={ item.href }>{ item.name }</Link>
          </React.Fragment>
        )) }
      </Space>
    </div>
  );
};

MadeBy.displayName = 'MadeBy';

export { MadeBy };
