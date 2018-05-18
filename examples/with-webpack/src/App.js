import React from 'react';
import {
  Application,
  Brand,
  Button,
  CheckBox,
  ControlGroup,
  Dropdown,
  Form,
  Headline,
  Icon,
  Link,
  Message,
  Modal,
  services,
  Sidebar,
  TextArea,
  TextBox,
  ThemeProvider,
  Transition,
  View
} from '../../../dist';

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
      checkBoxValue: false,
      dropdownOptions: [
        { value: 'foo', label: 'Foo' }, { value: 'bar', label: 'Bar' }
      ],
      dropdownOptionSelected: 'foo',
      formValue: '',
      formSubmitted: false,
      textAreaValue: '',
      textBoxValue: '',
      isBoxVisible: true
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
      checkBoxValue,
      dropdownOptions,
      dropdownOptionSelected,
      formValue,
      formSubmitted,
      showModal,
      textAreaValue,
      textBoxValue
    } = this.state;

    return (
      <ThemeProvider>
        <Application orientation='horizontal'>
          <Application.Services />
          <Sidebar id='sidebar'>
            <Sidebar.Brand><Brand.Product name='App' /></Sidebar.Brand>
            <Sidebar.Item iconName='account' id='sidebar-item-account'>
              <Sidebar.Item>
                { 'Authenticated as (anonymous)'}
              </Sidebar.Item>
              <Sidebar.Item id='sidebar-item-logout' onClick={ () => log('clicked::clicked::logout') }>
                Logout
              </Sidebar.Item>
            </Sidebar.Item>
            <Sidebar.Footer>
              <Link href='https://www.thenativeweb.io' isExternal={ true }>
                <Brand type='minimal' color='monochrome' isInteractive={ true } />
              </Link>
            </Sidebar.Footer>
          </Sidebar>
          <View orientation='vertical' scrollable='auto'>
            <section><Headline>Test app</Headline></section>
            <section>
              <Headline level='2'>Button</Headline>
              <Button id='button' onClick={ () => this.setState({ buttonClicked: true }) }>{ !buttonClicked ? 'Click me' : 'Thanks!' }</Button>
              <Button id='button-with-icon' icon={ 'heart' } onClick={ () => log('button-with-icon::clicked') }>Subtle Button</Button>
              <Button id='button-icon-only' icon={ 'heart' } onClick={ () => log('button-subtle::clicked') } />
              <Button id='button-subtle' isSubtle={ true } onClick={ () => log('button-subtle::clicked') }>Subtle Button</Button>
              <Button id='button-subtle' isSubtle={ true } icon={ 'heart' } onClick={ () => log('button-subtle-with-icon::clicked') }>Subtle Button with icon</Button>
            </section>
            <section>
              <Headline level='2'>ControlGroup</Headline>
              <ControlGroup>This is a control group</ControlGroup>
            </section>
            <section>
              <Headline level='2'>Dialogs</Headline>
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
                  <ControlGroup.Item label='Checkbox with label'>
                    <CheckBox id='form-checkbox' checked={ checkBoxValue } onChange={ () => this.setState({ checkBoxValue: !checkBoxValue }) } />
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
            </section>
            <section>
              <Headline level='2'>TextArea</Headline>
              <TextArea value={ textAreaValue } placeholder='Enter text' onChange={ event => this.setState({ textAreaValue: event.target.value }) } />
            </section>
            <section>
              <Headline level='2'>TextBox</Headline>
              <TextBox value={ textBoxValue } placeholder='Enter text' onChange={ event => this.setState({ textBoxValue: event.target.value }) } />
            </section>
            <section>
              <Headline level='2'>Transition</Headline>
              <Form>
                <ControlGroup>
                  <ControlGroup.Item label='Show box?'>
                    <CheckBox id='transition-checkbox' onChange={ () => this.setState({ isBoxVisible: !this.state.isBoxVisible }) } />
                  </ControlGroup.Item>
                </ControlGroup>
              </Form>

              <View style={{ width: 200, height: 200 }}>
                <Transition type='FadeInRight' in={ this.state.isBoxVisible }>
                  <View style={{ width: 200, height: 200, background: 'orange', textAlign: 'center' }} orientation='centered'><span>This box will be animated in and out using `FadeInRight`.</span></View>
                </Transition>
              </View>
            </section>
          </View>
        </Application>
      </ThemeProvider>
    );
  }
}

export default TestApp;
