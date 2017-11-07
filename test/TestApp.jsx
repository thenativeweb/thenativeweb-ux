import React from 'react';
import { Application, Brand, Button, ControlGroup, Dropdown, Form, Sidebar, TextBox, View } from '../src';

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
      formSubmitted: false
    };
  }

  handleFormSubmitted (event) {
    event.preventDefault();

    this.setState({
      formSubmitted: true
    });
  }

  render () {
    const { buttonClicked, dropdownOptions, dropdownOptionSelected, formValue, formSubmitted } = this.state;

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
          </section>
        </View>
      </Application>
    );
  }
}

export default TestApp;
