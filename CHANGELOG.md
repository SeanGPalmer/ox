# Ox Changelog

### 0.2.13 (11 January, 2017)

_GULP_
* Updated style minification to ignore autoprefixer

_SCSS_
* Fixed elements links in _core.scss

### 0.2.12 (04 November, 2016)

_SCSS_
* Renamed modules folder to elements
* Fixed erroneous class

### 0.2.11 (23 August, 2016)

_SCSS_
* Added missing keyframe mixin

### 0.2.10 (23 August, 2016)

_JS_
* Added FOUC fix

_SCSS_
* Fixed animation keyframes

### 0.2.9 (15 August, 2016)

_NPM_
* Amended installation instructions

_HTML_
* Streamlined `<head>` data

### 0.2.8 (20 June, 2016)

_JS_
* Removed non-generic scripts
* Updated modernizr

_SCSS_
* Removed unnecessary keyframe mixin (utilise autoprefixer instead)
* Created modular variable partials
* Removed reboot and normalize and created custom 'Foundation' reset
* Trimmed helpers partial
* Updated typography partial
* Began conforming partials to new coding style guide
* Renamed several partials
* Re-added tint/shade mixins

### 0.2.7 (23 May, 2016)

_GULP_
* Moved modernizr from bower into gulp

_JS_
* Added ustom build of modernizr

_HTML_
* Fixed schema markup error

_SCSS_
* Added matte colours into _colours.scss
* Changed default heading styles
* Amended <figure> styles

### 0.2.6 (21 April, 2016)

_HTML_
* Amended meta info
* Added FOUC example

_SCSS_
* Amended font folder location
* Added link-button fallback

### 0.2.5 (05 April, 2016)

_SCSS_
* Fixed critical issue with normalize

### 0.2.4 (22 March, 2016)

_NPM_
* Fixed theme task to include fonts and favicons

_SCSS_
* Removed duplicate deck
* Fixed 'Infinity' issue with grid offset
* Adjust button white-space
* Updated normalize to v4

### 0.2.3 (11 March, 2016)

_GENERAL_
* Updated CSS references to SCSS

_SCSS_
* Further bug fixing

### 0.2.2 (11 March, 2016)

_NPM_
* Fixed sass error logging
* Updated to latest version of stylelint

_SCSS_
* Bug fixing

### 0.2.1 (11 March, 2016)

_NPM_
* Fixed styles destination folders
* Fixed theme tasks

_HTML_
* Update index.html

_SCSS_
* Completely rework hamburger partial
* Reset select style
* Changed responsive grid system

_JQUERY_
* Adjusted responsiveChecker

### 0.2.0 (5 March, 2016)

_BOWER_
* Stripped down to just jQuery and Modernizr

_NPM_
* Reworked gulp to modular approach
* Added scss linting
* Added core bundling
* Updated dependencies

_SCSS_
* Removed requirement for Compass
* Ensured partials adhered to linting
* Updated variety of styles
* Added variable for font/image location


### 0.1.3 (9 February, 2016)

_BOWER_
* Disabled normalize.css on default

_HTML_
* Added logo, hamburger, generic navigation and mobile navigation

_SCSS_
* Changed header comment style on all partials, so they're removed in minification
* Added reboot partial and refactored elements into it
* Moved breaker and hero into components
* Added width fix for .card__deck
* Added optimised dropshadow for .card
* Refactored navigation
* Added default styles for text in alerts
* Removed inline-block mixin
* Removed compass reliance for transition
* Added forms to label
* Added figure to images
* Reorganised helpers

_JQUERY_
* Added hamburger click function
* Added mobile detach function
* Disable functions by default


### 0.1.2 (27 December, 2015)

_SCSS_
* Amended coverer-link to a lower z-index

_JQUERY_
* Bundled fitvids.js


### 0.1.1 (7 December, 2015)

_NPM_
* Updated browser-sync task
* Fixed distribution task

_JQUERY_
* Fixed responsiveChecker validation

_SCSS_
* Updated typography base sizes
* Added _external partial to contain common styles
* Added styles to select elements


### 0.1.0 (10 November, 2015)

* Initial commit
