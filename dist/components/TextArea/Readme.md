```javascript
initialState = { value: 'foo' };
<TextArea
  value={ state.value }
  placeholder='Lorem ipsum…'
  onFocus={event => console.log('focused', event.target.value)}
  onBlur={event => console.log('blurred', event.target.value)}
  onChange={event => setState({ value: event.target.value })}
/>
```

```javascript
initialState = { value: 'This TextArea is disabled' };
<TextArea
  value={ state.value }
  disabled={ true }
/>
```

```javascript
initialState = { value: 'This TextArea is medium' };
<TextArea
  value={ state.value }
  size='md'
  onChange={ event => setState({ value: event.target.value })}
/>
```
