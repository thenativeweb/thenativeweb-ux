```js
const services = require('../../services').default;
<div>
  <Notifications />
  <Button onClick={ () => services.notifications.show({ type: 'error', text: 'This is an error!' }) }>Show Notification  (error)!</Button>
  <Button onClick={ () => services.notifications.show({ type: 'success', text: 'This is a success!' }) }>Show Notification (success)!</Button>
</div>
```
