`thenativeweb-ux` uses [JSS](https://cssinjs.org) and [classnames](https://github.com/JedWatson/classnames) to style its components. If you create custom components, you can use same underlying technologies to create styles using JavaScript.

```jsx static
import { classNames, createUseStyles } from 'thenativeweb-ux';

const useStyles = createUseStyles(theme => ({
  MyComponent: {
    display: 'block'
  },

  SizeLg: {
    fontSize: 48
  }
}));

const MyComponent = function ({ className, children, size }) {
  const classes = useStyles();
  const componentClasses = classNames(classes.MyComponent, {
    [classes.SizeLg]: size === 'lg'
  }, className);

  return (
    <div className={ componentClasses }>
      { children }
    </div>
  );
};

export { MyComponent };
```
