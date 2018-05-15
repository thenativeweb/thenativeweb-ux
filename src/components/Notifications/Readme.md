```js noeditor
const services = require('../../services').default;
<div>
  <Button onClick={ () => services.notifications.show({ type: 'error', text: 'This is an error!' }) }>Show Notification  (error)!</Button>
  <Button onClick={ () => services.notifications.show({ type: 'success', text: 'This is a success!' }) }>Show Notification (success)!</Button>
</div>
```

```jsx static
import { services } from 'thenatiweb-ux';

<div>
  <Button onClick={ () => services.notifications.show({ type: 'error', text: 'This is an error!' }) }>Show Notification  (error)!</Button>
  <Button onClick={ () => services.notifications.show({ type: 'success', text: 'This is a success!' }) }>Show Notification (success)!</Button>
</div>
```
