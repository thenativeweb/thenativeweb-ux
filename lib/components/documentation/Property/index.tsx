import { formatAsPrettyString } from '../formatAsPrettyString';
import { Paragraph } from '../../..';
import React, { FunctionComponent, ReactElement } from 'react';

interface PropertyProps {
  name?: string;
  value: any;
  description?: string;
}

const Property: FunctionComponent<PropertyProps> = ({ name, value, description }): ReactElement => (
  <Paragraph>
    { name ? <span><code>{ name }</code>: </span> : null }
    <code>{ formatAsPrettyString(value) }</code>
    { description ? <span> {' '}{ description }</span> : null }
  </Paragraph>
);

Property.displayName = 'Property';

export { Property };
