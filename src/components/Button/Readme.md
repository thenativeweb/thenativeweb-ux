```javascript
<div>
  <Button onClick={ () => alert('clicked') }>Click me!</Button>
</div>
```

## Adjusting to flex container

```javascript
<div style={{ display: 'flex' }}>
  <Button adjust='flex'>flex</Button>
  <Button adjust='auto'>auto</Button>
  <Button adjust='auto'>auto</Button>
</div>
```

## Sizes

```javascript
<div style={{ display: 'flex', alignItems: 'center' }}>
  <Button size='s'>Small Button</Button>
  <Button>Default Button</Button>
</div>
```

## Primary and subtle

```javascript
<div style={{ display: 'flex' }}>
  <Button isSubtle={ true } isPrimary={ true } icon='heart'>Subtle button</Button>
  <Button isPrimary={ false }>Cancel</Button>
  <Button isPrimary={ true }>Primary button</Button>
</div>
```

## Hints

Hints can be used for displaying keyboard shortcuts.

```javascript
<div>
  <Button>Small Button <Button.Hint>[Ctrl+Enter]</Button.Hint></Button>
</div>
```

## Setting button types explicitly

If you use the button inside a form you may want to control the type of your button. By default the type `button` will be used. If you create a primary button the type will be set to `submit` automatically.

```javascript
<div>
  <Button isPrimary={ true } type='button'>Primary button that wont submit</Button>
  <Button type='submit'>Submit</Button>
  <Button type='reset'>Reset</Button>
</div>
```

## Icons

Hints can be used for displaying keyboard shortcuts.

```javascript
<div>
  <Button icon='heart'>Button with icon</Button>
  <Button icon='heart' />
</div>
```
