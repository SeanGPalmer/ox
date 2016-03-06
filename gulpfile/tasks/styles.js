// ==== STYLES ==== //

var gulp          = require('gulp')
  , gutil         = require('gulp-util')
  , plugins       = require('gulp-load-plugins')({ camelize: true })
  , config        = require('../config').styles
  , reporter      = require('postcss-reporter')
  , syntax_scss   = require('postcss-scss')
  , stylelint     = require('stylelint')
  , autoprefixer  = require('autoprefixer')
  , processors    = [autoprefixer(config.autoprefixer)]
  , linter        = [stylelint(config.stylelint)]

// Build stylesheets from source Sass files, autoprefix, and write source maps (for debugging) with libsass
gulp.task('styles-libsass', function() {
  return gulp.src(config.build.src)
  .pipe(plugins.postcss(linter, {syntax: syntax_scss}))
  .pipe(plugins.sourcemaps.init())
  .pipe(plugins.sass(config.libsass))
  .pipe(plugins.postcss(processors))
  .pipe(plugins.cssnano(config.minify))
  .pipe(plugins.sourcemaps.write('./'))
  .pipe(gulp.dest(config.build.dest));
});

// Easily configure the Sass compiler from `/gulpconfig.js`
gulp.task('styles', ['styles-libsass']);
