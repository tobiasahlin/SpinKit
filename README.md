# [SpinKit](http://tobiasahlin.com/spinkit/)

Simple loading spinners animated with CSS. See [demo](http://tobiasahlin.com/spinkit/).

SpinKit uses CSS animations to create smooth and easily customizable animations. The goal is not to offer a solution that works in every browser—if you're supporting browsers that haven't implemented the CSS `animation` property (e.g. IE9 and below), you'll want to detect support for the `animation` property, and implement a fallback (see below.)

## Usage

### Regular CSS

Grab the HTML and CSS for a spinner from the example files, or add SpinKit directly to your project with `bower`:

```bash
$ bower install spinkit
```

or npm:

```bash
$ npm install spinkit
```

### SCSS

If you're using SCSS in your project then you can include just the styles for the spinners that you want by adding the following to your main file:

```scss
@import '../bower_components/spinkit/scss/spinners/1-rotating-plane',
        '../bower_components/spinkit/scss/spinners/3-wave';
```

Please note that you currently need to use [autoprefixer](https://github.com/postcss/autoprefixer) in your project if you want to support all browsers. If you're compiling your SCSS with gulp you can use [gulp-autoprefixer](https://github.com/sindresorhus/gulp-autoprefixer) or if you use grunt then [grunt-autoprefixer](https://github.com/nDmitry/grunt-autoprefixer) is a good choice.

There are some variables that can be overridden if you use SCSS. The defaults are listed in [scss/_variables.scss](https://github.com/tobiasahlin/SpinKit/blob/master/scss/_variables.scss).

## Old web browser compatibility

With support for CSS animations in every current browser and [almost 90% of all browsers in use today](http://caniuse.com/#feat=css-animation), the need for GIF and JavaScript fallbacks is decreasing quickly. If you still need to support those last few then this section is for you.

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

## Contributing

See [CONTRIBUTING.md](https://github.com/tobiasahlin/SpinKit/blob/master/CONTRIBUTING.md) for details.
