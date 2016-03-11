// ==== THEME ==== //

var gulp        = require('gulp')
  , plugins     = require('gulp-load-plugins')({ camelize: true })
  , config      = require('../config').theme
;

// Copy PHP source files to the `build` folder
gulp.task('theme-php', function() {
  return gulp.src(config.php.src)
  .pipe(plugins.changed(config.php.dest))
  .pipe(gulp.dest(config.php.dest));
});

// Copy HTML source files to the `build` folder
gulp.task('theme-html', function() {
  return gulp.src(config.html.src)
  .pipe(plugins.changed(config.html.dest))
  .pipe(gulp.dest(config.html.dest));
});

// Copy favicon source files to the `build` folder
gulp.task('theme-favicon', function() {
  return gulp.src(config.favicon.src)
  .pipe(plugins.changed(config.favicon.dest))
  .pipe(gulp.dest(config.favicon.dest));
});

// Copy font source files to the `build` folder
gulp.task('theme-font', function() {
  return gulp.src(config.font.src)
  .pipe(plugins.changed(config.font.dest))
  .pipe(gulp.dest(config.font.dest));
});

// Copy everything under `src/languages` indiscriminately
gulp.task('theme-lang', function() {
  return gulp.src(config.lang.src)
  .pipe(plugins.changed(config.lang.dest))
  .pipe(gulp.dest(config.lang.dest));
});

// All the theme tasks in one
gulp.task('theme', ['theme-lang', 'theme-php', 'theme-html']);
