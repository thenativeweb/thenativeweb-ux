In order to use the `Icon` component make sure to include the `Application.Services` component at the start of your page. This will include all the icons paths that the `Icon` component will use.

```javascript
<Icon name='heart' />
```

## Sizes

```javascript
<div>
  <Icon name='heart' size='xs' />
  <Icon name='heart' size='sm' />
  <Icon name='heart' size='md' />
  <Icon name='heart' size='lg' />
</div>
```

## Colors

```javascript
<div>
  <Icon name='heart' color='highlight' />
</div>
```

## Inline

```javascript
<div>
  <p style={{ fontSize: 20 }}>
    This is an icon embedded in a text <Icon name='heart' type='inline' /> it should align with the typo.
  </p>
  <p style={{ fontSize: 30 }}>
    This is an icon embedded in a text <Icon name='heart' type='inline' /> it should align with the typo.
  </p>
</div>
```

## Flex-centered

```javascript
<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'gray', width: 100, height: 100 }}>
  <Icon name='heart' type='flex-auto' />
</div>
```

## All icons

```javascript
<div>
  <p><Icon name='arrow-wide-west' type='inline' size='md' /> arrow-wide-west</p>
  <p><Icon name='checkmark' type='inline' size='md' /> checkmark</p>
  <p><Icon name='chevron' type='inline' size='md' /> chevron</p>
  <p><Icon name='close' type='inline' size='md' /> close</p>
  <p><Icon name='error' type='inline' size='md' /> error</p>
  <p><Icon name='expand' type='inline' size='md' /> expand</p>
  <p><Icon name='github' type='inline' size='md' /> github</p>
  <p><Icon name='heart' type='inline' size='md' /> heart</p>
  <p><Icon name='info' type='inline' size='md' /> info</p>
  <p><Icon name='menu' type='inline' size='md' /> menu</p>
  <p><Icon name='nav' type='inline' size='md' /> nav</p>
  <p><Icon name='stackoverflow' type='inline' size='md' /> stackoverflow</p>
  <p><Icon name='slack' type='inline' size='md' /> slack</p>
  <p><Icon name='twitter' type='inline' size='md' /> twitter</p>

  <p><Icon name='cloud-medium' type='inline' size='lg' /> cloud-medium</p>
  <p><Icon name='cqrs-medium' type='inline' size='lg' /> cqrs-medium</p>
  <p><Icon name='event-sourcing-medium' type='inline' size='lg' /> event-sourcing-medium</p>
  <p><Icon name='notebook-medium' type='inline' size='lg' /> notebook-medium</p>
  <p><Icon name='open-source-medium' type='inline' size='lg' /> open-source-medium</p>
  <p><Icon name='server-medium' type='inline' size='lg' /> server-medium</p>
  <p><Icon name='phone-medium' type='inline' size='lg' /> phone-medium</p>
  <p><Icon name='plus-medium' type='inline' size='lg' /> plus-medium</p>
  <p><Icon name='stackoverflow-medium' type='inline' size='lg' /> stackoverflow-medium</p>
</div>
