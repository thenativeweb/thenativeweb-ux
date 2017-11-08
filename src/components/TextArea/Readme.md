
```js
initialState = { value: 'foo' };
<TextArea
  value={ state.value }
  placeholder='Lorem ipsum…'
  onChange={event => setState({ value: event.target.value })}
/>
```

```js
initialState = { value: 'This TextArea is disabled' };
<TextArea
  value={ state.value }
  disabled={ true }
/>
```
