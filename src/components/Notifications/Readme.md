```js
initialState = { notifications: [  ] };
<div>
  <Notifications notifications={ state.notifications } />
  <Button
    onClick={
      () => {
        setState({ notifications: [ { id: 1234, type: 'error', text: 'Blah' } ]});
        setTimeout(() => setState({ notifications: []}), 3000);
      }
    }>Show Notification!</Button>
</div>
```
