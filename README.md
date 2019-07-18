# [SpinKit](http://tobiasahlin.com/spinkit/)

This repo was birthed from an attempt to extend the spinkit repo by [@tobiasahlin](https://github.com/tobiasahlin). I used the spinkit many times and have now decided to extend this repo with new spinners that fit the idea of the "spinkit" project (my opinion of it). 

## Usage

### Javascript
Basic setup that loads a default spinner to the body
```javascript
var spinkit = new SpinKit('body');
spinkit.show();
```

To specify a spinkit style add as the second parameter to the spinkit call.
```javascript
var spinkit = new SpinKit('body', 'cubeGrid');
spinkit.show();
```
Refer to the examples to view all supported spinkits

To remove a spinkit from a page simply call the destroy method
```javascript
var spinkit = new SpinKit('body');
spinkit.show();

//destroy the spinkit
spinkit.destroy();
```

### Using jQuery
Basic setup that loads a default spinner to the body
```javascript
$('body').spinkit();
```

To specify a spinkit style add as the second parameter to the spinkit call.
```javascript
$('body').spinkit({ 'spinner': 'cubeGrid' });
```
Refer to the examples to view all supported spinkits

To remove a spinkit from a page simply call the destroy method
```javascript
$('body').spinkit();

//destroy the spinkit
$('body').spinkit.destroy();
```

### Using SpinKit Extended
Spinkit can also add a page overlay that disables interaction with the page. The default styles for this overlay can be found in the spinkit.extended.css file. You can alter this file to add your own overlay colours and styles for any elements that may be added to the overlay.
If your page has elements that use z-index, the overlay will need to be adjusted to be at the highest z-index to disable interaction with the elements.

**NB.** Once an overlay is used, the DOM selector supplied is ignored and the body is used.

#### Javascript
```javascript
spinkit.setOverlay(true);
```
This can be called before or after .show() is used. If called before the spinkit is prepped to be added to an overlay. If called after, an overlay is added and the spinkit is migrated to the overlay.

#### jQuery
```javascript
$('body').spinkit({ 'spinner': 'cubeGrid', 'useOverlay': true });
```

These functions require no additional files to be called. The extended spinkit is simply a default styling added to the overlay.

## Web browser compatibility

CSS animations are supported in the latest version of all major browsers, and browsers with `animation` support make up [almost 90% of all usage](http://caniuse.com/#feat=css-animation). If you need to support IE9 and below, however, this section is for you.

### Implementing a fallback spinner

How do you know if you need to provide a fallback? You can easily check for animation support with [Modernizr](http://modernizr.com), or manually check for the `animation` property, and replace the spinner with a GIF if it's not supported:

```javascript
function browserSupportsCSSProperty(propertyName) {
  var elm = document.createElement('div');
  propertyName = propertyName.toLowerCase();

  if (elm.style[propertyName] != undefined)
    return true;

  var propertyNameCapital = propertyName.charAt(0).toUpperCase() + propertyName.substr(1),
    domPrefixes = 'Webkit Moz ms O'.split(' ');

  for (var i = 0; i < domPrefixes.length; i++) {
    if (elm.style[domPrefixes[i] + propertyNameCapital] != undefined)
      return true;
  }

  return false;
}
```

Use it to check for `animation` support:

```javascript
if (!browserSupportsCSSProperty('animation')) {
  // fallback…
}
```

## Contributing

Contributing to spinkit animations see [CONTRIBUTING.md](https://github.com/tobiasahlin/SpinKit/blob/master/CONTRIBUTING.md) for details.

Contributing to javascript enhancements see [CONTRIBUTING.md](https://github.com/cr1x56/SpinKit/blob/master/CONTRIBUTING.md) for details

## Acknowledgements

Tobias' Spinkit - http://tobiasahlin.com/spinkit
Beaulticircle - https://codepen.io/Roosa/pen/yOQrdg
