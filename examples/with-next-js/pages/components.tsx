import { DropdownOption } from '../../../lib/components/input/Dropdown';
import {
  Application,
  Brand,
  BusyIndicator,
  Button,
  CheckBox,
  classNames,
  Container,
  ControlGroup,
  ControlGroupItem,
  Dropdown,
  Form,
  FormActions,
  Grid,
  GridItem,
  Headline,
  Icon,
  Link,
  Message,
  Modal,
  Product,
  services,
  Sidebar,
  SidebarBrand,
  SidebarFooter,
  SidebarItem,
  Text,
  TextArea,
  TextBox,
  Toggle,
  Transition
} from '../../../lib';
import React, { FormEvent, ReactElement } from 'react';

const handleShowConfirmClicked = async function (): Promise<void> {
  const action = await services.dialogs.confirm({
    title: 'Blah',
    actions: {
      cancel: 'Cancel',
      confirm: 'Make it so!'
    }
  });

  services.notifications.show({
    type: 'success',
    text: `You triggered the ${action} action.`
  });
};

const log = function (msg: any): void {
  /* eslint-disable no-console */
  console.log(msg);
  /* eslint-enable no-console */
};

interface TestAppState {
  buttonClicked: boolean;
  checkBoxValue: boolean;
  dropdownOptions: DropdownOption [];
  dropdownOptionSelected: string;
  formValue: string;
  formSubmitted: boolean;
  isBoxVisible: boolean;
  showModal: boolean;
  textAreaValue: string;
  textBoxValue: string;
  toggleOptionSelected: string;
}

class TestApp extends React.Component<{}, TestAppState> {
  public constructor (props: any) {
    super(props);

    this.state = {
      buttonClicked: false,
      checkBoxValue: false,
      dropdownOptions: [
        { value: 'foo', label: 'Foo' },
        { value: 'bar', label: 'Bar' }
      ],
      dropdownOptionSelected: 'foo',
      formValue: '',
      formSubmitted: false,
      textAreaValue: '',
      textBoxValue: '',
      toggleOptionSelected: 'Option 1',
      isBoxVisible: true,
      showModal: false
    };
  }

  protected handleFormSubmitted = (event: FormEvent): void => {
    event.preventDefault();

    this.setState({
      formSubmitted: true
    });
  };

