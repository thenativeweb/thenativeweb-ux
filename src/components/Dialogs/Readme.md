```js
const services = require('../../services').default;
<div>
  <Notifications />
  <Button onClick={ () => services.notifications.show({ type: 'error', text: 'This is an error!' }) }>Show Notification!</Button>
</div>
```
