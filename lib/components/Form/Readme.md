```jsx
initialState = { sample: 'foo', checked: false };

import { Button, CheckBox, ControlGroup, Headline, TextBox } from 'thenativeweb-ux';

<Form onSubmit={event => { event.preventDefault(); console.log(state.sample) }}>
  <Headline>Example form</Headline>
  <ControlGroup>
    <ControlGroup.Item label='Sample Input' adjust='flex'>
      <TextBox
        id='sample-input'
        value={ state.sample }
        onChange={ event => setState({ sample: event.target.value }) }
        placeholder='This is a sample input'
      />
    </ControlGroup.Item>
  </ControlGroup>
  <ControlGroup>
    <ControlGroup.Item label='This is a sample checkbox'>
      <CheckBox
        id='sample-checkbox-1'
        value={ state.checked }
        onChange={ event => setState({ checked: !state.checked }) }
      />
    </ControlGroup.Item>
  </ControlGroup>
  <Form.Actions>
    <Button isPrimary={ true }>Submit</Button>
    <Button>Cancel</Button>
  </Form.Actions>
</Form>
```

```jsx
initialState = { sample: 'foo', checked: false };
import { Button, CheckBox, ControlGroup, Headline, TextBox } from 'thenativeweb-ux';

<Form onSubmit={event => { event.preventDefault(); console.log(state.sample) }}>
  <Headline>Example mobile friendly form</Headline>
  <ControlGroup>
    <ControlGroup.Item label='Sample Input' adjust='flex'>
      <TextBox
        name='sample-input'
        value={ state.sample }
        onChange={ event => setState({ sample: event.target.value }) }
        placeholder='This is a sample input'
      />
    </ControlGroup.Item>
  </ControlGroup>
  <ControlGroup>
    <ControlGroup.Item label='This is a sample checkbox'>
      <CheckBox
        id='sample-checkbox-2'
        value={ state.checked }
        onChange={ event => setState({ checked: !state.checked }) }
      />
    </ControlGroup.Item>
  </ControlGroup>
  <Form.Actions type='stacked'>
    <Button isPrimary={ true }>Submit</Button>
    <Button>Cancel</Button>
  </Form.Actions>
</Form>
```
