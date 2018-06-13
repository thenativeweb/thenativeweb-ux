Whenever you want to display text inside your application, use the Text component as it apply consistent fonts.

```javascript
<Text>This is medium text</Text>
<Text size='s'>This is small text</Text>
```

The `Text` component will also make sure that text will be abbreviated, if the parent component does not hold enough space…

```javascript
<div style={{ width: 220, overflow: 'hidden' }}><Text>This is text will be abbreviated use fonts provided from the theme</Text></div>
```
