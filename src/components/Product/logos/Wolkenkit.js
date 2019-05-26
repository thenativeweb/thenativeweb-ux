import PropTypes from 'prop-types';
import React from 'react';
import { classNames, withStyles } from '../../../styles';

const styles = theme => ({
  Logo: {
    /* Left blank intentionally */
  },

  SizeM: {
    width: '56px',
    height: '56px'
  },

  SizeL: {
    width: '120px',
    height: '120px'
  },

  SizeXL: {
    width: '220px',
    height: '220px'
  },

  Box: {
    fill: theme.color.brand.dark
  },

  '@keyframes move-cloud': {
    '0%': { transform: 'translate3d(0, 0, 0)' },
    '50%': { transform: 'translate3d(83px, 5px, 0)' },
    '100%': { transform: 'translate3d(166px, 0, 0)' }
  },

  MovingCloud: {
    animationName: '$move-cloud',
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
    transform: 'translate3d(0, 0, 0)',
    willChange: 'transform'
  },

  MovingCloud1: {
    animationDuration: '50s',
    opacity: 0.9,
    transform: 'translate3d(0, 0, 0)',
    willChange: 'transform'
  },

  MovingCloud2: {
    animationDuration: '30s',
    opacity: 0.95
  },

  [theme.breakpoints.down('sm')]: {
    SizeL: {
      width: '56px',
      height: '56px'
    },

    SizeXL: {
      width: '100px',
      height: '100px'
    }
  }
});

