import { ComponentPreview } from '../../../components/documentation/ComponentPreview';
import { Property } from '../../../components/documentation/Property';
import { Headline, notifications, TextBox } from '../../..';
import React, { ReactElement, useState } from 'react';

const Documentation = (): ReactElement => {
  const [ date, setDate ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ port, setPort ] = useState('');
  const [ search, setSearch ] = useState('');
  const [ time, setTime ] = useState('');
  const [ value, setValue ] = useState('');
  const [ valueMinMax, setValueMinMax ] = useState('Value length must be between 1 and 100');

  return (
    <React.Fragment>
      <Headline>TextBox</Headline>

      <ComponentPreview>
        <TextBox
          value={ value }
          placeholder='local.wolkenkit.io'
          onFocus={ (event): void => {
            notifications.show({ type: 'success', text: `onFocus: ${event.target.value}` });
          } }
          onChange={ (event): void => setValue(event.target.value) }
          onBlur={ (event): void => {
            notifications.show({ type: 'success', text: `onBlur: ${event.target.value}` });
          } }
          onEnter={ (): void => {
            notifications.show({ type: 'success', text: `onEnter` });
          } }
        />
      </ComponentPreview>

      <Headline level='2'>Types</Headline>

      <ComponentPreview>
        <React.Fragment>
          <Property name='type' value='date' />

          <TextBox
            value={ date }
            type='date'
            onChange={ (event): void => setDate(event.target.value) }
          />

          <hr />

          <Property name='type' value='email' />

          <TextBox
            value={ email }
            type='email'
            onChange={ (event): void => setEmail(event.target.value) }
          />

          <hr />

          <Property name='type' value='port' />

          <TextBox
            value={ port }
            type='port'
            placeholder='3000'
            onChange={ (event): void => setPort(event.target.value) }
          />

          <hr />

          <Property name='type' value='search' />

          <TextBox
            value={ search }
            type='search'
            onChange={ (event): void => setSearch(event.target.value) }
          />

          <hr />

          <Property name='type' value='time' />

          <TextBox
            value={ time }
            type='time'
            onChange={ (event): void => setTime(event.target.value) }
          />
        </React.Fragment>
      </ComponentPreview>

      <Headline level='2'>Min and max length</Headline>

      <ComponentPreview>
        <TextBox
          value={ valueMinMax }
          minLength={ 1 }
          maxLength={ 100 }
          required={ true }
          onChange={ (event): void => setValueMinMax(event.target.value) }
        />
      </ComponentPreview>

      <Headline level='2'>Disabled</Headline>

      <ComponentPreview>
        <TextBox
          value='This TextBox is disabled.'
          disabled={ true }
        />
      </ComponentPreview>
    </React.Fragment>
  );
};

export { Documentation };
