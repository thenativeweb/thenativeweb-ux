import { act } from '../../shared/act';
import { assert } from 'assertthat';
import React from 'react';
import ReactDOM from 'react-dom';
import { toArray } from '../../../lib/utils/toArray';
import { Footer, ThemeProvider } from '../../../lib';

suite('Footer', (): void => {
  let container: Element;

  setup(async (): Promise<void> => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  teardown(async (): Promise<void> => {
    document.body.removeChild(container);
  });

  test('renders with only required properties.', async (): Promise<void> => {
    const currentYear = new Date().getFullYear();

    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Footer id='footer' yearOfCreation={ currentYear } />
        </ThemeProvider>,
        container
      );
    });

    const footer = container.querySelector('#footer');

    assert.that(footer!.className).is.containing('Footer');

    const copyright = footer!.querySelector('[class^=Copyright-]');

    assert.that(copyright!.textContent).is.startingWith(`© Copyright ${currentYear}`);

    const legalLinks = footer!.querySelector('[class^=Legal-]');

    assert.that(legalLinks?.textContent).is.equalTo('');
  });

  test('renders a copyright timeframe when a year of creation older than the current year is given.', async (): Promise<void> => {
    const currentYear = new Date().getFullYear();
    const lastYear = currentYear - 1;

    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Footer id='footer' yearOfCreation={ lastYear } />
        </ThemeProvider>,
        container
      );
    });

    const footer = container.querySelector('#footer');

    assert.that(footer!.className).is.containing('Footer');

    const copyright = footer!.querySelector('[class^=Copyright-]');

    assert.that(copyright!.textContent).is.startingWith(`© Copyright ${lastYear}-${currentYear}`);
  });

  test('renders a link to the imprint.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Footer id='footer' yearOfCreation={ new Date().getFullYear() } linkToImprint='/imprint' />
        </ThemeProvider>,
        container
      );
    });

    const footer = container.querySelector('#footer');

    assert.that(footer!.className).is.containing('Footer');

    const [ imprintLink ] = toArray(footer!.querySelectorAll<HTMLAnchorElement>('[class^=Legal-] a'));

    assert.that(imprintLink.getAttribute('href')).is.startingWith('/imprint');
  });

  test('renders a link to the privacy policy.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Footer id='footer' yearOfCreation={ new Date().getFullYear() } linkToPrivacyPolicy='/privacy-policy' />
        </ThemeProvider>,
        container
      );
    });

    const footer = container.querySelector('#footer');

    assert.that(footer!.className).is.containing('Footer');

    const [ privacyPolicyLink ] = toArray(footer!.querySelectorAll<HTMLAnchorElement>('[class^=Legal-] a'));

    assert.that(privacyPolicyLink.getAttribute('href')).is.startingWith('/privacy-policy');
  });

  test('renders an edit on github link.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Footer id='footer' yearOfCreation={ new Date().getFullYear() } linkToGithub='https://www.github.com' />
        </ThemeProvider>,
        container
      );
    });

    const footer = container.querySelector('#footer');

    assert.that(footer!.className).is.containing('Footer');

    const [ privacyPolicyLink ] = toArray(footer!.querySelectorAll<HTMLAnchorElement>('[class^=Contribute-] a'));

    assert.that(privacyPolicyLink.getAttribute('href')).is.startingWith('https://www.github.com');
  });
});
