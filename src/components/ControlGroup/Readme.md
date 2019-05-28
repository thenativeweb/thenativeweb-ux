```jsx
import { Button, Form, TextBox } from 'thenativeweb-ux';

<Form onSubmit={event => { event.preventDefault(); console.log('submitted') }}>
  <ControlGroup>
    <ControlGroup.Item label='First name' adjust='flex'>
      <TextBox
        name='first-name'
        placeholder='Your first name'
        onChange={() => {}}
      />
    </ControlGroup.Item>

    <ControlGroup.Item label='Your name' adjust='flex'>
      <TextBox
        name='lastn-name'
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
