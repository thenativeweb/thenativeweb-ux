import React from 'react';
import {
  Application,
  Brand,
  Button,
  ControlGroup,
  Dropdown,
  Form,
  Icon,
  Message,
  Modal,
  Notifications,
  services,
  Sidebar,
  TextArea,
  TextBox,
  View
} from '../src';

class TestApp extends React.Component {
  constructor (props) {
    super(props);

    this.handleFormSubmitted = this.handleFormSubmitted.bind(this);

    this.state = {
      buttonClicked: false,
      dropdownOptions: [
         { value: 'foo', label: 'Foo' }, { value: 'bar', label: 'Bar' }
      ],
      dropdownOptionSelected: 'foo',
      formValue: '',
      formSubmitted: false,
      notifications: [],
      textAreaValue: '',
      textBoxValue: ''
    };
  }

  handleFormSubmitted (event) {
    event.preventDefault();

    this.setState({
      formSubmitted: true
    });
  }

  render () {
    const {
      buttonClicked,
      dropdownOptions,
      dropdownOptionSelected,
      formValue,
      formSubmitted,
      notifications,
      showModal,
      textAreaValue,
      textBoxValue
    } = this.state;

    return (
      <Application orientation='horizontal'>
        <Sidebar />
        <View orientation='vertical' scrollable='auto'>
          <section>
            <h2>Brand</h2>
            <Brand suffix='profile' />
          </section>
          <section>
            <h2>Button</h2>
            <Button id='button' onClick={ () => this.setState({ buttonClicked: true }) }>{ !buttonClicked ? 'Click me' : 'Thanks!' }</Button>
          </section>
          <section>
            <h2>ControlGroup</h2>
            <ControlGroup>This is a control group</ControlGroup>
          </section>
          <section>
            <h2>Dropdown</h2>
            <Dropdown value={ dropdownOptionSelected } options={ dropdownOptions } onChange={ value => this.setState({ dropdownOptionSelected: value }) } />
          </section>
          <section>
            <h2>Form</h2>
            <Form onSubmit={ this.handleFormSubmitted }>
              <ControlGroup>
                <ControlGroup.Item label='TextBox with label'>
                  <TextBox value={ formValue } onChange={ event => this.setState({ formValue: event.target.value }) } />
                </ControlGroup.Item>
              </ControlGroup>
              <ControlGroup>
                <Button>Cancel</Button> <Button id='form-submit' isPrimary={ true }>{ !formSubmitted ? 'Submit' : 'Thanks!' }</Button>
              </ControlGroup>
            </Form>
          </section>
          <section>
            <h2>Icon</h2>
            <Icon name='help' size='s' />
            <Icon name='help' size='l' />
          </section>
          <section>
            <h2>Message</h2>
            <Message type='error'>This is an error!</Message>
            <Message type='info' icon='info'>This is a message with icon!</Message>
          </section>
          <section>
            <h2>Modal</h2>
            <Button id='show-modal' onClick={ () => this.setState({ showModal: true }) }>Show modal</Button>
            <Modal attach='sidebar' size='m' isVisible={ showModal } onCancel={ () => this.setState({ showModal: false }) }>
              <Form onSubmit={ () => this.setState({ showModal: false }) }>
                <Form.Title>Title</Form.Title>
                <div id='modal-content'>This is the content of the modal.</div>
                <Form.Actions>
                  <Button id='cancel-modal' onClick={ () => this.setState({ showModal: false }) }>Cancel</Button>
                  <Button id='submit-modal' isPrimary={ true }>Submit</Button>
                </Form.Actions>
              </Form>
            </Modal>
          </section>
          <section>
            <h2>Notifications</h2>
            <Button id='show-notification' onClick={ () => services.notifications.show({ type: 'error', text: 'This is an error!' }) }>Show notification</Button>
            <Notifications notifications={ notifications } />
          </section>
          <section>
            <h2>TextArea</h2>
            <TextArea value={ textAreaValue } placeholder='Enter text' onChange={ event => this.setState({ textAreaValue: event.target.value }) } />

            <h2>TextBox</h2>
            <TextBox value={ textBoxValue } placeholder='Enter text' onChange={ event => this.setState({ textBoxValue: event.target.value }) } />
          </section>
        </View>
      </Application>
    );
  }
}

export default TestApp;
