The `MadeBy` component displays whom the application was developed by. Switch the `color` property to `light` if you would like to place it on a `light` background.

```jsx
import { View } from 'thenativeweb-ux';

<View>
  <View background='dark'>
    <MadeBy />
    <MadeBy size='md' />
    <MadeBy size='lg'/>
  </View>

  <MadeBy color='light' />
  <MadeBy color='light' size='md' />
  <MadeBy color='light' size='lg' />
</View>
```

Optionally, you may provide a partner using the `partner` property.

```jsx
import { ThemeProvider, View } from 'thenativeweb-ux';

<View>
  <ThemeProvider theme='wolkenkit'>
    <View background='dark'>
      <MadeBy partner={{ name: 'Intuity', href: 'https://www.intuity.de'}} />
    </View>
  </ThemeProvider>

  <MadeBy partner={{ name: 'Intuity', href: 'https://www.intuity.de'}}  color='light' />
</View>
```
