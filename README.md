# [SpinKit](http://tobiasahlin.com/spinkit/)

Simple loading spinners animated with CSS. See [demo](http://tobiasahlin.com/spinkit/). SpinKit only uses (`transform` and `opacity`) CSS animations to create smooth and easily customizable animations.

## Usage

- Add `spinkit.css` or `spinkit.min.css` to your project (or copy-paste the CSS that you need for your spinner—there are no dependencies between spinners, no shared classes, and no shared animations, etc, so it should be fairly straight-forward to extract only the code that you need)
- Add a spinner to your project by copy-pasting HTML from `spinkit.css` or `examples.html`
- Add the `sk-center` utility class to the spinner to center it (it sets `margin` to `auto`)
- By default, the `width` and `height` of all spinners are set to `40px`. `background-color` is set to `#333`.
- Configure the spinner by overwriting the CSS variables, primarily `--sk-size` (spinner width & height) and `--sk-color` (spinner color). If you need broader browser support, remove the CSS variables.

You can include SpinKit to your project with `bower`:

```bash
$ bower install spinkit
```

or npm:

```bash
$ npm install spinkit
```

## Spinners

Given that you have included `spinkit.min.css` in your project, these snippets will produce the different spinners:

### Plane

```html
<div class="sk-plane"></div>
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
</div>
```

### Bounce

```html
<div class="sk-bounce">
  <div class="sk-bounce-dot"></div>
  <div class="sk-bounce-dot"></div>
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

### Pulse

```html
<div class="sk-pulse"></div>
```

### Flow

```html
<div class="sk-flow">
  <div class="sk-flow-dot"></div>
  <div class="sk-flow-dot"></div>
  <div class="sk-flow-dot"></div>
</div>
```

### Swing

```html
<div class="sk-swing">
  <div class="sk-swing-dot"></div>
  <div class="sk-swing-dot"></div>
</div>
```

### Circle

```html
<div class="sk-circle">
  <div class="sk-circle-dot"></div>
  <div class="sk-circle-dot"></div>
  <div class="sk-circle-dot"></div>
  <div class="sk-circle-dot"></div>
  <div class="sk-circle-dot"></div>
  <div class="sk-circle-dot"></div>
  <div class="sk-circle-dot"></div>
  <div class="sk-circle-dot"></div>
  <div class="sk-circle-dot"></div>
  <div class="sk-circle-dot"></div>
  <div class="sk-circle-dot"></div>
  <div class="sk-circle-dot"></div>
</div>
```

### Circle Fade

```html
<div class="sk-circle-fade">
  <div class="sk-circle-fade-dot"></div>
  <div class="sk-circle-fade-dot"></div>
  <div class="sk-circle-fade-dot"></div>
  <div class="sk-circle-fade-dot"></div>
  <div class="sk-circle-fade-dot"></div>
  <div class="sk-circle-fade-dot"></div>
  <div class="sk-circle-fade-dot"></div>
  <div class="sk-circle-fade-dot"></div>
  <div class="sk-circle-fade-dot"></div>
  <div class="sk-circle-fade-dot"></div>
  <div class="sk-circle-fade-dot"></div>
  <div class="sk-circle-fade-dot"></div>
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

### Fold

```html
<div class="sk-fold">
  <div class="sk-fold-cube"></div>
  <div class="sk-fold-cube"></div>
  <div class="sk-fold-cube"></div>
  <div class="sk-fold-cube"></div>
</div>
```

### Wander

```html
<div class="sk-wander">
  <div class="sk-wander-cube"></div>
  <div class="sk-wander-cube"></div>
  <div class="sk-wander-cube"></div>
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
