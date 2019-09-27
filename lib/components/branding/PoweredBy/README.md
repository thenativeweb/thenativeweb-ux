The `PoweredBy` component displays a teaser. Optionally, you may provide a product name using the `product` property.

```jsx
import { ThemeProvider, View } from 'thenativeweb-ux';
<View>
  <View background='dark'>
    <PoweredBy />
  </View>
  <hr />
  <ThemeProvider theme='wolkenkit'>
    <View background='dark'>
      <PoweredBy product='wolkenkit' />
    </View>
  </ThemeProvider>
</View>
```