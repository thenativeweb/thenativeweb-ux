Whenever you would like to display text inside your application, use the `Text` component as it applies consistent font styling.

```javascript
<Text>This is medium text</Text>
<Text size='s'>This is small text</Text>
```

The component will also make sure that text will be abbreviated, if the parent component does not hold enough space…

```javascript
<div style={{ width: 215, overflow: 'hidden' }}><Text>This text will be abbreviated use fonts provided from the theme</Text></div>
```
