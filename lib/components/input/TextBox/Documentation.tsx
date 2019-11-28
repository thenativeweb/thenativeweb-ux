import { ComponentPreview } from '../../../components/documentation/ComponentPreview';
import { Headline, notifications, TextBox } from '../../..';
import React, { ReactElement, useState } from 'react';

const Documentation = (): ReactElement => {
  const [ value, setValue ] = useState('');
  const [ port, setPort ] = useState('');
  const [ time, setTime ] = useState('');
  const [ date, setDate ] = useState('');

  return (
    <React.Fragment>
      <Headline>TextBox</Headline>

      <ComponentPreview>
        <TextBox
          value={ value }
          placeholder='local.wolkenkit.io'
          onFocus={ (event): void => notifications.show({ type: 'success', text: `onFocus: ${event.target.value}` }) }
          onChange={ (event): void => setValue(event.target.value) }
          onBlur={ (event): void => notifications.show({ type: 'success', text: `onBlur: ${event.target.value}` }) }
          onEnter={ (): void => notifications.show({ type: 'success', text: `onEnter` }) }
        />
      </ComponentPreview>

      <Headline level='2'>Type: port</Headline>

      <ComponentPreview>
        <TextBox
          value={ port }
          type='port'
          placeholder='3000'
          onChange={ (event): void => setPort(event.target.value) }
        />
      </ComponentPreview>

      <Headline level='2'>Type: time</Headline>

      <ComponentPreview>
        <TextBox
          value={ time }
          type='time'
          onChange={ (event): void => setTime(event.target.value) }
        />
      </ComponentPreview>

      <Headline level='2'>Type: date</Headline>

      <ComponentPreview>
        <TextBox
          value={ date }
          type='date'
          onChange={ (event): void => setDate(event.target.value) }
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
