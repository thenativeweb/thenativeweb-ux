import React from 'react';
import {
  Application,
  Brand,
  Button,
  ControlGroup,
  Dialogs,
  Dropdown,
  Form,
  Headline,
  Icon,
  Link,
  Message,
  Modal,
  Notifications,
  services,
  Sidebar,
  TextArea,
  TextBox,
  View
} from '../src';

const handleShowConfirmClicked = function () {
  services.dialogs.confirm({
    title: 'Blah',
    actions: {
      cancel: 'Cancel',
      confirm: 'Make it so!'
    }
  }).then(action => {
    services.notifications.show({
      type: 'success',
      text: `You triggered the ${action} action.`
    });
  });
};

const log = function (msg) {
  /* eslint-disable no-console */
  console.log(msg);
  /* eslint-enable no-console */
};

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
        <Sidebar id='sidebar'>
          <Sidebar.Brand><Brand suffix='App' /></Sidebar.Brand>
          <Sidebar.Item iconName='account' id='sidebar-item-account'>
            <Sidebar.Item>
              { 'Authenticated as (anonymous)'}
            </Sidebar.Item>
            <Sidebar.Item id='sidebar-item-logout' onClick={ () => log('clicked::clicked::logout') }>
              Logout
            </Sidebar.Item>
          </Sidebar.Item>
        </Sidebar>
        <View orientation='vertical' scrollable='auto'>
          <section><Headline>Test app</Headline></section>
          <section>
            <Headline level='2'>Brand</Headline>
            <Brand suffix='profile' />
          </section>
          <section>
            <Headline level='2'>Button</Headline>
            <Button id='button' onClick={ () => this.setState({ buttonClicked: true }) }>{ !buttonClicked ? 'Click me' : 'Thanks!' }</Button>
          </section>
          <section>
            <Headline level='2'>ControlGroup</Headline>
            <ControlGroup>This is a control group</ControlGroup>
          </section>
          <section>
            <Headline level='2'>Dialogs</Headline>
            <Dialogs />
            <Button id='show-confirm' onClick={ handleShowConfirmClicked }>Show confirm</Button>
          </section>
          <section>
            <Headline level='2'>Dropdown</Headline>
            <Dropdown value={ dropdownOptionSelected } options={ dropdownOptions } onChange={ value => this.setState({ dropdownOptionSelected: value }) } />
          </section>
          <section>
            <Headline level='2'>Form</Headline>
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
            <Headline level='2'>Icon</Headline>
            <Icon name='help' size='s' />
            <Icon name='help' size='l' />
          </section>
          <section>
            <Headline level='2'>Link</Headline>
            <Link href='/interal'>This is an internal link!</Link>
            <Link href='http://www.google.de' isExternal={ true }>This is an external link!</Link>
          </section>
          <section>
            <Headline level='2'>Message</Headline>
            <Message type='error'>This is an error!</Message>
            <Message type='info' icon='info'>This is a message with icon!</Message>
          </section>
          <section>
            <Headline level='2'>Modal</Headline>
            <Button id='show-modal' onClick={ () => this.setState({ showModal: true }) }>Show modal</Button>
            <Modal attach='sidebar' size='m' isVisible={ showModal } onCancel={ () => this.setState({ showModal: false }) }>
              <Form onSubmit={ () => this.setState({ showModal: false }) }>
                <Headline level='2'>Headline</Headline>
                <div id='modal-content'>This is the content of the modal.</div>
                <Form.Actions>
                  <Button id='cancel-modal' onClick={ () => this.setState({ showModal: false }) }>Cancel</Button>
                  <Button id='submit-modal' isPrimary={ true }>Submit</Button>
                </Form.Actions>
              </Form>
            </Modal>
          </section>
          <section>
            <Headline level='2'>Notifications</Headline>
            <Button id='show-notification-error' onClick={ () => services.notifications.show({ type: 'error', text: 'This is an error!' }) }>Show notification (error)</Button>
            <Button id='show-notification-success' onClick={ () => services.notifications.show({ type: 'success', text: 'This is a success!' }) }>Show notification (success)</Button>
            <Notifications notifications={ notifications } />
          </section>
          <section>
            <Headline level='2'>TextArea</Headline>
            <TextArea value={ textAreaValue } placeholder='Enter text' onChange={ event => this.setState({ textAreaValue: event.target.value }) } />
          </section>
          <section>
            <Headline level='2'>TextBox</Headline>
            <TextBox value={ textBoxValue } placeholder='Enter text' onChange={ event => this.setState({ textBoxValue: event.target.value }) } />
          </section>
        </View>
      </Application>
    );
  }
}

export default TestApp;
