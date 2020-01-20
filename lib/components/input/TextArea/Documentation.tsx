import { ComponentPreview } from '../../../components/documentation/ComponentPreview';
import { Property } from '../../../components/documentation/Property';
import { Headline, notifications, TextArea } from '../../..';
import React, { ChangeEvent, ReactElement, useState } from 'react';

const handleFocus = (): void => {
  notifications.show({ type: 'success', text: `onFocus(event: FocusEvent)` });
};

const handleBlur = (): void => {
  notifications.show({ type: 'success', text: `onBlur(event: FocusEvent)` });
};

const Documentation = (): ReactElement => {
  const [ currentValue, setCurrentValue ] = useState('');

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setCurrentValue(event.target.value);

    notifications.show({ type: 'success', text: `onChange(event: ChangeEvent)` });
  };

  return (
    <React.Fragment>
      <Headline>TextArea</Headline>

      <ComponentPreview>
        <TextArea
          placeholder='Enter some text'
          value={ currentValue }
          onFocus={ handleFocus }
          onChange={ handleChange }
          onBlur={ handleBlur }
        />
      </ComponentPreview>

      <Headline>Size</Headline>

      <ComponentPreview>
        <div style={{ display: 'flex' }}>
          <div style={{ flexGrow: 1, marginRight: 20 }}>
            <Property name='size' value='sm' />
            <TextArea
              size='sm'
              placeholder='Enter some text'
            />
          </div>

          <div style={{ flexGrow: 1 }}>
            <Property name='size' value='md' />

            <TextArea
              size='md'
              placeholder='Enter some text'
            />
          </div>
        </div>
      </ComponentPreview>

      <Headline level='2'>Disabled</Headline>

      <ComponentPreview>
        <TextArea
          value='This TextArea is disabled'
          disabled={ true }
        />
      </ComponentPreview>
    </React.Fragment>
  );
};

export { Documentation };
