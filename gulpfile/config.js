// *****************************************************************
// Ox - A modular HTML, CSS and JS framework for developing responsive, grid-based projects.
//
// *****************************************************************

// Project configuration
var project     = 'ox'                    // Directory name for your project; be sure to change this!
  , src         = './src/'                // The raw files for your project; this is where you'll do all your work; don't delete this folder!
  , build       = './build/'              // The temporary files of your development build of your project; feel free to delete this anytime as it can be rebuilt.
  , dist        = './dist/'               // The production package that you'll upload to your server; feel free to delete this anytime as it can be rebuilt
  , assets      = './assets/'             // A staging area for assets that require processing before landing in the source folder.
  , bower       = './bower_components/'   // Bower packages
  , modules     = './node_modules/'       // npm packages
;

// Project settings
module.exports = {

  browsersync: {
    files: [build+'/**', '!'+build+'/**.map'] // Watch all files, except map files
  , notify: false                             // In-line notifications
  , open: false                               // Stops the browser window opening automatically
  , port: 8099                                // Port number for the live version of the site; default: 8099
  , proxy: project+'.dev'                     // Proxy defined to work with Virtual Hosts
  , watchOptions: {
      debounceDelay: 2000                     // A small delay when watching for file change events to avoid triggering too many reloads
    }
  },

  images: {
    build: {                                  // Copies images from `src` to `build`; does not optimise
      src: src+'**/*(*.png|*.jpg|*.jpeg|*.gif|*.svg)'
    , dest: build
    }
  , dist: {                                   // Optimises images in the `dist` folder
      src: [dist+'**/*(*.png|*.jpg|*.jpeg|*.gif|*.svg)']
    , imagemin: {
        optimizationLevel: 7
      , progressive: true
      , interlaced: true
      }
    , dest: dist
    }
  },

  scripts: {
    bundles: {                              // Bundles are defined by a name and an array of chunks (below) to concatenate.
      core: ['core']
    , vendor: ['vendor']
    , jquery: ['jquery']
    , modernizr: ['modernizr']
    }
  , chunks: {                               // Chunks are arrays of paths or globs matching a set of source files
      core: src+'js/core/*.js'
    , vendor: src+'js/vendor/*.js'
    , jquery: bower+'jquery/dist/jquery.js'
    , modernizr: bower+'modernizr/modernizr.js'
    }
  , dest: build+'js/'
  , lint: {
      src: [src+'js/**/*.js', '!'+src+'js/vendor/*.js']
    }
  , minify: {
      src: build+'js/**/*.js'
    , uglify: {} // Default options
    , dest: build+'js/'
    }
  },

  styles: {
    build: {
      src: src+'scss/**/*.scss'
    , dest: build+'/styles'
    }
  , autoprefixer: { browsers: ['> 3%', 'last 2 versions', 'ie 11', 'ios 6', 'android 4'] }
  , stylelint: {"rules": {
      "color-no-invalid-hex": true,
      "number-leading-zero": "always",
      "number-no-trailing-zeros": true,
      "number-zero-length-no-unit": true,
      "string-quotes": "double",
      "time-no-imperceptible": true,
      "value-no-vendor-prefix": true,
      "declaration-colon-space-before": "never",
      "declaration-bang-space-before": "always",
      "declaration-bang-space-after": "never",
      "declaration-block-semicolon-newline-after": "always-multi-line",
      "selector-list-comma-space-before": "never",
      "selector-pseudo-element-colon-notation": "double",
      "max-empty-lines": 5
    }}
  , minify: { safe: true }
  , libsass: { // Requires the libsass implementation of Sass
      includePaths: ['./src/scss', bower, modules]
    , precision: 6
    , onError: function(err) {
        return console.log(err);
      }
    }
  },

  theme: {
    lang: {
      src: src+'languages/**/*'
    , dest: build+'languages/'
    }
  , php: {
      src: src+'**/*.php'
    , dest: build
    }
  , html: {
      src: src+'**/*.html'
    , dest: build
    }
  , favicon: {
      src: src+'images/favicon/*(*.ico|*.jpg|*.json)'
    , dest: build+'images'
    }
  , font: {
      src: src+'fonts/**/*(*.eot|*.svg|*.ttf|*.woff|*.woff2)'
    , dest: build+'fonts'
    }
  },

  utils: {
    clean: [build+'**/.DS_Store']
  , wipe: [dist]
  , dist: {
      src: [build+'**/*', '!'+build+'**/*.map']
    , dest: dist
    }
  },

  watch: {
    src: {
      styles:       src+'scss/**/*.scss'
    , scripts:      src+'js/**/*.js'
    , images:       src+'**/*(*.png|*.jpg|*.jpeg|*.gif|*.svg)'
    , theme:        [src+'**/*(*.php|*.html)', src+'images/favicon/*(*.ico|*.jpg|*.json)', src+'fonts/**/*(*.eot|*.svg|*.ttf|*.woff|*.woff2)']
    }
  , watcher: 'browsersync'
  }
}
