import { Styles } from 'jss';
import {
  createUseStyles,
  Theme,
  Website
} from '../../../lib';
import React, { ReactElement } from 'react';

type ClassNames =
  'OnlyXs' |
  'OnlySm' |
  'OnlyMd' |
  'OnlyLg' |
  'OnlyXl';

const useStyles = createUseStyles<Theme, ClassNames>((theme: Theme): Styles<ClassNames> => ({
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
}));

const Page = (): ReactElement => {
  const classes = useStyles();

  return (
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
};

export default Page;
