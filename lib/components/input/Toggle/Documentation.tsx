import { ComponentPreview } from '../../../components/documentation/ComponentPreview';
import { RenderToggleOptions } from './renderDefaultToggle';
import { SplitView } from '../../documentation/SplitView';
import { Code, Headline, notifications, Paragraph, Text, Toggle } from '../../..';
import React, { ReactElement, useState } from 'react';

const Documentation = (): ReactElement => {
  const [ selectedValue, setSelectedValue ] = useState('Value 1');
  const [ selectedColor, setSelectedColor ] = useState('deeppink');

  const handleChange = (newValue: string): void => {
    setSelectedValue(newValue);

    notifications.show({ type: 'success', text: `onChange(newValue: ${newValue})` });
  };

  const handleColorChange = (newValue: string): void => {
    setSelectedColor(newValue);
  };

  return (
    <React.Fragment>
      <Headline>Toggle</Headline>

      <ComponentPreview>
        <React.Fragment>
          <Toggle
            values={ [ 'Value 1', 'Value 2' ] }
            selectedValue={ selectedValue }
            onChange={ handleChange }
          />
          <Text>Selected value is: {selectedValue}</Text>
        </React.Fragment>
      </ComponentPreview>

      <Headline level='2'>Customizing</Headline>

      <Paragraph>
        You can provide a custom render function to render custom toggle
        buttons. The render function will be called for each option and will
        receive the <code>value</code>, <code>isSelected</code> and a function
        called <code>changeValue</code> to trigger a value change.
      </Paragraph>

      <SplitView>
        <Code language='jsx'>{`
            <Toggle
              values={ [ 'deeppink', 'darkgray', 'black' ] }
              selectedValue={ selectedColor }
              onChange={ handleColorChange }
            >
            { ({ value, isSelected, changeValue }: RenderToggleOptions): ReactElement => (
              <div
                style={{
                  cursor: 'pointer',
                  margin: 12,
                  width: 12,
                  height: 12,
                  borderRadius: '100%',
                  background: value,
                  transform: isSelected ? 'scale(2)' : ''
                }}
                onClick={ (): void => changeValue(value) }
                key={ value }
              />
            )}
            </Toggle>
          `}
        </Code>
        <React.Fragment>
          <Toggle
            values={ [ 'deeppink', 'darkgray', 'black' ] }
            selectedValue={ selectedColor }
            onChange={ handleColorChange }
          >
            { ({ value, isSelected, changeValue }: RenderToggleOptions): ReactElement => (
              <div
                style={{
                  cursor: 'pointer',
                  margin: 12,
                  width: 12,
                  height: 12,
                  borderRadius: '100%',
                  background: value,
                  transform: isSelected ? 'scale(2)' : ''
                }}
                onClick={ (): void => changeValue(value) }
                key={ value }
              />
            )}
          </Toggle>
          <Text>Selected color is: {selectedColor}</Text>
        </React.Fragment>
      </SplitView>
    </React.Fragment>
  );
};

export { Documentation };
