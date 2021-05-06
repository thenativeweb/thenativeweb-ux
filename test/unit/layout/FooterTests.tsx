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

    assert.that(copyright!.textContent as string).is.startingWith(`© Copyright ${currentYear}`);

    const legalLinks = footer!.querySelector('[class^=Legal-]');

    assert.that(legalLinks?.textContent).is.equalTo('');
  });

  test('sets classes for defined property borderTop.', async (): Promise<void> => {
    const currentYear = new Date().getFullYear();

    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Footer id='footerBorderTopNone' borderTop='none' yearOfCreation={ currentYear } />
          <Footer id='footerBorderTopDark' borderTop='dark' yearOfCreation={ currentYear } />
        </ThemeProvider>,
        container
      );
    });

    const footerBorderTopNone = container.querySelector('#footerBorderTopNone');
    const footerBorderTopDark = container.querySelector('#footerBorderTopDark');

    assert.that(footerBorderTopNone!.className).is.containing(`BorderTopNone`);
    assert.that(footerBorderTopDark!.className).is.containing(`BorderTopDark`);
  });

  test('sets classes for defined property color.', async (): Promise<void> => {
    const currentYear = new Date().getFullYear();

    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Footer id='footerColorDark' color='dark' yearOfCreation={ currentYear } />
          <Footer id='footerColorLight' color='light' yearOfCreation={ currentYear } />
        </ThemeProvider>,
        container
      );
    });

    const footerColorDark = container.querySelector('#footerColorDark');
    const footerColorLight = container.querySelector('#footerColorLight');

    assert.that(footerColorDark!.className).is.containing(`ColorDark`);
    assert.that(footerColorLight!.className).is.containing(`ColorLight`);
  });

  test('sets classes for defined property fontSize.', async (): Promise<void> => {
    const currentYear = new Date().getFullYear();

    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <Footer id='footerFontSizeSm' fontSize='sm' yearOfCreation={ currentYear } />
          <Footer id='footerFontSizeMd' fontSize='md' yearOfCreation={ currentYear } />
        </ThemeProvider>,
        container
      );
    });

    const footerFontSizeSm = container.querySelector('#footerFontSizeSm');
    const footerFontSizeMd = container.querySelector('#footerFontSizeMd');

    assert.that(footerFontSizeSm!.className).is.containing(`FontSizeSm`);
    assert.that(footerFontSizeMd!.className).is.containing(`FontSizeMd`);
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

    assert.that(copyright!.textContent as string).is.startingWith(`© Copyright ${lastYear}-${currentYear}`);
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

    assert.that(imprintLink.getAttribute('href') as string).is.startingWith('/imprint');
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

    assert.that(privacyPolicyLink.getAttribute('href') as string).is.startingWith('/privacy-policy');
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

    assert.that(privacyPolicyLink.getAttribute('href') as string).is.startingWith('https://www.github.com');
  });
});
