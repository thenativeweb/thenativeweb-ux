
```js
initialState = { value: 'foo' };
<TextArea
  value={ state.value }
  placeholder='Lorem ipsum…'
  onFocus={event => console.log('focused', event.target.value)}
  onBlur={event => console.log('blurred', event.target.value)}
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

```js
initialState = { value: 'This TextArea is medium' };
<TextArea
  value={ state.value }
  size='m'
  onChange={ event => setState({ value: event.target.value })}
/>
```
