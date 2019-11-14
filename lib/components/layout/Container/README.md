A `Container` can be used to position a single child component on a horizontal and vertical axis. The most common use case this component is to center a child both horizontally and vertically which is the default option.

```javascript
<Container style={{ height: 100 }}>
  <div style={{ background: 'deeppink' }}>I'm a centered child.</div>
</Container>
```

### Setting `vertical` and `horizontal`

The position of the child can be controlled using `vertical` and `horizontal`.

```javascript
import { ControlGroup, ControlGroupItem, Dropdown, Label } from 'thenativeweb-ux';

initialState = { vertical: 'center', horizontal: 'center' };

<div>
  <ControlGroup>
    <ControlGroupItem label='vertical'>
      <Dropdown options={[ { value: 'top', label: 'top' }, { value: 'center', label: 'center'}, { value: 'bottom', label: 'bottom' }, { value: 'stretch', label: 'stretch' } ]} value={ state.vertical } onChange={ value => setState({ vertical: value })} />
    </ControlGroupItem>
    <ControlGroupItem label='horizontal'>
      <Dropdown options={[ { value: 'left', label: 'left' }, { value: 'center', label: 'center' }, { value: 'right', label: 'right' }, { value: 'stretch', label: 'stretch' } ]} value={ state.horizontal } onChange={ value => setState({ horizontal: value })} />
    </ControlGroupItem>
  </ControlGroup>
  <Container vertical={ state.vertical } horizontal={ state.horizontal } style={{ height: 200 }}>
    <div style={{ background: 'deeppink' }}>I'm a child with vertical set to `{state.vertical}` and horizontal set to `{state.horizontal}`.</div>
  </Container>
</div>
```

### Setting the background color

```javascript
<div>
  <Container background='dark' style={{ height: 100 }}>
    <div style={{ background: 'deeppink' }}>I'm a child on dark background.</div>
  </Container>
  <Container background='light' style={{ height: 100 }}>
    <div style={{ background: 'deeppink' }}>I'm a child on light background.</div>
  </Container>
  <Container background='none' style={{ height: 100 }}>
    <div style={{ background: 'deeppink' }}>I'm a child on a transparent background.</div>
  </Container>
</div>
```

### Making a Container scrollable

```javascript
<Container background='dark' style={{ height: 200 }} isScrollable={ true }>
  <div style={{ background: 'deeppink', width: 400 }}>
    I am very large so my parent is scrollable.
    <div style={{ background: 'deeppink', height: 400 }} />
    This is the end.
  </div>
</Container>
```