  public render (): ReactElement {
    const {
      buttonClicked,
      checkBoxValue,
      dropdownOptions,
      dropdownOptionSelected,
      formValue,
      formSubmitted,
      isBoxVisible,
      showModal,
      textAreaValue,
      textBoxValue,
      toggleOptionSelected
    } = this.state;

    return (
      <Application>
        <Sidebar id='sidebar'>
          <SidebarBrand><Product name='App' /></SidebarBrand>
          <SidebarItem iconName='account' id='sidebar-item-account'>
            <SidebarItem>
              Authenticated as (anonymous)
            </SidebarItem>
            <SidebarItem id='sidebar-item-logout' onClick={ (): void => log('clicked::clicked::logout') }>
              Logout
            </SidebarItem>
          </SidebarItem>
          <SidebarFooter>
            <Link href='https://www.thenativeweb.io' isExternal={ true }>
              <Brand type='minimal' color='monochrome' isInteractive={ true } />
            </Link>
          </SidebarFooter>
        </Sidebar>
        <Container isScrollable={ true } vertical='stretch' horizontal='stretch' style={{ padding: '20px' }}>
          <div>
            <section><Headline>Test app</Headline></section>
            <section>
              <Headline level='2'>Button</Headline>
              <Button id='button' onClick={ (): void => this.setState({ buttonClicked: true }) }>{ !buttonClicked ? 'Click me' : 'Thanks!' }</Button>
              <Button id='button-with-icon' icon='heart' onClick={ (): void => log('button-with-icon::clicked') }>Subtle Button</Button>
              <Button id='button-icon-only' icon='heart' onClick={ (): void => log('button-subtle::clicked') } />
              <Button id='button-subtle' isSubtle={ true } onClick={ (): void => log('button-subtle::clicked') }>Subtle Button</Button>
              <Button id='button-subtle' isSubtle={ true } icon='heart' onClick={ (): void => log('button-subtle-with-icon::clicked') }>Subtle Button with icon</Button>
            </section>
            <section>
              <Headline level='2'>BusyIndicator</Headline>
              <BusyIndicator />
            </section>
            <section>
              <Headline level='2'>ControlGroup</Headline>
              <ControlGroup>This is a control group</ControlGroup>
            </section>
            <section>
              <Headline level='2'>classNames</Headline>
              <div id='classNames' className={ classNames({ custom: true }) }>This div has a custom class name using className.</div>
            </section>
            <section>
              <Headline level='2'>Dialogs</Headline>
              <Button id='show-confirm' onClick={ handleShowConfirmClicked }>Show confirm</Button>
            </section>
            <section>
              <Headline level='2'>Dropdown</Headline>
              <Dropdown value={ dropdownOptionSelected } options={ dropdownOptions } onChange={ (value): void => this.setState({ dropdownOptionSelected: value }) } />
            </section>
            <section>
              <Headline level='2'>Form</Headline>
              <Form onSubmit={ this.handleFormSubmitted }>
                <ControlGroup>
                  <ControlGroupItem label='TextBox with label'>
                    <TextBox value={ formValue } onChange={ (event): void => this.setState({ formValue: event.target.value }) } />
                  </ControlGroupItem>
                </ControlGroup>
                <ControlGroup>
                  <ControlGroupItem label='Checkbox with label'>
                    <CheckBox id='form-checkbox' checked={ checkBoxValue } onChange={ (): void => this.setState({ checkBoxValue: !checkBoxValue }) } />
                  </ControlGroupItem>
                </ControlGroup>
                <ControlGroup>
                  <Button>Cancel</Button> <Button id='form-submit' isPrimary={ true }>{ !formSubmitted ? 'Submit' : 'Thanks!' }</Button>
                </ControlGroup>
              </Form>
            </section>
            <section>
              <Headline level='2'>Grid</Headline>
              <Grid id='grid'>
                <GridItem columnSpan='6' id='grid-item-span6-first'>First column</GridItem>
                <GridItem columnSpan='6' id='grid-item-span6-second'>Second column</GridItem>
                <GridItem columnSpan={{ xs: 12, md: 6 }} id='grid-item-span6-responsive-third'>Third column</GridItem>
                <GridItem columnSpan={{ xs: 12, md: 6 }} id='grid-item-span6-responsive-fourth'>Fourth column</GridItem>
              </Grid>
            </section>
            <section>
              <Headline level='2'>Icon</Headline>
              <Icon name='help' size='sm' />
              <Icon name='help' size='lg' />
            </section>
            <section>
              <Headline level='2'>Link</Headline>
              <Link href='/interal'>This is an internal link!</Link>
              <Link href='http://www.google.de' isExternal={ true }>This is an external link!</Link>
            </section>
            <section>
              <Headline level='2'>Message</Headline>
              <Message type='error'>This is an error!</Message>
              <Message type='info'>This is an info.</Message>
            </section>
            <section>
              <Headline level='2'>Modal</Headline>
              <Button id='show-modal' onClick={ (): void => this.setState({ showModal: true }) }>Show modal</Button>
              <Modal attach='sidebar' size='md' isVisible={ showModal } onCancel={ (): void => this.setState({ showModal: false }) }>
                <Form onSubmit={ (): void => this.setState({ showModal: false }) }>
                  <Headline level='2'>Headline</Headline>
                  <div id='modal-content'>This is the content of the modal.</div>
                  <FormActions>
                    <Button id='cancel-modal' onClick={ (): void => this.setState({ showModal: false }) }>Cancel</Button>
                    <Button id='submit-modal' isPrimary={ true }>Submit</Button>
                  </FormActions>
                </Form>
              </Modal>
            </section>
            <section>
              <Headline level='2'>Notifications</Headline>
              <Button
                id='show-notification-error'
                onClick={ (): void => services.notifications.show({ type: 'error', text: 'This is a notification of type error!' }) }
              >
                Show notification (error)
              </Button>
              <Button
                id='show-notification-success'
                onClick={ (): void => services.notifications.show({ type: 'success', text: 'This is a notification of type success!' }) }
              >
                Show notification (success)
              </Button>
            </section>
            <section>
              <Headline level='2'>Text</Headline>
              <div>
                <Text>This is medium text</Text>
                <Text size='sm'>This is small text</Text>
              </div>
            </section>
            <section>
              <Headline level='2'>TextArea</Headline>
              <TextArea value={ textAreaValue } placeholder='Enter text' onChange={ (event): void => this.setState({ textAreaValue: event.target.value }) } />
            </section>
            <section>
              <Headline level='2'>TextBox</Headline>
              <TextBox value={ textBoxValue } placeholder='Enter text' onChange={ (event): void => this.setState({ textBoxValue: event.target.value }) } />
            </section>
            <section>
              <Headline level='2'>Toggle</Headline>
              <div>
                <Toggle
                  id='toggle'
                  values={ [ 'Option 1', 'Option 2' ] }
                  selectedValue={ toggleOptionSelected }
                  onChange={ (newValue): void => this.setState({ toggleOptionSelected: newValue }) }
                />
                Selected option is: <span id='toggle-value'>{ toggleOptionSelected }</span>
              </div>
            </section>
            <section>
              <Headline level='2'>Transition</Headline>
              <Form>
                <ControlGroup>
                  <ControlGroupItem label='Show box?'>
                    <CheckBox id='transition-checkbox' onChange={ (): void => this.setState((prevState): any => ({ isBoxVisible: !prevState.isBoxVisible })) } />
                  </ControlGroupItem>
                </ControlGroup>
              </Form>

              <div style={{ width: 200, height: 200 }}>
                <Transition type='FadeInRight' in={ isBoxVisible }>
                  <Container style={{ width: 200, height: 200, background: 'orange', textAlign: 'center' }}>This box will be animated in and out using `FadeInRight`.</Container>
                </Transition>
              </div>
            </section>
          </div>
        </Container>
      </Application>
    );
  }
}

export default TestApp;
