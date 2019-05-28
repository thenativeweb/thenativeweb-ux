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

## Grid.Item 

If you want more control about the positioning of elements inside the `Grid` use the `Grid.Item` component. Using the `columnStart` property you can set . If you want to span across mulitple columns, you can use the `columnEnd` property to set a specific column to end with. Please note that if you want to  

```js
<Grid>
  <Grid.Item columnStart='1' columnEnd='7'>Colum from gap 1-7</Grid.Item>
  <Grid.Item columnStart='7' columnEnd='13'>Colum from gap 7-13</Grid.Item>
  <Grid.Item columnStart='1' columnEnd='13'>Fills all columns</Grid.Item>
  <Grid.Item columnStart='10' columnEnd='13'>Fills only the last three columns</Grid.Item>
</Grid>
```

If you want position elements inside pass a size object to properties like `columnStart`, e.g. `columnEnd`.

```js
<Grid>
  <Grid.Item columnSpan={{ sm: 3, md: 6, lg: 4 }}>Spans 3 columns on small, 6 on a medium and 4 columns on large devices…</Grid.Item>
  <Grid.Item columnSpan={{ sm: 3, md: 6, lg: 4 }}>Spans 3 columns on small, 6 on a medium and 4 columns on large devices…</Grid.Item>
  <Grid.Item columnSpan={{ sm: 3, md: 6, lg: 4 }}>Spans 3 columns on small, 6 on a medium and 4 columns on large devices…</Grid.Item>
</Grid>
```
