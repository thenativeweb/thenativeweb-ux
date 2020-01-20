import { act } from '../../shared/act';
import { assert } from 'assertthat';
import { click } from '../../shared/eventDispatchers';
import React from 'react';
import ReactDOM from 'react-dom';
import { PageNavigation, PageTree, ThemeProvider } from '../../../lib';

suite('PageNavigation', (): void => {
  let container: Element;
  let pageTree: PageTree;

  setup(async (): Promise<void> => {
    container = document.createElement('div');
    document.body.appendChild(container);

    pageTree = new PageTree({
      items: [
        {
          title: 'First Section',
          children: [
            {
              title: 'First chapter',
              children: [
                { title: 'Page A' },
                { title: 'Page B' }
              ]
            },
            {
              title: 'Second chapter',
              children: [
                { title: 'Page C' },
                { title: 'Page D' }
              ]
            }
          ]
        },
        {
          title: 'Second Section',
          children: [
            { title: 'Page E' }
          ]
        }
      ]
    });
  });

  teardown(async (): Promise<void> => {
    document.body.removeChild(container);
  });

  test('renders with only required properties.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <PageNavigation id='component' pageTree={ pageTree } activePath='' />
        </ThemeProvider>,
        container
      );
    });

    const component = container.querySelector('#component');

    const firstSection = component!.querySelector<HTMLElement>('[class*=Section][class*=HasChapters]:first-of-type');
    const secondSection = component!.querySelector<HTMLElement>('[class*=Section][class*=HasPages]:nth-of-type(2)');

    assert.that(firstSection!.textContent).is.containing('First Section');
    assert.that(firstSection!.className).is.not.containing('IsExpanded');

    assert.that(secondSection!.textContent).is.containing('Second Section');
    assert.that(secondSection!.className).is.not.containing('IsExpanded');
  });

  test('renders an expanded tree if property activePath is set.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <PageNavigation id='component' pageTree={ pageTree } activePath='/first-section/first-chapter/page-a' />
        </ThemeProvider>,
        container
      );
    });

    const component = container.querySelector('#component');

    const activeSection = component!.querySelector<HTMLElement>('[class*=Section][class*=IsActive]:first-of-type');
    const activeSectionTitle = activeSection!.querySelector<HTMLElement>('[class*=Title]');

    const activeChapter = activeSection!.querySelector<HTMLElement>('[class*=Chapter][class*=IsActive]');
    const activeChapterTitle = activeChapter!.querySelector<HTMLElement>('[class*=Title]');

    const activePage = activeSection!.querySelector<HTMLElement>('[class*=Page][class*=IsActive]');

    assert.that(activeSectionTitle!.textContent).is.equalTo('First Section');
    assert.that(activeSection!.className).is.containing('IsExpanded');

    assert.that(activeChapterTitle!.textContent).is.equalTo('First chapter');
    assert.that(activeChapter!.className).is.containing('IsExpanded');

    assert.that(activePage!.textContent).is.equalTo('Page A');
  });

  test('expands a section if it has been clicked.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <PageNavigation id='component' pageTree={ pageTree } activePath='/first-section/first-chapter/page-a' />
        </ThemeProvider>,
        container
      );
    });

    const component = container.querySelector('#component');
    const activeSections = component!.querySelectorAll<HTMLElement>('[class*=Section][class*=IsActive]');

    assert.that(activeSections.length).is.equalTo(1);

    const inactiveSection = component!.querySelector<HTMLElement>('[class*=Section]:nth-of-type(2)');
    const inactiveSectionTitle = inactiveSection!.querySelector<HTMLElement>('[class*=Title]');

    assert.that(inactiveSectionTitle!.textContent).is.equalTo('Second Section');
    assert.that(inactiveSection!.className).is.not.containing('IsExpanded');

    act((): void => {
      click(inactiveSectionTitle!);
    });

    assert.that(inactiveSection!.className).is.containing('IsExpanded');
  });

  test('collapses the previously expanded section if activePath changes.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <PageNavigation id='component' pageTree={ pageTree } activePath='/first-section/first-chapter/page-a' />
        </ThemeProvider>,
        container
      );
    });

    const component = container.querySelector('#component');
    const inactiveSection = component!.querySelector<HTMLElement>('[class*=Section]:nth-of-type(2)');
    const inactiveSectionTitle = inactiveSection!.querySelector<HTMLElement>('[class*=Title]');

    assert.that(inactiveSectionTitle!.textContent).is.equalTo('Second Section');
    assert.that(inactiveSection!.className).is.not.containing('IsExpanded');

    act((): void => {
      click(inactiveSectionTitle!);
    });

    const expandedSections = component!.querySelectorAll<HTMLElement>('[class*=Section][class*=IsExpanded]');

    assert.that(expandedSections.length).is.equalTo(2);
    assert.that(inactiveSection!.className).is.containing('IsExpanded');

    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <PageNavigation id='component' pageTree={ pageTree } activePath='/second-section/page-e' />
        </ThemeProvider>,
        container
      );
    });

    const activeSectionsAfterPathChanged = component!.querySelectorAll<HTMLElement>('[class*=Section][class*=IsActive]');
    const activeSectionTitleAfterPathChanged = component!.querySelector<HTMLElement>('[class*=Section][class*=IsActive] [class*=Title]');

    assert.that(activeSectionsAfterPathChanged.length).is.equalTo(1);

    assert.that(activeSectionTitleAfterPathChanged!.textContent).is.equalTo('Second Section');
  });
});
