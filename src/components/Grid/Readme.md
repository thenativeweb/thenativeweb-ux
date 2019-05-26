The `Grid` component uses CSS grid layout to create flexible grids. By default it creates a 12 column layout.

```js
<Grid>
  <div>Colum 1</div>
  <div>Colum 2</div>
  <div>Colum 3</div>
  <div>Colum 4</div>
  <div>Colum 5</div>
  <div>Colum 6</div>
  <div>Colum 7</div>
  <div>Colum 8</div>
  <div>Colum 9</div>
  <div>Colum 10</div>
  <div>Colum 11</div>
  <div>Colum 12</div>
  <div>Colum 13</div>
</Grid>
```

If you want more control about the positioning of elements inside the `Grid` use the `Grid.Item` component.

```js
<Grid>
  <Grid.Item columnStart='1' columnEnd='7'>Colum from gap 1-7</Grid.Item>
  <Grid.Item columnStart='7' columnEnd='13'>Colum from gap 7-13</Grid.Item>
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
