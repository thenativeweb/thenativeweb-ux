
```js
initialState = { value: 'foo' };
<TextBox
  name='host'
  value={ state.value }
  placeholder='local.wolkenkit.io'
  onFocus={event => console.log('focused', event.target.value)}
  onBlur={event => console.log('blurred', event.target.value)}
  onEnter={event => console.log('enter pressed', event.target.value)}
  onChange={event => setState({ value: event.target.value })}
/>
```

```js
initialState = { port: '3000' };
<TextBox
  name='host'
  value={ state.value }
  type='port'
  placeholder='3000'
  onChange={event => setState({ port: event.target.value })}
/>
```

```js
initialState = { time: '3000' };
<TextBox
  name='time'
  value={ state.time }
  type='time'
  placeholder='12:00'
  onChange={event => setState({ time: event.target.value })}
/>
```

```js
initialState = { date: '3000' };
<TextBox
  name='date'
  value={ state.date }
  type='date'
  onChange={event => setState({ date: event.target.value })}
/>
```

```js
initialState = { value: 'This TextBox is disabled' };
<TextBox
  value={ state.value }
  disabled={ true }
  onChange={event => setState({ port: event.target.value })}
/>
```
