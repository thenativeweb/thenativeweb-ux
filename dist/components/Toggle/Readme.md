```jsx
initialState = { selectedValue: 'Option 1' };
import { Text } from 'thenativeweb-ux';

<div>
  <Toggle
    values={ [ 'Option 1', 'Option 2' ] }
    selectedValue={ state.selectedValue }
    onChange={ newValue => setState({ selectedValue: newValue }) }
  />
  <Text>Selected option is: {state.selectedValue}</Text>
</div>
```

You can provide a custom render function to render custom toggle buttons. The render function will be called for each option and will receive the `value`, `isSelected` and a function called `changeValue` to trigger a value change.

```jsx
initialState = { selectedValue: 'blue' };
import { Text } from 'thenativeweb-ux';

<div>
  <Text>Choose a color</Text>
  <Toggle
    values={ [ 'blue', 'pink', 'red' ] }
    selectedValue={ state.selectedValue }
    onChange={ newValue => setState({ selectedValue: newValue }) }
  >
    { ({ value, isSelected, changeValue }) => (
      <div
        style={{ cursor: 'pointer', margin: 10, width: 10, height: 10, borderRadius: '100%', background: value, transform: isSelected ? 'scale(2)' : '' }}
        onClick={ () => changeValue(value) }
        key={ value }
      />
    )}
  </Toggle>
  <Text>Selected color is: {state.selectedValue}</Text>
</div>
```
