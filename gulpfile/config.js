// *****************************************************************
// Ox - A modular HTML, CSS and JS framework for developing responsive, grid-based projects.
//
// *****************************************************************

// Project configuration
var project     = 'ox'                    // Directory name for your project; be sure to change this!
  , src         = './src/'                // The raw files for your project; this is where you'll do all your work; don't delete this folder!
  , build       = './build/'              // The temporary files of your development build of your project; feel free to delete this anytime as it can be rebuilt.
  , dist        = './dist/'               // The production package that you'll upload to your server; feel free to delete this anytime as it can be rebuilt.
  , assets      = 'assets/'             // The assets folder.
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
      core: src+assets+'js/core/*.js'
    , vendor: src+assets+'js/vendor/*.js'
    , modernizr: src+assets+'js/modernizr/*.js'
    , jquery: bower+'jquery/dist/jquery.js'
    }
  , dest: build+assets+'js/'
  , lint: {
      src: [src+assets+'js/**/*.js', '!'+src+assets+'js/vendor/*.js', '!'+src+assets+'js/modernizr/*.js']
    }
  , minify: {
      src: build+assets+'js/**/*.js'
    , uglify: {} // Default options
    , dest: build+assets+'js/'
    }
  },

  styles: {
    build: {
      src: src+assets+'scss/**/*.scss'
    , dest: build+assets+'/styles'
    }
  , autoprefixer: { browsers: ['> 3%', 'last 2 versions', 'ie 11', 'ios >= 6', 'android >= 4', 'safari >= 8'] }
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
  , minify: {
      safe: true,
      autoprefixer: false
  }
  , libsass: { // Requires the libsass implementation of Sass
      includePaths: [src+assets+'scss', bower, modules]
    , precision: 6
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
      src: src+assets+'images/favicon/*(*.ico|*.jpg|*.json)'
    , dest: build+assets+'images'
    }
  , font: {
      src: src+assets+'fonts/**/*(*.eot|*.svg|*.ttf|*.woff|*.woff2)'
    , dest: build+assets+'fonts'
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
      styles:       src+assets+'scss/**/*.scss'
    , scripts:      src+assets+'js/**/*.js'
    , images:       src+'**/*(*.png|*.jpg|*.jpeg|*.gif|*.svg)'
    , theme:        [src+'**/*(*.php|*.html)', src+assets+'images/favicon/*(*.ico|*.jpg|*.json)', src+assets+'fonts/**/*(*.eot|*.svg|*.ttf|*.woff|*.woff2)']
    }
  , watcher: 'browsersync'
  }
}
