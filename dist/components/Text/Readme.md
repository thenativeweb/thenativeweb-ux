Whenever you would like to display text inside your application, use the `Text` component as it applies consistent font styling.

```javascript
<Text>This is medium text</Text>
<Text size='s'>This is small text</Text>
```

The component will make sure that text will be abbreviated, if the parent component does not hold enough space…

```javascript
<div style={{ width: 215, overflow: 'hidden' }}><Text>This text will be abbreviated use fonts provided from the theme</Text></div>
```

This means by default text will not be wrapped into new lines. To change this default behaviour set the `breakLines` option to `true`.

```javascript
<div style={{ width: 215, overflow: 'hidden' }}><Text breakLines={ true }>This text will be abbreviated use fonts provided from the theme</Text></div>
```
