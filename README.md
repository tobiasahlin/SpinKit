[SpinKit](http://tobiasahlin.com/spinkit/)
============

Simple loading spinners animated with CSS. See [demo](http://tobiasahlin.com/spinkit/).

SpinKit uses CSS animations to create smooth and easily customizable animations. The goal is not to offer a solution that works in every browser—if you're supporting browsers that haven't implemented the CSS `animation` property (e.g. IE9 and below), you'll want to detect support for the `animation` property, and implement a fallback (see below.)

## Usage

Grab the HTML and CSS for a spinner and include it in your project. Note that a hidden spinner (`opacity: 0`, or `visibility: hidden`) will still animate. After hiding a spinner, it's recommended to remove it from the DOM, set `display: none` or pause the animation by setting `animation-play-state: paused`.

### Implementing a fallback spinner

Add a function that checks for CSS feature support:

#### Coffeescript

```coffee
browserSupportsCSSFeatureNamed: (featureName) ->
  featureName = featureName.toLowerCase()
  elm = document.createElement 'div'

  return true if (elm.style[featureName] != undefined)
      
  featureNameCapital = featureName.charAt(0).toUpperCase() + featureName.substr 1
  domPrefixes = 'Webkit Moz ms O'.split ' '

  for i in [0...domPrefixes.length]
    if (elm.style[domPrefixes[i] + featureNameCapital] != undefined)
      return true

  false
```

Use it to check for `animation` support:

```coffee
unless (@browserSupportsCSSFeatureNamed 'animation')
	# fallback…
```

#### Javascript

```javascript
function browserSupportsCSSFeatureNamed(featurename) {
  var elm = document.createElement('div');
  featurename = featurename.toLowerCase();

  if (elm.style[featurename] != undefined)
  	return true;
      
  var featurenameCapital = featurename.charAt(0).toUpperCase() + featurename.substr(1),
  	domPrefixes = 'Webkit Moz ms O'.split(' ');

  for (var i = 0; i < domPrefixes.length; i++) {
    if (elm.style[domPrefixes[i] + featurenameCapital] != undefined)
      return true;
  }

  return false;
```

Use it to check for `animation` support:

```javascript
if (!browserSupportsCSSFeatureNamed('animation')) {
	// fallback…
}
```

## Contribution

If you're submitting a new animation, make sure that it looks identical in [all browsers that support CSS animations](http://caniuse.com/css-animation).
