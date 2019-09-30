# Viewport Watcher

Viewport Watcher is a thin wrapper around the [IntersectionObserver API](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver) which makes it easier to achieve its most common task: monitor when elements enter and exit the viewport.

Simply pass an element into the `ViewportWatcher` constructor and a CSS class will be toggled on the element when it enters the viewport. Passing in a `NodeList` or `Array` of elements into the constructor is also supported.

``` js
const elements = document.querySelectorAll('.element');
const viewportWatcher = new ViewportWatcher(elements);
```

## Options

- `inViewportClass` - The CSS class to apply to elements when they enter the viewport (default: `'in-viewport'`).
- `once` - Whether to stop observing elements the first time they enter the viewport (default: `true`).
- `rootMargin` - The `rootMargin` property on the [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver#Parameters) (default: `'0px 0px 0px 0px'`).
- `threshold` - The `threshold` property on the [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver#Parameters) (default: `0`).

``` js
const elements = document.querySelectorAll('.element');
const viewportWatcher = new ViewportWatcher(elements, {
	inViewportClass: 'is-visible',
	once: false,
	rootMargin: '-10%',
	threshold: 1,
});
```

## Adding and Removing Elements

``` js
const elements = document.querySelectorAll('.element');
const viewportWatcher = new ViewportWatcher(elements);

// Add some element.
const someElement = document.querySelector('.some-element');
viewportWatcher.add(someElement);

// Add other elements.
const otherElements = document.querySelectorAll('.other-element');
viewportWatcher.add(otherElements);

// Remove some element.
viewportWatcher.remove(someElement);

// Remove other elements.
viewportWatcher.remove(otherElements);
```
