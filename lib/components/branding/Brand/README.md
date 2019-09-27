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
