import { Styles } from 'jss';
import {
  createUseStyles,
  Theme,
  Website
} from '../../../build/lib';
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
        <div id='xs' className={ classes.OnlyXs }>
          OnlyXs
        </div>
        <div id='sm' className={ classes.OnlySm }>
          OnlySm
        </div>
        <div id='md' className={ classes.OnlyMd }>
          OnlyMd
        </div>
        <div  id='lg' className={ classes.OnlyLg }>
          OnlyLg
        </div>
        <div id='xl' className={ classes.OnlyXl }>
          OnlyXl
        </div>
      </div>
    </Website>
  );
};

export default Page;
