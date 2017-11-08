
```js
initialState = { isVisible: false };
<div>
  <Button onClick={ () => setState({ isVisible: true })}>Open modal</Button>
  <Modal isVisible={ state.isVisible } onCancel={ () => setState({ isVisible: false })}>
    <Modal.Title>This is the title</Modal.Title>
    <div>This is a default model!</div>
  </Modal>
</div>
```

```js
initialState = { isVisible: false };
<div>
  <Button onClick={ () => setState({ isVisible: true })}>Open modal attached to the right</Button>
  <Modal attach='right' isVisible={ state.isVisible } onCancel={ () => setState({ isVisible: false })}>
    <Modal.Title>This is the title</Modal.Title>
    <div>This is a modal attached to the right!</div>
  </Modal>
</div>
```

```js
initialState = { isVisible: false };
<div>
  <Button onClick={ () => setState({ isVisible: true })}>Open large modal</Button>
  <Modal attach='right' size='m' isVisible={ state.isVisible } onCancel={ () => setState({ isVisible: false })}>
    <Modal.Title>This is the title</Modal.Title>
    <div>This is a large model</div>
  </Modal>
</div>
```
