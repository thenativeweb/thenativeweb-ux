The `Grid` component uses CSS grid layout to create flexible grids. By default it creates a 12 column layout. Its children will automatically be placed in  its columns and start from new once all 12 columns have been filled.

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

If you want to layout and odd number of items set the `columns` property to `15`.

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

If you want more control about the positioning of elements inside the `Grid` use the `Grid.Item` component.

### columnSpan

The simplest way to span across multiple columns is to specify the number of columns the item should span across using the `columnSpan` property:

```js
<Grid>
  <Grid.Item columnSpan='6'>Column from gap 1-7</Grid.Item>
  <Grid.Item columnSpan='6'>Column from gap 7-13</Grid.Item>
  <Grid.Item columnSpan='12'>Column from gap 1-13</Grid.Item>
</Grid>
```

If you want to span across different columns depending on the size of your viewport, you can also pass a size object:

```js
<Grid>
  <Grid.Item columnSpan={{ sm: 3, md: 6, lg: 4 }}>Spans 3 columns on small, 6 on a medium and 4 columns on large devices…</Grid.Item>
  <Grid.Item columnSpan={{ sm: 3, md: 6, lg: 4 }}>Spans 3 columns on small, 6 on a medium and 4 columns on large devices…</Grid.Item>
  <Grid.Item columnSpan={{ sm: 3, md: 6, lg: 4 }}>Spans 3 columns on small, 6 on a medium and 4 columns on large devices…</Grid.Item>
</Grid>
```

### columnStart and columnEnd

Using the `columnStart` property you can set . If you want to span across mulitple columns, you can use the `columnEnd` property to set a specific column to end with.

```js
<Grid>
  <Grid.Item columnStart='1' columnEnd='7'>Column from gap 1-7</Grid.Item>
  <Grid.Item columnStart='7' columnEnd='13'>Column from gap 7-13</Grid.Item>
  <Grid.Item columnStart='1' columnEnd='13'>Column from gap 1-13</Grid.Item>
  <Grid.Item columnStart='10' columnEnd='13'>Fills only the last three columns</Grid.Item>
</Grid>
```
