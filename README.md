# [SpinKit](http://tobiasahlin.com/spinkit/)

Simple loading spinners animated with CSS. See [demo](http://tobiasahlin.com/spinkit/).

SpinKit uses CSS animations to create smooth and easily customizable animations. The goal is not to offer a solution that works in every browser—if you're supporting browsers that haven't implemented the CSS `animation` property (e.g. IE9 and below), you'll want to detect support for the `animation` property, and implement a fallback (see below.)

## Usage

Grab the HTML and CSS for a spinner and include it in your project. Note that a hidden spinner (`opacity: 0`, or `visibility: hidden`) will still animate. After hiding a spinner, it's recommended to remove it from the DOM, set `display: none` or pause the animation by setting `animation-play-state: paused`.

### Implementing a fallback spinner

An easy way to provide a fallback animation is to check for support for the `animation` property, and replace the spinner with a GIF if it's not supported.

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

## Contribution

If you're submitting a new animation, make sure that it looks identical in [all browsers that support CSS animations](http://caniuse.com/css-animation).
