
```js
<Form onSubmit={event => { event.preventDefault(); console.log('submitted') }}>
  <ControlGroup>
    <ControlGroup.Item label='First name' adjust='auto'>
      <TextBox
        name='first-name'
        value={ 'Host' }
        type='port'
        placeholder='local.wolkenkit.io'
        onChange={() => {}}
      />
    </ControlGroup.Item>

    <ControlGroup.Item label='Your name' adjust='flex'>
      <TextBox
        name='lastn-name'
        value={ 'Last name' }
        placeholder='Your last name'
        onChange={() => {}}
      />
    </ControlGroup.Item>

  </ControlGroup>


  <ControlGroup>
    <ControlGroup.Item label='Address' adjust='flex'>
      <TextBox
        name='adress'
        value={ 'Feuerseeplatz 14' }
        placeholder='Your business adress'
        onChange={() => {}}
      />
      </ControlGroup.Item>
  </ControlGroup>

  <ControlGroup.Divider />
  
  <Button>Submit</Button>
</Form>
```
