
```js
initialState = { sample: 'foo' };
<Form onSubmit={event => { event.preventDefault(); console.log(state.sample) }}>
  <Form.Title>Example Form</Form.Title>
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
  <Button>Submit</Button>
</Form>
```
