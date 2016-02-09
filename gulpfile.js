// *****************************************************************
// Ox - A responsive HTML5 Framework using SCSS, Gulp and Bower.
//
// GULP SETTINGS
//
// *****************************************************************
//
// DEPENDENCIES - ensure these applications are installed.
//
// Node JS    - http://nodejs.org/download/
// Ruby 1.9.3 - https://ruby-lang.org/en/downloads/
// Sass       - http://sass-lang.com/install
// Compass    - http://compass-style.org/install/
// Bower      - http://bower.io/
// Git        - http://git-scm.com/downloads
//
//
// REQUIRED CHANGES
//
// Update the project variable to the name of your project folder (e.g var project to 'projectfoldername')
//
//
// OPTIONAL CHANGE
//
// Bower - uncomment bower tasks that want to be included
//
// *****************************************************************

// ==== SETUP ==== //

// Required changes
var project     = 'ox';

// Project configuration
var build       = './build/'
  , dist        = './dist/'
  , source      = './src/'
  , lang        = 'languages/'
  , bower       = './bower_components/'
;

// Initialization sequence
var gulp        = require('gulp')
  , gutil       = require('gulp-util')
  , plugins     = require('gulp-load-plugins')({ camelize: true }) // This loads all modules prefixed with "gulp-" to plugin.moduleName
  , del         = require('del')
  , sass        = require('gulp-ruby-sass');
;

var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

// ==== BROWSER-SYNC ==== //

gulp.task('serve', function(gulpCallback) {
    // Initialize browser-sync
    browserSync.init({
        proxy: project+'.dev',
        notify: false
    }, function callback() {
        gulp.watch(build+'**/*(*.html|*.php|*.txt)', browserSync.reload);
        gulp.watch(build+'js/**/*.js', browserSync.reload);

        gulp.watch(build+'**/*.css', function() {
            gulp.src(build+'**/*.css')
            .pipe(browserSync.stream());
        });

        gulpCallback();
    });
});


// ==== STYLES ==== //

// Stylesheet handling; don't forget `gem install sass`; Compass is included here so remember 'gem install compass --pre'
gulp.task('styles', function() {
    return sass(source+'scss/**/*.scss', {
        style: 'expanded',
        compass: true
    })
    .pipe(plugins.plumber())
    .pipe(plugins.autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest(build+'styles/'))
    .pipe(plugins.rename({suffix: '.min'}))
    .pipe(plugins.minifyCss({ keepSpecialComments: 1 }))
    .pipe(gulp.dest(build+'styles/'))
    .pipe(browserSync.stream());
});



// ==== SCRIPTS ==== //

// Scripts; broken out into different tasks to create specific bundles which are then compressed in place
gulp.task('scripts', ['scripts-lint', 'scripts-core', 'scripts-vendor', 'scripts-jquery', 'scripts-modernizr'], function(){
    return gulp.src([
        build+'js/**/*.js',
        '!'+build+'js/**/*.min.js'  // Avoid recursive min.min.min.js
    ])
    .pipe(plugins.plumber())
    .pipe(plugins.rename({suffix: '.min'}))
    .pipe(plugins.uglify())
    .pipe(gulp.dest(build+'js/'))
    .pipe(browserSync.stream());
});

// Lint scripts for errors and sub-optimal formatting
gulp.task('scripts-lint', function() {
    return gulp.src([
        source+'js/**/*.js',
        '!'+source+'js/vendor/*.js'
    ])
    .pipe(plugins.plumber())
    .pipe(plugins.jshint('.jshintrc'))
    .pipe(plugins.jshint.reporter('default'));
});

// These are the core custom scripts loaded on every page; pass an array to bundle several scripts in order
gulp.task('scripts-core', function() {
    return gulp.src([
        source+'js/core.js'
    ])
    .pipe(plugins.plumber())
    .pipe(plugins.concat('core.js'))
    .pipe(gulp.dest(build+'js/'));
});

// These are the vendor scripts loaded on every page; pass an array to bundle several scripts in order
gulp.task('scripts-vendor', function() {
    return gulp.src([
        source+'js/vendor/*.js'
    ])
    .pipe(plugins.plumber())
    .pipe(plugins.concat('vendor.js'))
    .pipe(gulp.dest(build+'js/'));
});

// Create local jquery.js file
gulp.task('scripts-jquery', function() {
    return gulp.src(bower+'jquery/dist/jquery.js')
    .pipe(plugins.plumber())
    .pipe(plugins.concat('jquery.js'))
    .pipe(gulp.dest(build+'js/'));
});

// Create local modernizr file
gulp.task('scripts-modernizr', function() {
    return gulp.src(bower+'modernizr/modernizr.js')
    .pipe(plugins.plumber())
    .pipe(plugins.concat('modernizr.js'))
    .pipe(gulp.dest(build+'js/'));
});



// ==== IMAGES ==== //

