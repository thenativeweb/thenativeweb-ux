The `Brand` component displays the *the native web* brand.

### Resizing the brand

The `Brand` is available in different sizes, `sm`, `md`, and `lg`. If you don't specify a size, it defaults to `md`.

```jsx
<Brand size='sm' />
<hr />
<Brand size='md' />
<hr />
<Brand size='lg' />
```

### Minimizing the brand

The `Brand` is available in a minimized version. To use it, set its `type` property to `minimal`.

```jsx
<Brand size='sm' type='minimal' />
<hr />
<Brand size='md' type='minimal' />
<hr />
<Brand size='lg' type='minimal' />
```

### Grayscaling the brand

The `Brand` is available in a grayscaled version. To use it, set its `color` property to `monochrome`. The grayscaled version is only available for the minimized `Brand`.

```jsx
<Brand size='sm' type='minimal' color='monochrome' />
<hr />
<Brand size='md' type='minimal' color='monochrome' />
<hr />
<Brand size='lg' type='minimal' color='monochrome' />
```

### Making the brand interactive

The `Brand` is available as an interactive element. To make it interactive, set its `isInteractive` property to `true`. The interactive version is only available for the minimized `Brand`.

```jsx
<Brand size='sm' type='minimal' isInteractive={ true } />
<hr />
<Brand size='md' type='minimal' isInteractive={ true } />
<hr />
<Brand size='lg' type='minimal' isInteractive={ true } />
<hr />
<Brand size='sm' type='minimal' color='monochrome' isInteractive={ true } />
<hr />
<Brand size='md' type='minimal' color='monochrome' isInteractive={ true } />
<hr />
<Brand size='lg' type='minimal' color='monochrome' isInteractive={ true } />
```

### Pattern

The `Brand.Pattern` component can be used to add a pattern to a container. The pattern will be positioned absolute inside the parent container.

```jsx
import { ThemeProvider, View } from 'thenativeweb-ux';
<View>
  <View orientation='centered' background='dark' style={{ width: '400px', height: '200px' }}>
    <Brand.Pattern />
    <View>This content is above the pattern…</View>
  </View>
  <hr />
  <ThemeProvider theme='wolkenkit'>
    <View orientation='centered' background='dark' style={{ width: '400px', height: '200px' }}>
      <Brand.Pattern />
      <View>This content is above the pattern…</View>
    </View>
  </ThemeProvider>
</View>
```

### PoweredBy

The `Brand.PoweredBy` component displays a teaser. Optionally, you may provide a product name using the `product` property.

```jsx
import { ThemeProvider, View } from 'thenativeweb-ux';
<View>
  <View background='dark'>
    <Brand.PoweredBy />
  </View>
  <hr />
  <ThemeProvider theme='wolkenkit'>
    <View background='dark'>
      <Brand.PoweredBy product='wolkenkit' />
    </View>
  </ThemeProvider>
</View>
```

### Made by

The `Brand.MadeBy` component displays whom the application was developed by. Switch the `color` property to `light` if you would like to place it on a `light` background.   

```jsx
import { View } from 'thenativeweb-ux';

<View>
  <View background='dark'>
    <Brand.MadeBy />
    <Brand.MadeBy size='md' />
    <Brand.MadeBy size='lg'/>
  </View>

  <Brand.MadeBy color='light' />
  <Brand.MadeBy color='light' size='md' />
  <Brand.MadeBy color='light' size='lg' />
</View>
```

Optionally, you may provide a partner using the `partner` property.

```jsx
import { ThemeProvider, View } from 'thenativeweb-ux';

<View>
  <ThemeProvider theme='wolkenkit'>
    <View background='dark'>
      <Brand.MadeBy partner={{ name: 'Intuity', href: 'https://www.intuity.de'}} />
    </View>
  </ThemeProvider>

  <Brand.MadeBy partner={{ name: 'Intuity', href: 'https://www.intuity.de'}}  color='light' />
</View>
```
