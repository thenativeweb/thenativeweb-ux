import React from 'react';
import {
  Application,
  Brand,
  Button,
  ControlGroup,
  Dropdown,
  Form,
  Modal,
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

            <h2>Button</h2>
            <Button id='button' onClick={ () => this.setState({ buttonClicked: true }) }>{ !buttonClicked ? 'Click me' : 'Thanks!' }</Button>

            <h2>ControlGroup</h2>
            <ControlGroup>This is a control group</ControlGroup>

            <h2>Dropdown</h2>
            <Dropdown value={ dropdownOptionSelected } options={ dropdownOptions } onChange={ value => this.setState({ dropdownOptionSelected: value }) } />

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

            <h2>Modal</h2>
            <Button id='show-modal' onClick={ () => this.setState({ showModal: true }) }>Show modal</Button>
            <Modal attach='sidebar' width='large' isVisible={ showModal } onCancel={ () => this.setState({ showModal: false }) }>
              <Form onSubmit={ () => this.setState({ showModal: false }) }>
                <Form.Title>Title</Form.Title>
                <div id='modal-content'>This is the content of the modal.</div>
                <Form.Actions>
                  <Button id='cancel-modal' onClick={ () => this.setState({ showModal: false }) }>Cancel</Button>
                  <Button id='submit-modal' isPrimary={ true }>Submit</Button>
                </Form.Actions>
              </Form>
            </Modal>

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
