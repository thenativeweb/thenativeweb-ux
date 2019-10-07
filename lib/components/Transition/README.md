Transition is a component for animating components while they enter or leave your application. There's a set of built-in types you can use: `Fade`, `FadeInLeft`, `FadeInRight`, `Grow` and `Zoom`. Wrap the component that should be animated and use the boolean `in` property to animate in and out. Please note that you might have to set explicit dimensions to the parent of the animated component in order to prevent a page jumps.

```jsx
initialState = {
  isBoxVisible: true
 };
import { CheckBox, ControlGroup, Form, View } from 'thenativeweb-ux';

<div>
  <Form>
    <ControlGroup>
      <ControlGroupItem label='Show box?'>
        <CheckBox id='transition-checkbox' onChange={() => setState({ isBoxVisible: !state.isBoxVisible })} />
      </ControlGroupItem>
    </ControlGroup>
  </Form>

  <View style={{ width: 200, height: 200}}>
    <Transition type='FadeInRight' in={ state.isBoxVisible }>
      <View style={{ width: 200, height: 200, background: 'orange', textAlign: 'center' }} orientation='centered'><span>This box will be animated in and out using `FadeInRight`.</span></View>
    </Transition>
  </View>
</div>
```

To transition an array of elements, use the `Transition.Group` component. Please note that you have to set a unique key for each item in order to let React know which element has been added or removed.

```jsx
initialState = { items: [ 'Thing 1' ] };
import { Button, View } from 'thenativeweb-ux';

addItem = function () {
  const newItems = [].concat(state.items, 'Thing ' +  (state.items.length + 1));

  setState({ items: newItems});
};

removeItem = function () {
  const newItems = state.items.slice(0, -1);

  setState({ items: newItems});
};

<div>
  <View orientation='horizontal'>
    <Button onClick={ addItem }>Add item</Button>
    <Button onClick={ removeItem }>Remove item</Button>
  </View>
  <View>
    <TransitionGroup type='FadeInRight'>
      { state.items.map((item, index) => (
        <View orientation='centered' style={{ width: 100, height: 100, float: 'left', background: 'orange', marginRight: 5, marginBottom: 5 }} key={index}>{item}</View>
      )) }
    </TransitionGroup>
  </View>
</div>
```

You can create custom transitions using `Transition.Custom` which gives you access to the  [Transition](https://reactcommunity.org/react-transition-group/transition) component provided by [react-transition-group](https://github.com/reactjs/react-transition-group). This component is actually used under the hood and gives you full access to lifecycle events (e.g. `onEnter`, `onExit`) you can use to trigger custom animations.
