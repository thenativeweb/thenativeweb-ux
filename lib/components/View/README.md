Use this component as a basic building block to create application layouts using the power of flexbox.

import { themes } from 'thenativeweb-ux';
```javascript
<View direction='vertical' contentPosition='centered' style={{ height: '200px' }}>
  <View style={{ background: 'gold' }}>View</View>
  <View style={{ background: 'orange' }}>View</View>
  <View style={{ background: 'green' }}>View</View>
</View>
```

```javascript
<View direction='vertical' style={{ height: '200px' }}>
  <View style={{ background: 'gold' }}>View</View>
  <View style={{ background: 'orange' }}>View</View>
  <View style={{ background: 'green' }}>View</View>
</View>
```

```javascript
<View direction='horizontal'>
  <View style={{ background: 'gold' }} adaptSpaceOf='parent'>expand</View>
  <View style={{ background: 'orange' }} adaptSpaceOf='content'>as little space as needed</View>
  <View style={{ background: 'green' }} adaptSpaceOf='parent'>expand</View>
</View>
```

## Scrolling

```javascript
<View direction='vertical' isScrollable={ true } style={{  height: '200px'  }}>
  <View style={{ height: 600, background: 'orange' }}>View</View>
  <View style={{ height: 600, background: 'green' }}>View</View>
</View>
```
