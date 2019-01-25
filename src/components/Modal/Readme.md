```javascript
initialState = { isVisible: false };
<div>
  <Button onClick={ () => setState({ isVisible: true })}>Open modal</Button>
  <Modal
    header='This is the header'
    isVisible={ state.isVisible }
    onCancel={ () => setState({ isVisible: false })}
  >
    Here goes the content…
  </Modal>
</div>
```
### With Headline

```javascript
initialState = { isVisible: false };
<div>
  <Button onClick={ () => setState({ isVisible: true })}>With headline and content</Button>
  <Modal isVisible={ state.isVisible } onCancel={ () => setState({ isVisible: false })}>
    <Headline>Additional headline</Headline>
    <div>Here goes the content…</div>
  </Modal>
</div>
```

### Hiding the header

```javascript
initialState = { isVisible: false };
<div>
  <Button onClick={ () => setState({ isVisible: true })}>Without header</Button>
  <Modal
    showHeader={ false }
    isVisible={ state.isVisible }
    onCancel={ () => setState({ isVisible: false })}
  >
    <Headline>Without header</Headline>
    … but with headline and content.
  </Modal>
</div>
```

### Positioning

```javascript
initialState = { isVisible: false };
<div>
  <Button onClick={ () => setState({ isVisible: true })}>Open modal attached to the right</Button>
  <Modal header='Attached to the right' attach='right' isVisible={ state.isVisible } onCancel={ () => setState({ isVisible: false })}>
    This is a modal attached to the right.
  </Modal>
</div>
```

```javascript
initialState = { isVisible: false };
<div>
  <Button onClick={ () => setState({ isVisible: true })}>Open modal attached to the center</Button>
  <Modal header='Attached to the center' attach='center' isVisible={ state.isVisible } onCancel={ () => setState({ isVisible: false })}>
    This is a modal attached to the center.
  </Modal>
</div>
```

### Sizes

```javascript
initialState = { isVisible: false };
<div>
  <Button onClick={ () => setState({ isVisible: true })}>Open medium modal</Button>
  <Modal header='Medium' size='m' isVisible={ state.isVisible } onCancel={ () => setState({ isVisible: false })}>
    This is a medium modal.
  </Modal>
</div>
```

```javascript
initialState = { isVisible: false };
<div>
  <Button onClick={ () => setState({ isVisible: true })}>Open large modal</Button>
  <Modal header='Large' size='l' isVisible={ state.isVisible } onCancel={ () => setState({ isVisible: false })}>
    This is a large modal.
  </Modal>
</div>
```

```javascript
initialState = { isVisible: false };
<div>
  <Button onClick={ () => setState({ isVisible: true })}>Open fullscreen modal</Button>
  <Modal header='Fullscreen' size='fullscreen' isVisible={ state.isVisible } onCancel={ () => setState({ isVisible: false })}>
    This is a large modal.
  </Modal>
</div>
```
