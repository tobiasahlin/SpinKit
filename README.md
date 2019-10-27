# [SpinKit](http://tobiasahlin.com/spinkit/)

Simple loading spinners animated with CSS. See [demo](http://tobiasahlin.com/spinkit/). SpinKit only uses (`transform` and `opacity`) CSS animations to create smooth and easily customizable animations.

## Usage

- Add `spinkit.css` or `spinkit.min.css` to your project
- Add a spinner to your project by copy-pasting HTML from `spinkit.css` or `examples.html`
- Configure the spinner through the CSS variables `--sk-size` (spinner width & height) and `--sk-color` (spinner color)

## Web browser compatibility

SpinKit uses CSS animations and variables:

- CSS keyframes animations [are at +96.5% global support](http://caniuse.com/#feat=css-animation)
- CSS variables [are at +91.8% global support](https://caniuse.com/#feat=css-variables)

### Implementing a fallback spinner

How do you know if you need to provide a fallback? You can check for animation support with [Modernizr](http://modernizr.com), or manually check for the `animation` property, and replace the spinner with a GIF if it's not supported:

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

See [CONTRIBUTING.md](https://github.com/tobiasahlin/SpinKit/blob/master/CONTRIBUTING.md) for details.
