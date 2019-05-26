import React from 'react';
import {
  Website,
  withStyles
} from 'thenativeweb-ux';

const styles = theme => ({
  OnlyXs: { display: 'none' },
  OnlySm: { display: 'none' },
  OnlyMd: { display: 'none' },
  OnlyLg: { display: 'none' },
  OnlyXl: { display: 'none' },

  [theme.breakpoints.only('xs')]: {
    OnlyXs: {
      display: 'block'
    }
  },

  [theme.breakpoints.only('sm')]: {
    OnlySm: {
      display: 'block'
    }
  },

  [theme.breakpoints.only('md')]: {
    OnlyMd: {
      display: 'block'
    }
  },

  [theme.breakpoints.only('lg')]: {
    OnlyLg: {
      display: 'block'
    }
  },

  [theme.breakpoints.only('xl')]: {
    OnlyXl: {
      display: 'block'
    }
  }
});

const Page = ({ classes }) => (
  <Website>
    <header>Breakpoint tests</header>
    <div id='responsive-container'>
      <div className={ classes.OnlyXs }>
        OnlyXs
      </div>
      <div className={ classes.OnlySm }>
        OnlySm
      </div>
      <div className={ classes.OnlyMd }>
        OnlyMd
      </div>
      <div className={ classes.OnlyLg }>
        OnlyLg
      </div>
      <div className={ classes.OnlyXl }>
        OnlyXl
      </div>
    </div>
  </Website>
);

export default withStyles(styles)(Page);
