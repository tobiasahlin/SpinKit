# [SpinKit](http://tobiasahlin.com/spinkit/)

Simple loading spinners animated with CSS. See [demo](http://tobiasahlin.com/spinkit/). SpinKit uses hardware accelerated (`translate` and `opacity`) CSS animations to create smooth and easily customizable animations. 

## Usage

using overlay overrides the element the spinner is set to and creates a page overlay to be used. The spinkit manages this overlay by destroying and creating the element within the DOM. If this is not the desired behaviour simply use the DOM element indicator and manage the show and hide in your code

### Javascript (Vanilla)

### Using jQuery


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