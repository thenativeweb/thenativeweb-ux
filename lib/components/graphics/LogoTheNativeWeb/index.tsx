import { LogoProps } from '../LogoProps';
import { styles } from './styles';
import { classNames, createUseStyles } from '../../../styles';
import React, { FunctionComponent, ReactElement } from 'react';

const useStyles = createUseStyles(styles);

const LogoTheNativeWeb: FunctionComponent<LogoProps> = ({
  isVisible = true,
  size = 'md'
}): ReactElement | null => {
  const classes = useStyles();

  if (!isVisible) {
    return null;
  }

  const componentClasses = classNames(classes.LogoTheNativeWeb, {
    [classes.SizeSm]: size === 'sm',
    [classes.SizeMd]: size === 'md',
    [classes.SizeLg]: size === 'lg',
    [classes.SizeXl]: size === 'xl'
  });

  return (
    <div className={ componentClasses } aria-hidden='true'>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 112 112'>
        <g>
          <path fill='#FFFFFF' d='M99,80.9l-43.1,24.9L12.8,80.9V31.1L55.9,6.2L99,31.1V80.9z' />
          <g>
            <path
              fill='#FF0099'
              d='M55.9,78.5c0-2.9-0.2-5.4-0.6-7.4s-1-3.7-1.9-5c-0.9-1.3-2-2.2-3.5-2.8s-3.3-0.9-5.4-0.9 c-1.6,0-3.2,0.1-5,0.3c-1.7,0.2-3,0.4-3.8,0.5v30.9l20.1,11.6l0,0L55.9,78.5L55.9,78.5z'
            />
            <path
              fill='#FF0099'
              d='M55.9,6.2L12.8,31.1v49.8L23.3,87V54.7c2.4-0.7,5.5-1.3,9.4-2c3.9-0.6,8.1-0.9,12.8-0.9 c4.4,0,8.1,0.6,11.1,1.8s5.3,2.9,7.1,5.1c1.8,2.2,3,4.8,3.7,7.9c0.7,3.1,1.1,6.4,1.1,10.1v22L99.2,81V31.1L55.9,6.2z'
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

export { LogoTheNativeWeb };
