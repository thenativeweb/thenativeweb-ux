import { classNames, createUseStyles } from '../../../styles';
import { FooterClassNames, styles } from './styles';
import { MadeBy, Theme } from '../../..';
import React, { CSSProperties, FunctionComponent, ReactElement } from 'react';

interface FooterProps {
  className?: string;
  id?: string;
  yearOfCreation: number;
  style?: CSSProperties;
}

const useStyles = createUseStyles<Theme, FooterClassNames>(styles);

const Footer: FunctionComponent<FooterProps> = ({
  className,
  id,
  yearOfCreation,
  style
}): ReactElement => {
  const classes = useStyles();
  const componentClassNames = classNames(
    classes.Footer,
    className
  );

  const currentYear = new Date().getFullYear();
  const copyrightTimespan = currentYear !== yearOfCreation ? `${yearOfCreation}-${currentYear}` : `${currentYear}`;

  return (
    <footer id={ id } className={ componentClassNames } style={ style }>
      <div className={ classes.MadeBy }>
        <MadeBy size='md' color='light' />
      </div>
      <div className={ classes.Copyright }>
        © Copyright { copyrightTimespan } the native web GmbH. All rights reserved.
      </div>
    </footer>
  );
};

export { Footer };
