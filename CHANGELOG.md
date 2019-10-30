# 2.0.1

* Fixed: Chase spinner's HTML snippet now has the correct number of children

# 2.0.0

* New: Added examples.html, with an overview of all spinners
* New: Added a brand new chase spinner
* New: Added spinkit.min.css
* Fixed: `inline-block` is no longed used to position any spinners (decoupling spacing from any potential font effects)
* Changed: Most spinners now have more distinct and shorter names
* Changed: No positioning is now applied by default on any of the spinners (center the spinner with the utility class `sk-center`)
* Changed: All elements now only have one single class
* Changed: No more dependencies. gulp, npm, node, etc. is not required to build this project. There's nothing to build
* Changed: No more SCSS. All configuration is now done through CSS vars
* Fixed: All keyframe animations are now named after the elements/classes that are using them

# 1.2.5

* Fixed: Add folding cube spinner (11) to combined CSS file

# 1.2.4

* Fixed: Borked gulp script (#106)
* Fixed: Moved changes made in CSS, to SCSS

# 1.2.3

* Fixed: More exact (33% -> 33.33%) cube dimensions for cube grid spinner
* Fixed: Comment format for HTML inside CSS, for easier copy and pasting (removed * at the beginning of each row)

# 1.2.2

* Fixed: Use variable for spinner size (defaults to 40px)

# 1.2.1

* Fixed: Two spinners were slightly broken on Android
* Changed: Bumped default top and bottom margin to 40px

# 1.2.0

* Added: Folding cube spinner
* Fixed: Lowercase in package name

# 1.1.0

* Removed one spinner (circle with rotating circle, not polished enough)
* Cleaned up the CSS
* Added more SCSS variables to more easily customize spinners
* Introduced SCSS `@for` loops to more easily change timing of spinners
* Removed moot `version` property from bower.json


# 1.0.1

* Fix: Missed sass variables for background-color
