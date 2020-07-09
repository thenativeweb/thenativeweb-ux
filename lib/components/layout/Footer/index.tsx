import { classNames, createUseStyles } from '../../../styles';
import { FooterClassNames, styles } from './styles';
import { Grid, GridItem, Link, MadeBy, Space } from '../../..';
import React, { CSSProperties, FunctionComponent, ReactElement } from 'react';

interface FooterProps {
  borderTop?: 'none' | 'dark';
  className?: string;
  color?: 'light' | 'dark';
  fontSize?: 'sm' | 'md';
  id?: string;
  linkToGithub?: string;
  linkToImprint?: string;
  linkToPrivacyPolicy?: string;
  yearOfCreation: number;
  style?: CSSProperties;
}

const useStyles = createUseStyles<FooterClassNames>(styles);

const Footer: FunctionComponent<FooterProps> = ({
  borderTop = 'dark',
  className,
  color = 'dark',
  fontSize = 'md',
  id,
  linkToGithub,
  linkToImprint,
  linkToPrivacyPolicy,
  yearOfCreation,
  style
}): ReactElement => {
  const classes = useStyles();
  const componentClassNames = classNames(
    classes.Footer,
    {
      [classes.BorderTopNone]: borderTop === 'none',
      [classes.ColorLight]: color === 'light',
      [classes.ColorDark]: color === 'dark',
      [classes.BorderTopDark]: borderTop === 'dark',
      [classes.FontSizeSm]: fontSize === 'sm',
      [classes.FontSizeMd]: fontSize === 'md'
    },
    className
  );

  const currentYear = new Date().getFullYear();
  const copyrightTimespan = currentYear !== yearOfCreation ? `${yearOfCreation}-${currentYear}` : `${currentYear}`;

  return (
    <footer id={ id } className={ componentClassNames } style={ style }>
      <Grid
        columns={{ xs: 1, sm: 2 }}
        columnGap={{ xs: 0, sm: 4, md: 10 }}
        rowGap={{ xs: 1, sm: 2 }}
      >
        <GridItem>
          <Space between={{ xs: 1, sm: 2 }}>
            {
              linkToGithub ?
                (
                  <div className={ classes.Contribute }>
                    Found a bug? Missing something? Want to contribute?
                    Just <Link href={ linkToGithub }>edit this page on Github</Link>.
                  </div>
                ) :
                null
            }

            <div className={ classes.MadeBy }>
              <MadeBy size='md' color={ color } />
            </div>
          </Space>
        </GridItem>
        <GridItem>
          <Space between={{ xs: 1 }}>
            <div className={ classes.Copyright }>
              © Copyright { copyrightTimespan } the native web GmbH. All rights reserved.
            </div>
            <div className={ classes.Legal }>
              {
                linkToImprint ?
                  <Link href={ linkToImprint }>Imprint</Link> :
                  null
              }

              {
                linkToImprint && linkToPrivacyPolicy ?
                  <span> & </span> :
                  null
              }

              {
                linkToPrivacyPolicy ?
                  <Link href={ linkToPrivacyPolicy }>Privacy Policy</Link> :
                  null
              }
            </div>
          </Space>
        </GridItem>
      </Grid>
    </footer>
  );
};

Footer.displayName = 'Footer';

export { Footer };
