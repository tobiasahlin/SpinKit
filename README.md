# [SpinKit](http://tobiasahlin.com/spinkit/)

Simple loading spinners animated with CSS. See [demo](http://tobiasahlin.com/spinkit/). SpinKit only uses (`transform` and `opacity`) CSS animations to create smooth and easily customizable animations.

## Usage

- Add `spinkit.css` or `spinkit.min.css` to your project (or copy-paste the CSS that you need for your spinner—there are no dependencies between spinners, no shared classes, and no shared animations, etc, so it should be fairly straight-forward to extract only the code that you need)
- Add a spinner to your project by copy-pasting HTML from `spinkit.css` or `examples.html`
- Configure the spinner through the CSS variables `--sk-size` (spinner width & height) and `--sk-color` (spinner color). If you need broader browser support, remove the CSS variables.

## Spinners

Given that you have included `spinkit.min.css` in your project, these snippets will produce the different spinners:

### Rotating plane

```html
<div class="sk-rotating-plane"></div>
```

### Double Bounce

```html
<div class="sk-double-bounce">
  <div class="sk-double-bounce-circle"></div>
  <div class="sk-double-bounce-circle"></div>
</div>
```

### Wave

```html
<div class="sk-wave">
  <div class="sk-wave-rect"></div>
  <div class="sk-wave-rect"></div>
  <div class="sk-wave-rect"></div>
  <div class="sk-wave-rect"></div>
  <div class="sk-wave-rect"></div>
</div>
 ```

### Wandering Cubes

```html
<div class="sk-wandering-cubes">
  <div class="sk-wandering-cubes-cube"></div>
  <div class="sk-wandering-cubes-cube"></div>
</div>
```

### Pulse

```html
<div class="sk-pulse"></div>
```

### Chasing Dots (not chase)

```html
<div class="sk-chasing-dots">
  <div class="sk-chasing-dots-dot"></div>
  <div class="sk-chasing-dots-dot"></div>
</div>
```

### Three Bounce

```html
<div class="sk-three-bounce">
  <div class="sk-three-bounce-circle"></div>
  <div class="sk-three-bounce-circle"></div>
  <div class="sk-three-bounce-circle"></div>
</div>
```

### Circles

```html
<div class="sk-circles">
  <div class="sk-circles-circle"></div>
  <div class="sk-circles-circle"></div>
  <div class="sk-circles-circle"></div>
  <div class="sk-circles-circle"></div>
  <div class="sk-circles-circle"></div>
  <div class="sk-circles-circle"></div>
  <div class="sk-circles-circle"></div>
  <div class="sk-circles-circle"></div>
  <div class="sk-circles-circle"></div>
  <div class="sk-circles-circle"></div>
  <div class="sk-circles-circle"></div>
  <div class="sk-circles-circle"></div>
</div>
```

### Grid

```html
<div class="sk-grid">
  <div class="sk-grid-cube"></div>
  <div class="sk-grid-cube"></div>
  <div class="sk-grid-cube"></div>
  <div class="sk-grid-cube"></div>
  <div class="sk-grid-cube"></div>
  <div class="sk-grid-cube"></div>
  <div class="sk-grid-cube"></div>
  <div class="sk-grid-cube"></div>
  <div class="sk-grid-cube"></div>
</div>
```

### Circles Fade

```html
<div class="sk-circles-fade">
  <div class="sk-circles-fade-circle"></div>
  <div class="sk-circles-fade-circle"></div>
  <div class="sk-circles-fade-circle"></div>
  <div class="sk-circles-fade-circle"></div>
  <div class="sk-circles-fade-circle"></div>
  <div class="sk-circles-fade-circle"></div>
  <div class="sk-circles-fade-circle"></div>
  <div class="sk-circles-fade-circle"></div>
  <div class="sk-circles-fade-circle"></div>
  <div class="sk-circles-fade-circle"></div>
  <div class="sk-circles-fade-circle"></div>
  <div class="sk-circles-fade-circle"></div>
</div>
```

### Fold

```html
<div class="sk-fold">
  <div class="sk-fold-cube"></div>
  <div class="sk-fold-cube"></div>
  <div class="sk-fold-cube"></div>
  <div class="sk-fold-cube"></div>
</div>
```

### Chase

```html
<div class="sk-chase">
  <div class="sk-chase-dot"></div>
  <div class="sk-chase-dot"></div>
  <div class="sk-chase-dot"></div>
  <div class="sk-chase-dot"></div>
  <div class="sk-chase-dot"></div>
  <div class="sk-chase-dot"></div>
  <div class="sk-chase-dot"></div>
  <div class="sk-chase-dot"></div>
</div>
```

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
