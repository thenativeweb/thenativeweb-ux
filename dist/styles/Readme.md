`thenativeweb-ux` uses [JSS](https://cssinjs.org) and [classnames]() to style its components. If you create custom components, you can use same underlying technologies to create styles using JavaScript.

```jsx static
import { classNames, withStyles } from 'thenativeweb-ux';

const styles = theme => ({
  MyComponent: {
    display: 'block'
  },

  SizeLg: {
    fontSize: 48
  }
});

const MyComponent = function ({ classes, className, children, size }) {
  const componentClasses = classNames(classes.MyComponent, {
    [classes.SizeLg]: size === 'lg'
  }, className);

  return (
    <div className={ componentClasses }>
      { children }
    </div>
  );
};

export default withStyles(styles)(MyComponent);
```
