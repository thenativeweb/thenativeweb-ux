Use this component as a basic building block to create application layouts using the power of flexbox.

```javascript
<View itemsFlow='vertical' isCentered={ true } style={{ height: '200px' }}>
  <View style={{ background: 'gold' }}>View</View>
  <View style={{ background: 'orange' }}>View</View>
  <View style={{ background: 'green' }}>View</View>
</View>
```

```javascript
<View itemsFlow='vertical' style={{ height: '200px' }}>
  <View adjust='flex' style={{ background: 'gold' }}>View(adjust: flex)</View>
  <View style={{ background: 'orange' }}>View</View>
  <View style={{ background: 'green' }}>View</View>
</View>
```

```javascript
<View itemsFlow='horizontal'>
  <View adjust='flex' style={{ background: 'gold' }}>adjust:flex</View>
  <View style={{ background: 'orange' }}>adjust:auto</View>
  <View adjust='flex' style={{ background: 'green' }}>adjust:flex</View>
</View>
```

## Scrolling

```javascript
<View itemsFlow='vertical' isScrollable={ true } style={{  height: '200px'  }}>
  <View isRezisable={ false } style={{ height: 600, background: 'orange' }}>View</View>
  <View isRezisable={ false } style={{ height: 600, background: 'orange' }}>View</View>
</View>
```
