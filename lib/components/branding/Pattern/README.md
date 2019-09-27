The `Pattern` component can be used to add a pattern to a container. The pattern will be positioned absolute inside the parent container.

```jsx
import { ThemeProvider, View } from 'thenativeweb-ux';
<View>
  <View orientation='centered' background='dark' style={{ width: '400px', height: '200px' }}>
    <Pattern />
    <View>This content is above the pattern…</View>
  </View>
  <hr />
  <ThemeProvider theme='wolkenkit'>
    <View orientation='centered' background='dark' style={{ width: '400px', height: '200px' }}>
      <Pattern />
      <View>This content is above the pattern…</View>
    </View>
  </ThemeProvider>
</View>
```