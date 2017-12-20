```js
<Button onClick={ () => alert('clicked') }>Click me!</Button>
```

## Adjusting to flex container

```js
<div>
  <div style={{ display: 'flex' }}>
    <Button adjust='flex'>flex</Button>
    <Button adjust='auto'>auto</Button>
    <Button adjust='auto'>auto</Button>
  </div>
</div>
```

## Sizes

```js
<div style={{ display: 'flex', alignItems: 'center' }}>
  <Button size='s'>Small Button</Button>
  <Button>Default Button</Button>
</div>
```

## Primary

```js
<div style={{ display: 'flex' }}>
  <Button isPrimary={ false }>Cancel</Button>
  <Button isPrimary={ true }>Primary button</Button>
</div>
```

## Hints

Hints can be used for displaying keyboard shortcuts.

```js
<Button>Small Button <Button.Hint>[Ctrl+Enter]</Button.Hint></Button>
```

## Setting button types explicitly

If you use the button inside a form you may want to control the type of your button. By default the type `button` will be used. If you create a primary button the type will be set to `submit` automatically.

```js
<div>
  <Button isPrimary={ true } type='button'>Primary button that wont submit</Button>
  <Button type='submit'>Submit</Button>
  <Button type='reset'>Reset</Button>
</div>
```