const Logo = ({ isAnimated, classes, isVisible, size }) => {
  if (!isVisible) {
    return null;
  }

  const componentClasses = classNames(classes.Logo, {
    [classes.SizeM]: size === 'm',
    [classes.SizeL]: size === 'l',
    [classes.SizeXL]: size === 'xl'
  });

  const movingCloud1Classes = classNames({
    [classes.MovingCloud]: isAnimated
  }, classes.MovingCloud1);

  const movingCloud2Classes = classNames({
    [classes.MovingCloud]: isAnimated
  }, classes.MovingCloud2);

  return (
    <div className={ componentClasses } role='presentational'>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 220 220'>
        <defs>
          <clipPath id='hexa-mask'>
            <path
              d='M176.771,41.636c-2.789,3.1-4.635,6.945-5.431,11.215
             c-1.411-0.477-2.853-0.746-4.425-0.746c-4.109,0-7.768,1.819-10.337,4.672c-4.228-4.566-10.238-7.442-16.95-7.442
             c-0.792,0-1.562,0.05-2.335,0.127c-3.153-9.02-11.716-15.497-21.813-15.497c-9.896,0-18.322,6.215-21.625,14.951
             c-1.282-4.331-5.172-7.547-9.875-7.707c0.038-0.555,0.084-1.108,0.084-1.675c0-6.843-2.936-12.971-7.659-17.205L27,51.294v18.245
             v79.339v0.001l83,48.792l83-48.792v-0.001V64.545V51.294L176.771,41.636z'
            />
          </clipPath>
        </defs>
        <g className='static-clouds'>
          <path
            fill='#049CDB'
            d='M176.771,41.636c-2.789,3.1-4.635,6.945-5.431,11.215c-1.411-0.477-2.853-0.746-4.425-0.746
            c-4.109,0-7.768,1.819-10.337,4.672c-4.228-4.566-10.238-7.442-16.95-7.442c-0.792,0-1.562,0.05-2.335,0.127
            c-3.153-9.02-11.716-15.497-21.813-15.497c-9.896,0-18.322,6.215-21.625,14.951c-1.282-4.331-5.172-7.547-9.875-7.707
            c0.038-0.555,0.084-1.108,0.084-1.675c0-6.843-2.936-12.971-7.659-17.205L27,51.294v97.584l83,48.792l83-48.792V51.294
            L176.771,41.636z M151,123.938l-41,23.853l-41-23.853V76.235l41-23.851l41,23.851V123.938z'
          />
          <path
            fill='#66D0FD'
            d='M176.299,86.81c0,0.566,0.176,1.115,0.213,1.67c-4.703,0.161-8.597,3.377-9.878,7.707
            C164.025,89.291,158,83.978,151,82.038v41.899l-41,23.853l-41-23.853v-42.57c-1-0.083-1.679-0.137-2.497-0.137
            c-0.58,0-1.191,0.048-1.763,0.088c-2.46-10.126-11.521-17.653-22.41-17.653C36.427,63.664,31,65.896,27,69.539v79.34l83,48.792
            l83-48.792V64.545C183,67.245,176.299,76.174,176.299,86.81z'
          />
        </g>
        <path
          className={ classes.Box }
          d='M109.999,51.8L69,76.128v0.087v0.911v4.497v3.69v31.166v2.697v5.698v0.911v0.084l41.001,24.331
          L151,125.869v-0.083v-0.912v-4.497v-3.689V85.521v-2.699v-5.696v-0.911v-0.087L109.999,51.8z'
        />
        <g
          className='moving-clouds'
          clipPath='url(#hexa-mask)'
        >
          <path
            className={ movingCloud1Classes }
            fill='#FFFFFF'
            d='M152.434,145.188c-0.771-0.078-1.485-0.129-2.279-0.129c-6.711,0-12.703,2.877-16.93,7.444
            c-2.572-2.854-6.246-4.675-10.354-4.675c-1.571,0-3.069,0.271-4.483,0.747c-1.994-10.748-11.396-18.89-22.721-18.89
            c-0.579,0-1.152,0.047-1.722,0.088c-2.461-10.127-11.553-17.653-22.44-17.653c-12.778,0-23.137,10.364-23.137,23.141
            c0,0.566,0.039,1.14,0.077,1.693c-4.698,0.159-8.551,3.405-9.836,7.733C36.497,139.111,32,134.549,27,132
            c-14.333-7.667-37.666,0.667-40.567,13.188c-0.771-0.078-1.485-0.129-2.278-0.129c-6.711,0-12.704,2.877-16.931,7.444
            c-2.572-2.854-6.245-4.675-10.354-4.675c-1.571,0-3.069,0.271-4.483,0.747c-1.995-10.748-11.397-18.89-22.721-18.89
            c-0.579,0-1.152,0.047-1.722,0.088c-2.461-10.127-11.553-17.653-22.44-17.653c-12.778,0-23.137,10.364-23.137,23.141
            c0,0.566,0.039,1.14,0.077,1.693c-4.698,0.159-8.551,3.405-9.836,7.733C-129.503,139.111-134,134.549-139,132v68.879h332V132
            C178.667,124.333,155.334,132.667,152.434,145.188z'
          />
          <path
            className={ movingCloud2Classes }
            fill='#FFFFFF'
            d='M152.434,155.188c-0.771-0.078-1.485-0.129-2.279-0.129c-6.711,0-12.703,2.877-16.93,7.444
            c-2.572-2.854-6.246-4.675-10.354-4.675c-1.571,0-3.069,0.271-4.483,0.747c-1.994-10.748-11.396-18.89-22.722-18.89
            c-0.578,0-1.151,0.047-1.722,0.088c-2.461-10.127-11.554-17.653-22.44-17.653c-12.778,0-23.137,10.364-23.137,23.141
            c0,0.566,0.039,1.14,0.077,1.693c-4.698,0.159-8.551,3.405-9.836,7.733C36.497,149.111,32,144.549,27,142
            c-14.333-7.667-37.666,0.667-40.567,13.188c-0.771-0.078-1.485-0.129-2.278-0.129c-6.711,0-12.704,2.877-16.931,7.444
            c-2.572-2.854-6.245-4.675-10.354-4.675c-1.571,0-3.069,0.271-4.483,0.747c-1.995-10.748-11.397-18.89-22.721-18.89
            c-0.579,0-1.152,0.047-1.722,0.088c-2.461-10.127-11.553-17.653-22.44-17.653c-12.778,0-23.137,10.364-23.137,23.141
            c0,0.566,0.039,1.14,0.077,1.693c-4.698,0.159-8.551,3.405-9.836,7.733C-129.503,149.111-134,144.549-139,142v68.879h332V142
            C178.667,134.333,155.334,142.667,152.434,155.188z'
          />
        </g>
      </svg>
    </div>
  );
};

Logo.propTypes = {
  isAnimated: PropTypes.bool,
  isVisible: PropTypes.bool,
  size: PropTypes.oneOf([ 'm', 'l', 'xl' ])
};

Logo.defaultProps = {
  isVisible: true,
  size: 'm',
  isAnimated: false
};

export default withStyles(styles)(Logo);
