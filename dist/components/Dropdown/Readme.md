```javascript
initialState = { selectedValue: 'foo' };
<Dropdown options={[ { value: 'foo', label: 'Foo' }, { value: 'bar', label: 'Bar' } ]} value={ state.selectedValue } onChange={ value => setState({ selectedValue: value })} />
```

```javascript
initialState = { selectedValue: '' };
<Dropdown emptyLabel='Choose an option…' options={[ { value: 'foo', label: 'Foo' }, { value: 'bar', label: 'Bar' } ]} value={ state.selectedValue } onChange={ value => setState({ selectedValue: value })} />
```

## Sizes

```javascript
initialState = { selectedValue: '' };
<div style={{ display: 'flex', alignItems: 'center' }}>
  <Dropdown size='sm' emptyLabel='Small' options={[ { value: 'foo', label: 'Foo' }, { value: 'bar', label: 'Bar' } ]} value={ state.selectedValue } onChange={ value => setState({ selectedValue: value })} />
  <Dropdown emptyLabel='Default' options={[ { value: 'foo', label: 'Foo' }, { value: 'bar', label: 'Bar' } ]} value={ state.selectedValue } onChange={ value => setState({ selectedValue: value })} />
</div>
```
