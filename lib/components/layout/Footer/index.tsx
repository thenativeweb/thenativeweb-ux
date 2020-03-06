import { classNames, createUseStyles } from '../../../styles';
import { FooterClassNames, styles } from './styles';
import { Grid, GridItem, Link, MadeBy, Space, Theme } from '../../..';
import React, { CSSProperties, FunctionComponent, ReactElement } from 'react';

interface FooterProps {
  className?: string;
  id?: string;
  linkToGithub?: string;
  linkToImprint?: string;
  linkToPrivacyPolicy?: string;
  yearOfCreation: number;
  style?: CSSProperties;
}

const useStyles = createUseStyles<Theme, FooterClassNames>(styles);

const Footer: FunctionComponent<FooterProps> = ({
  className,
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
    className
  );

  const currentYear = new Date().getFullYear();
  const copyrightTimespan = currentYear !== yearOfCreation ? `${yearOfCreation}-${currentYear}` : `${currentYear}`;

  return (
    <footer id={ id } className={ componentClassNames } style={ style }>
      <Grid columns={{ xs: 1, sm: 2 }} columnGap={{ xs: 0, sm: 4, md: 10 }}>
        <GridItem>
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
            <MadeBy size='md' color='light' />
          </div>
        </GridItem>
        <GridItem>
          <div className={ classes.Copyright }>
            © Copyright { copyrightTimespan } the native web GmbH. All rights reserved.
          </div>
          <div className={ classes.Legal }>
            <Space paddingY='1'>
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

            </Space>
          </div>
        </GridItem>
      </Grid>
    </footer>
  );
};

Footer.displayName = 'Footer';

export { Footer };
