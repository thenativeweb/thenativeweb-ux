The `Brand` component displays the *the native web* brand.

### Resizing the brand

The `Brand` is available in different sizes, `s`, `m`, and `l`. If you don't specify a size, it defaults to `m`.

```javascript
<Brand size='s' />
<hr />
<Brand size='m' />
<hr />
<Brand size='l' />
```

### Minimizing the brand

The `Brand` is available in a minimized version. To use it, set its `type` property to `minimal`.

```javascript
<Brand size='s' type='minimal' />
<hr />
<Brand size='m' type='minimal' />
<hr />
<Brand size='l' type='minimal' />
```

### Grayscaling the brand

The `Brand` is available in a grayscaled version. To use it, set its `color` property to `monochrome`. The grayscaled version is only available for the minimized `Brand`.

```javascript
<Brand size='s' type='minimal' color='monochrome' />
<hr />
<Brand size='m' type='minimal' color='monochrome' />
<hr />
<Brand size='l' type='minimal' color='monochrome' />
```

### Making the brand interactive

The `Brand` is available as an interactive element. To make it interactive, set its `isInteractive` property to `true`. The interactive version is only available for the minimized `Brand`.

```javascript
<Brand size='s' type='minimal' isInteractive={ true } />
<hr />
<Brand size='m' type='minimal' isInteractive={ true } />
<hr />
<Brand size='l' type='minimal' isInteractive={ true } />
<hr />
<Brand size='s' type='minimal' color='monochrome' isInteractive={ true } />
<hr />
<Brand size='m' type='minimal' color='monochrome' isInteractive={ true } />
<hr />
<Brand size='l' type='minimal' color='monochrome' isInteractive={ true } />
```

### PoweredBy

The `Brand.PoweredBy` component displays a teaser. Optionally, you may provide a product name using the `product` property.

```javascript
<View background='dark'>
  <Brand.PoweredBy />
</View>
<hr />
<ThemeProvider theme='wolkenkit'>
  <View background='dark'>
    <Brand.PoweredBy product='wolkenkit' />
  </View>
</ThemeProvider>
```

### Made by

The `Brand.MadeBy` component displays whom the application was developed by. Optionally, you may provide a partner using the `partner` property.

```javascript
<View background='dark'>
  <Brand.MadeBy />
  <hr />
  <Brand.MadeBy partner={{ name: 'Intuity', href: 'https://www.intuity.de'}} />
</View>

<hr />

<ThemeProvider theme='wolkenkit'>
  <View background='dark'>
    <Brand.MadeBy partner={{ name: 'Intuity', href: 'https://www.intuity.de'}} />
  </View>
</ThemeProvider>

```
