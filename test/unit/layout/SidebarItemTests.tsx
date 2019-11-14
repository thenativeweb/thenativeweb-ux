import act from '../../shared/act';
import assert from 'assertthat';
import { click } from '../../shared/eventDispatchers';
import React from 'react';
import ReactDOM from 'react-dom';
import { SidebarItem, ThemeProvider } from '../../../lib';

suite('SidebarItem', (): void => {
  let container: Element;

  setup((): void => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  teardown((): void => {
    document.body.removeChild(container);
  });

  test('renders although no property has been defined.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <SidebarItem id='some-id'>
            <div>SidebarItem</div>
          </SidebarItem>
        </ThemeProvider>,
        container
      );
    });

    const sidebarItem = container.querySelector('#some-id');

    assert.that(sidebarItem).is.not.null();
    assert.that(sidebarItem!.className).is.containingAllOf([ 'SidebarItem', 'IsTopLevel' ]);
    assert.that(sidebarItem!.className).is.not.containingAllOf(
      [
        'IsActive',
        'IsNested',
        'IsClickable'
      ]
    );
  });

  test('sets classes for defined property isActive.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <SidebarItem isActive={ true }>
            <div>SidebarItem</div>
          </SidebarItem>
        </ThemeProvider>,
        container
      );
    });

    const sidebarItem = container.querySelector('div');

    assert.that(sidebarItem!.className).is.containing('IsActive');
  });

  test('sets classes for defined property isNested.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <SidebarItem isNested={ true }>
            <div>SidebarItem</div>
          </SidebarItem>
        </ThemeProvider>,
        container
      );
    });

    const sidebarItem = container.querySelector('div');

    assert.that(sidebarItem!.className).is.containing('IsNested');
  });

  test('inserts svg element if property iconName is defined.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <SidebarItem iconName='heart'>
            <div>SidebarItem</div>
          </SidebarItem>
        </ThemeProvider>,
        container
      );
    });

    const sidebarItem = container.querySelector('svg');

    assert.that(sidebarItem).is.not.null();
  });

  test('inserts img element if property iconUrl is defined.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <SidebarItem iconUrl='/'>
            <div>SidebarItem</div>
          </SidebarItem>
        </ThemeProvider>,
        container
      );
    });

    const sidebarItem = container.querySelector('img');

    assert.that(sidebarItem).is.not.null();
  });

  test('takes onClick function and runs it if clicked.', async (): Promise<void> => {
    let clicked = false;

    const onClick = (): void => {
      clicked = true;
    };

    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <SidebarItem onClick={ onClick } isNested={ true }>
            <div>click me</div>
          </SidebarItem>
        </ThemeProvider>,
        container
      );
    });

    const sidebarItem = container.querySelector('div');

    assert.that(sidebarItem!.className).is.containing('IsClickable');

    act((): void => {
      click(sidebarItem!);
    });

    assert.that(clicked).is.true();
  });
});
