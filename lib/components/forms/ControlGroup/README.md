```jsx
import { Button, Form, ControlGroup, ControlGroupDivider, ControlGroupItem, TextBox } from 'thenativeweb-ux';

<Form onSubmit={event => { event.preventDefault(); console.log('submitted') }}>
  <ControlGroup>
    <ControlGroupItem label='First name' adjust='flex'>
      <TextBox
        name='first-name'
        placeholder='Your first name'
        onChange={() => {}}
      />
    </ControlGroupItem>

    <ControlGroupItem label='Your name' adjust='flex'>
      <TextBox
        name='lastn-name'
        placeholder='Your last name'
        onChange={() => {}}
      />
    </ControlGroupItem>
  </ControlGroup>


  <ControlGroup>
    <ControlGroupItem label='Address' adjust='flex'>
      <TextBox
        name='adress'
        value={ 'Feuerseeplatz 14' }
        placeholder='Your business adress'
        onChange={() => {}}
      />
      </ControlGroupItem>
  </ControlGroup>

  <ControlGroupDivider />

  <Button>Submit</Button>
</Form>
```
