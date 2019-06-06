The `Grid` component uses the CSS grid layout to create flexible grids. By default it creates a 12-column layout. Each child will automatically be placed inside the next column. Once all the 12 columns have been filled, the next item will be placed inside a new row but within the first column.

```js
<Grid>
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
  <div>Column 4</div>
  <div>Column 5</div>
  <div>Column 6</div>
  <div>Column 7</div>
  <div>Column 8</div>
  <div>Column 9</div>
  <div>Column 10</div>
  <div>Column 11</div>
  <div>Column 12</div>
  <div>Column 1</div>
</Grid>
```

## Odd column count

If you want to layout an odd number of items, set the `columns` property to `15`.

```js
<Grid columns='15'>
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
  <div>Column 4</div>
  <div>Column 5</div>
  <div>Column 6</div>
  <div>Column 7</div>
  <div>Column 8</div>
  <div>Column 9</div>
  <div>Column 10</div>
  <div>Column 11</div>
  <div>Column 12</div>
  <div>Column 13</div>
  <div>Column 14</div>
  <div>Column 15</div>
  <div>Column 1</div>
</Grid>
```

## Grid.Item

If you need more control when positioning elements inside a `Grid` use the `Grid.Item` component.

### columnSpan

To span an element across multiple columns, set the `columnSpan` property:

```js
<Grid>
  <Grid.Item columnSpan='6'>Column from gap 1-7</Grid.Item>
  <Grid.Item columnSpan='6'>Column from gap 7-13</Grid.Item>
  <Grid.Item columnSpan='12'>Column from gap 1-13</Grid.Item>
</Grid>
```

It is possible to provide multiple `columSpan` values depending on the size of the viewport:

```js
<Grid>
  <Grid.Item columnSpan={{ sm: 3, md: 6, lg: 4 }}>Spans 3 columns on small, 6 on a medium and 4 columns on large devices…</Grid.Item>
  <Grid.Item columnSpan={{ sm: 3, md: 6, lg: 4 }}>Spans 3 columns on small, 6 on a medium and 4 columns on large devices…</Grid.Item>
  <Grid.Item columnSpan={{ sm: 3, md: 6, lg: 4 }}>Spans 3 columns on small, 6 on a medium and 4 columns on large devices…</Grid.Item>
</Grid>
```

### columnStart and columnEnd

Instead of using `columnSpan` you can set the `columnStart` property to specifiy in which column an element should be start in. Use the `columnEnd` property to set a specific column to end with.

```js
<Grid>
  <Grid.Item columnStart='1' columnEnd='7'>Column from gap 1-7</Grid.Item>
  <Grid.Item columnStart='7' columnEnd='13'>Column from gap 7-13</Grid.Item>
  <Grid.Item columnStart='1' columnEnd='13'>Column from gap 1-13</Grid.Item>
  <Grid.Item columnStart='10' columnEnd='13'>Fills only the last three columns</Grid.Item>
</Grid>
```

Again, it is possible to provide multiple `columnStart` and `columnEnd` values depending on the size of the viewport:


```js
<Grid>
  <Grid.Item columnStart={{ sm: 1, lg: 4 }} columnEnd={{ sm: 13, lg: 10 }}>Spans across all 12 columns on small devices and from colum 4-10 on large devices.</Grid.Item>
</Grid>
```
