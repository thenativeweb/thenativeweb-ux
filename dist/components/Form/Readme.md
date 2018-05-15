```javascript
initialState = { sample: 'foo' };
<Form onSubmit={event => { event.preventDefault(); console.log(state.sample) }}>
  <Headline>Example Form</Headline>
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
  <Form.Actions>
    <Button isPrimary={ true }>Submit</Button>
  </Form.Actions>
</Form>
```
