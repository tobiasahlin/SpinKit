# Pull Request Guidelines

If you have something you'd like to share with the community we'd be happy to help you out with contributing. Before you create your PR please read and understand the following. :heart:

## Code

- Keep it lean. Please refrain from adding libraries or dependencies, unless you really need to.
- If you're submitting a new animation for review, make sure that the spinner looks identical in [all browsers that support CSS animations](http://caniuse.com/css-animation).
- Use the `--sk-size` and `--sk-color` CSS variables in your spinners, to that it can be configured globally along with all other spinners.

## Style

Following the same code style makes all of our lives a bit easier, currently we ask that you use:

- 2 spaces for indenting
- No trailing spaces
- One trailing newline at the end of each file

If you use Sublime Text (or any other editor with the same capability) you can install EditorConfig (through [Sublime Package Control](https://sublime.wbond.net/installation)), which will pick up our project's `.editorconfig` and make your file conform to above rules on each save.
