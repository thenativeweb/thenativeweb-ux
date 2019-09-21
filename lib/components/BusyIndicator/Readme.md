The `BusyIndicator` component is used to inform the user about the application doing work and being busy.

```javascript
import { ThemeProvider, View } from 'thenativeweb-ux';

<View>
  <View orientation='centered'>
    <BusyIndicator />
  </View>

  <View background='dark' orientation='centered'>
    <BusyIndicator />
  </View>

  <ThemeProvider theme='wolkenkit'>
    <View orientation='centered'>
      <BusyIndicator />
    </View>
  </ThemeProvider>

  <ThemeProvider theme='wolkenkit'>
    <View background='dark' orientation='centered'>
      <BusyIndicator />
    </View>
  </ThemeProvider>
</View>
```
