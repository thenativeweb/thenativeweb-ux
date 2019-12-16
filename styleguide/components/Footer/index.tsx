import { Styles } from 'jss';
import { createUseStyles, MadeBy, Theme } from '../.../../../../lib';
import React, { FunctionComponent, ReactElement } from 'react';

type FooterClassNames =
  'Footer' |
  'About' |
  'Copyright';

const useStyles = createUseStyles<Theme, FooterClassNames>((theme: Theme): Styles => ({
  Footer: {
    margin: [ theme.space(4), 0, 0, 0 ],
    padding: [ theme.space(4), 0 ],
    fontSize: theme.font.size.md,
    fontWeight: 300,

    '& a': {
      fontWeight: 400
    }
  },

  About: {
    borderTop: `1px solid ${theme.color.content.border}`,
    padding: [ theme.space(4), 0, 0, 0 ],
    textAlign: 'center',

    '& p': {
      margin: 0
    }
  },

  Copyright: {
    textAlign: 'center',
    padding: 0,

    '& p': {
      margin: 0
    }
  },

  [theme.breakpoints.down('sm')]: {
    PageFooter: {
      margin: 0,
      marginTop: theme.space(6),
      padding: 0
    },

    About: {
      padding: theme.space(4)
    },

    Copyright: {
      padding: theme.space(4),
      paddingTop: 0,
      marginBottom: theme.space(1)
    }
  }
}));

const Footer: FunctionComponent = (): ReactElement => {
  const classes = useStyles();

  return (
    <footer className={ classes.Footer }>
      <div className={ classes.About }>
        <MadeBy size='md' color='light' />
      </div>
      <div className={ classes.Copyright }>
        <p>
          © Copyright 2017-{ new Date().getFullYear() } the native web GmbH. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export { Footer };
