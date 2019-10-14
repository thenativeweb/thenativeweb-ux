The `BusyIndicator` component is used to inform the user about the application doing work and being busy.

```javascript
import { ThemeProvider, themes, View } from 'thenativeweb-ux';

<View>
  <View orientation='centered'>
    <BusyIndicator />
  </View>

  <View background='dark' orientation='centered'>
    <BusyIndicator />
  </View>

  <ThemeProvider theme={ themes.wolkenkit}>
    <div>
      <View orientation='centered'>
        <BusyIndicator />
      </View>
      <View background='dark' orientation='centered'>
        <BusyIndicator />
      </View>
    </div>
  </ThemeProvider>
</View>
```
