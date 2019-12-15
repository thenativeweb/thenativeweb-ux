import { Chapter } from './Chapter';
import {
  createUseStyles
} from '../../../lib';
import { Page } from './Page';
import { Section } from './Section';
import React, { ReactElement } from 'react';

type NavigationClassNames = 'Navigation';

const useStyles = createUseStyles<NavigationClassNames>({
  Navigation: {}
});

const Navigation = (): ReactElement => {
  const classes = useStyles();

  return (
    <div className={ classes.Navigation }>
      <Section title='Components'>
        <Chapter title='Roots'>
          <Page title='Application' />
          <Page title='Website' />
          <Page title='ThemeProvider' />
        </Chapter>

        <Chapter title='Layout'>
          <Page title='Container' />
          <Page title='Grid' />
          <Page title='Sidebar' />
        </Chapter>

        <Chapter title='Branding'>
          <Page title='Brand' />
          <Page title='MadeBy' />
          <Page title='Pattern' />
          <Page title='PoweredBy' />
          <Page title='Product' />
        </Chapter>

        <Chapter title='Typography'>
          <Page title='Headline' />
          <Page title='Paragraph' />
          <Page title='Text' />
        </Chapter>

        <Chapter title='Graphics'>
          <Page title='Icon' />
          <Page title='LogoFull' />
          <Page title='LogoMinimal' />
          <Page title='LogoTheNativeWeb' />
          <Page title='LogoWolkenkit' />
        </Chapter>

        <Chapter title='Input'>
          <Page title='Button' />
          <Page title='CheckBox' />
          <Page title='Dropdown' />
          <Page title='Link' />
          <Page title='TextArea' />
          <Page title='TextBox' />
          <Page title='Toggle' />
        </Chapter>

        <Chapter title='Forms'>
          <Page title='ControlGroup' />
          <Page title='Form' />
        </Chapter>

        <Chapter title='Feedback'>
          <Page title='BusyIndicator' />
          <Page title='Message' />
          <Page title='Modal' />
        </Chapter>

        <Chapter title='Animation'>
          <Page title='Transition' />
          <Page title='TransitionGroup' />
        </Chapter>
      </Section>

      <Section title='Services'>
        <Page title='dialogs' />
        <Page title='notifications' />
      </Section>

      <Section title='Styles'>
        <Page title='Creating custom components' />
      </Section>
    </div>
  );
};

export { Navigation };
