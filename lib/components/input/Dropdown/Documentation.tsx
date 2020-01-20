import { ComponentPreview } from '../../../components/documentation/ComponentPreview';
import { Property } from '../../../components/documentation/Property';
import { Dropdown, Headline, notifications } from '../../..';
import React, { ReactElement, useState } from 'react';

const Documentation = (): ReactElement => {
  const [ selectedValue, setSelectedValue ] = useState('');

  const handleChange = (value: string): void => {
    setSelectedValue(value);
    notifications.show({ type: 'success', text: `onChange(value: ${value})` });
  };

  return (
    <React.Fragment>
      <Headline>Dropdown</Headline>

      <ComponentPreview>
        <React.Fragment>
          <Dropdown
            options={ [{ value: 'foo', label: 'Foo' }, { value: 'bar', label: 'Bar' }] }
            value={ selectedValue }
            onChange={ (value): void => handleChange(value) }
          />

          <hr />

          <Property name='size' value='sm' />

          <Dropdown
            size='sm'
            options={ [{ value: 'foo', label: 'Foo' }, { value: 'bar', label: 'Bar' }] }
            value={ selectedValue }
            onChange={ (value): void => handleChange(value) }
          />
        </React.Fragment>
      </ComponentPreview>

      <Headline level='2'>Providing a label when value has not yet been set</Headline>

      <ComponentPreview>
        <Dropdown
          emptyLabel='Choose an option…'
          options={ [{ value: 'foo', label: 'Foo' }, { value: 'bar', label: 'Bar' }] }
          value={ selectedValue }
          onChange={ (value): void => handleChange(value) }
        />
      </ComponentPreview>
    </React.Fragment>
  );
};

export { Documentation };
