```javascript
<div>
  <p>
    <Link href='/internal'>This an interal link</Link>
  </p>
  <p>
    <Link href='https://www.thenativeweb.io' isExternal={ true }>This an external link</Link>
  </p>
  <p>
    <Link href='https://www.thenativeweb.io' isExternal={ true } onClick={ event => event.preventDefault() }>This an external link</Link>
  </p>
</div>
```
