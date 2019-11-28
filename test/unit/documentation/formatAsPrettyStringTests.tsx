import { assert } from 'assertthat';
import { Button } from '../../../lib';
import { formatAsPrettyString } from '../../../lib/components/documentation/formatAsPrettyString';
import React from 'react';

suite('formatAsPrettyString', (): void => {
  test('returns the string `undefined` if the source is undefined.', async (): Promise<void> => {
    assert.that(formatAsPrettyString()).is.equalTo('undefined');
  });

  test('returns the string `null` if the source is null.', async (): Promise<void> => {
    assert.that(formatAsPrettyString(null)).is.equalTo('null');
  });

  test('returns a prettified string, if the source is an object.', async (): Promise<void> => {
    const prettifiedString = formatAsPrettyString({ foo: 'bar' });

    assert.that(prettifiedString).is.equalTo('Object {\n  "foo": "bar",\n}');
  });

  test('returns a prettified string, if the source is a React DOM element.', async (): Promise<void> => {
    const prettifiedString = formatAsPrettyString(<div>React element</div>);

    assert.that(prettifiedString).is.equalTo('<div>\n  React element\n</div>');
  });

  test('returns a prettified string, if the source is a custom component.', async (): Promise<void> => {
    const prettifiedString = formatAsPrettyString(<Button>Custom component</Button>);

    assert.that(prettifiedString).is.equalTo('<Button>\n  Custom component\n</Button>');
  });
});
