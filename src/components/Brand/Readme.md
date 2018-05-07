Use this component to display the tnw brand in an application.

### Sizes

```js
<div>
  <Brand size='s' />
  <hr />
  <Brand size='m' />
  <hr />
  <Brand size='l' />
</div>
```

### Minimal

```js
<div>
  <Brand size='s' type='minimal' />
  <hr />
  <Brand size='m' type='minimal' />
  <hr />
  <Brand size='l' type='minimal' />
  <hr />
  <Brand type='minimal' color='monochrome' />
  <hr />
  <Brand type='minimal' color='monochrome' isInteractive={ true } />
</div>
```

### Products

```js
<div>
  <Brand.Product name='console' />
  <hr />
  <Brand.Product name='console' size='l' />
  <hr />
  <ThemeProvider theme='wolkenkit'>
    <Brand.Product name='wolkenkit' size='l'  />
  </ThemeProvider>
  <hr />
  <ThemeProvider theme='wolkenkit'>
    <Brand.Product name='console' />
  </ThemeProvider>
</div>
```

### PoweredBy

```js
<div>
  <Brand.PoweredBy />
  <hr />
  <ThemeProvider theme='wolkenkit'>
    <Brand.PoweredBy product='wolkenkit' />
  </ThemeProvider>
</div>
```

### Made by

```js
<div>
  <Brand.MadeBy />
  <hr />
  <Brand.MadeBy partner={{ name: 'Intuity', href: 'https://www.intuity.de'}} />
  <hr />
  <ThemeProvider theme='wolkenkit'>
    <Brand.MadeBy partner={{ name: 'Intuity', href: 'https://www.intuity.de'}} />
  </ThemeProvider>
</div>
```