// Copy images; minification occurs during packaging
gulp.task('images', function() {
    return gulp.src(source+'**/*(*.png|*.jpg|*.jpeg|*.gif|*.ico)')
    .pipe(plugins.plumber())
    .pipe(plugins.imagemin({
        optimizationLevel: 3,
        progressive: true,
        interlaced: true
    }))
    .pipe(gulp.dest(build))
    .pipe(browserSync.stream());
});



// ==== FAVICON ==== //

// Copy favicon files
gulp.task('favicon', function() {
    return gulp.src(source+'**/*(*.ico|*.xml|*.json)')
    .pipe(plugins.plumber())
    .pipe(gulp.dest(build))
    .pipe(browserSync.stream());
});



// ==== LANGUAGES ==== //

// Copy everything under `src/languages` indiscriminately
gulp.task('languages', function() {
    return gulp.src(source+lang+'**/*')
    .pipe(plugins.plumber())
    .pipe(gulp.dest(build+lang));
});



// ==== HTML ==== //

// Copy HTML, PHP & .txt source files to the build directory
gulp.task('html', function() {
    return gulp.src(source+'**/*(*.html|*.php|*.txt)')
    .pipe(plugins.plumber())
    .pipe(gulp.dest(build))
    .pipe(browserSync.stream());
});



// ==== FONTS ==== //

// Copy fonts files to the build directory
gulp.task('fonts', function() {
    return gulp.src(source+'**/*(*.eot|*.svg|*.ttf|*.woff)')
    .pipe(plugins.plumber())
    .pipe(gulp.dest(build))
    .pipe(browserSync.stream());
});



// ==== BUILD WIPE ==== //

// Totally wipe the contents of the build folder
gulp.task('build-wipe', function(cb) {
    del([build], cb)
});



// ==== DISTRIBUTION ==== //

// Prepare a distribution, the properly minified, uglified, and sanitized version of the theme ready for installation

// Clean out junk files after build
gulp.task('clean', ['build'], function(cb) {
    del([build+'**/.DS_Store'], cb)
});

// Totally wipe the contents of the distribution folder after doing a clean build
gulp.task('dist-wipe', ['build'], function(cb) {
    del([dist], cb)
});

// Copy everything in the build folder (except previously minified stylesheets) to the `dist/project` folder
gulp.task('dist-copy', ['build'], function() {
    return gulp.src([
        build+'**/*',
        '!'+build+'**/*.min.css'
    ])
    .pipe(plugins.plumber())
    .pipe(gulp.dest(dist));
});

// Minify stylesheets in place
gulp.task('dist-styles', ['dist-copy'], function() {
    return gulp.src([
        dist+'**/*.css',
        '!'+dist+'**/*.min.css'
    ])
    .pipe(plugins.plumber())
    .pipe(plugins.minifyCss({
        keepSpecialComments: 1
    }))
    .pipe(gulp.dest(dist));
});

// Optimize images in place
gulp.task('dist-images', ['dist-styles'], function() {
    return gulp.src(dist+'**/*(*.jpg|*.jpeg|*.png|*.gif)')
    .pipe(plugins.plumber())
    .pipe(gulp.dest(dist));
});




// ==== BOWER ==== //

// Executed on `bower update` which is in turn triggered by `npm update`; use this to manually copy front-end dependencies into your working source folder
gulp.task('bower', [
    'bower-fitvids',
    //'bower-normalize'
]);

// Used to get around Sass's inability to properly @import vanilla CSS
gulp.task('bower-normalize', function() {
    return gulp.src(bower+'normalize.css/normalize.css')
    .pipe(plugins.rename('_normalize.scss'))
    .pipe(gulp.dest(source+'scss/utils'));
});

// Move FitVids to js/vendor
gulp.task('bower-fitvids', function() {
    return gulp.src(bower+'fitvids/jquery.fitvids.js')
    .pipe(plugins.rename('fitvids.js'))
    .pipe(gulp.dest(source+'js/vendor'));
});





// ==== WATCH ==== //

// Watch task: build stuff when files are modified, livereload when anything in the `build` or `dist` folders change
gulp.task('watch', ['serve'], function() {
    gulp.watch(source+'scss/**/*.scss', ['styles']);
    gulp.watch(source+'js/**/*.js', ['scripts']);
    gulp.watch(source+'**/*(*.png|*.jpg|*.jpeg|*.gif)', ['images']);
    gulp.watch(source+'**/*(*.html|*.php|*.txt)', ['html']);
    gulp.watch(source+'**/*(*.eot|*.svg|*.ttf|*.woff)', ['fonts']);
});



// ==== TASKS ==== //

// Build styles and scripts; copy PHP files
gulp.task('build', ['styles', 'scripts', 'images', 'favicon', 'languages', 'fonts', 'html']);

// Release creates a clean distribution package under `dist` after running build, clean, and wipe in sequence
gulp.task('dist', ['dist-images']);

// The default task runs watch which boots up the Livereload server after an initial build is finished
gulp.task('default', ['watch']);
